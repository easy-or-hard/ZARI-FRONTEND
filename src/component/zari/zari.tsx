"use client";

import { useCallback, useContext } from "react";
import { ToastContext } from "@/component/ui/toast-message/toast-provider";
import { ModalContext } from "@/component/ui/popup/modal/modal.provider";
import constellationMap from "@/component/constellation/map";
import styles from "./zari.module.css";
import ShareIcon from "@/component/ui/icon/size24/link";
import { DOMAIN } from "@/const";
import { useZari } from "@/services/zari/use.zari";
import { usePathname, useRouter } from "next/navigation";
import { useMyByeol } from "@/services/byeol/use.byeol";
import { useEventBanzzacks } from "@/services/banzzack/use.banzzack";
import { BanzzackTreeUniqueKey } from "@/services/banzzack/entities/banzzack.entity";
import { useConstellation } from "@/services/constellation/use.constellation";
import SpeedDial from "@/component/ui/menu/speed-dial";

type Props = {
  name: string;
  constellationIAU: string;
};

/**
 * @description 반짝이를 볼 수 있는 페이지
 * @param {number} id
 * @constructor
 */
export default function Zari({ name, constellationIAU }: Props) {
  // 컨텍스트 임포트
  const toastContext = useContext(ToastContext);
  if (!toastContext) throw new Error("ToastContext is null");
  const showToast = toastContext;

  const modalContext = useContext(ModalContext);
  if (!modalContext) throw new Error("ModalContext is null");
  const { showReadBanzzackModal, showCreateBanzzackModal, showConfirmModal } =
    modalContext;

  // 로직 시작

  // 자신의 자리에 별을 쓸 수 없게 하는 로직의 변수
  const pathName = usePathname();
  const lastSection = decodeURIComponent(pathName.split("/").pop() as string);
  const { data: myByeol } = useMyByeol();

  // 비인증 사용자가 반짝이를 붙일 때 필요한 변수
  const router = useRouter();

  // 반짝이 데이터 가져오기
  const { data: zariData } = useZari([name, constellationIAU]);
  const { data: constellationData } = useConstellation([constellationIAU]);

  // 반짝이를 표현하기 위한 컴포넌트
  const constellation = constellationMap[constellationIAU];
  const ConstellationOrigin = constellation.origin;
  const ConstellationEffect = constellation.effect;
  const ConstellationWriting = constellation.writing;

  // 현재 누가 반짝이를 붙이는 중일경우를 체크하는 변수
  const { locks, lock, unlock } = useEventBanzzacks([name, constellationIAU]);

  const handleShare = useCallback(() => {
    navigator.clipboard
      .writeText(`${DOMAIN.BASE_URL}/byeol/${name}`)
      .then(() => {
        showToast("링크를 복사했어요");
      })
      .catch((error) => {
        console.error("클립보드 복사 실패: ", error);
      });
  }, [name, showToast]);

  const handleSvgClick = useCallback(
    (event: any) => {
      if (event.target.tagName.toLowerCase() !== "circle") {
        return;
      }

      const selectedStarNumber =
        +event.target.parentNode.getAttribute("data-name");

      const banzzack = zariData?.banzzacks.find(
        (banzzack) => banzzack.starNumber === selectedStarNumber
      );

      // 반짝이가 존재할 경우
      if (banzzack) {
        const banzzackTreeUniqueKey: BanzzackTreeUniqueKey = [
          name,
          constellationIAU,
          selectedStarNumber,
        ];
        showReadBanzzackModal({ banzzackTreeUniqueKey: banzzackTreeUniqueKey });
      }
      // 반짝이가 없을 경우
      else {
        if (locks.includes(selectedStarNumber)) {
          showToast("다른 별이 반짝이를 붙이고 있어요");
          return;
        } else if (lastSection === "byeol" || lastSection === myByeol?.name) {
          showToast("자신의 자리에는 반짝이를 붙일 수 없어요");
          return;
        } else if (!myByeol) {
          // 비인증상태라서 인증으로 보내기
          showConfirmModal({
            description: "반짝이를 붙이기 위해서는 인증을 해야해요.",
            onAccept: () => {
              router.push("/auth");
            },
            accept: "인증하러 가기",
            cancel: "그냥 둘러보기",
          });
          return;
        }

        // 찐 반짝이 붙이기
        const banzzackTreeUniqueKey: BanzzackTreeUniqueKey = [
          name,
          constellationIAU,
          selectedStarNumber,
        ];

        lock(selectedStarNumber).then(() => {
          showCreateBanzzackModal({
            banzzackTreeUniqueKey: banzzackTreeUniqueKey,
            closeBeforeCallback: () => {
              unlock(selectedStarNumber);
            },
          });
        });
      }
    },
    [
      zariData?.banzzacks,
      name,
      constellationIAU,
      showReadBanzzackModal,
      locks,
      lastSection,
      myByeol,
      lock,
      showToast,
      showConfirmModal,
      router,
      showCreateBanzzackModal,
      unlock,
    ]
  );

  return (
    <div className={styles.container}>
      <svg
        className={styles.constellationOrigin}
        viewBox="0 0 360 640"
        filter={`url(#blur)`}
        onClick={handleSvgClick}
      >
        <filter
          id="blur"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
          filterUnits="userSpaceOnUse"
        >
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
          <feBlend mode="screen" in2="SourceGraphic" />
        </filter>
        <ConstellationWriting locks={locks} />
        {zariData && <ConstellationEffect banzzacks={zariData.banzzacks} />}
        <ConstellationOrigin />
      </svg>
      {/* svg 가 위에 있는 이유는 영역이 커서 문맥상 먼저 나온 돔이 클릭이 안 돼서... */}
      <div className={styles.description}>
        <div className={styles.byeolName}>{name}</div>
        {constellationData && (
          <div className={styles.constellationName}>
            {constellationData.name}자리
          </div>
        )}
        {constellationData && zariData && (
          <div className={styles.collectedStar}>
            {zariData.banzzacks.length} / {constellationData.constellationCount}
          </div>
        )}
      </div>
      <button type={"button"} className={styles.share} onClick={handleShare}>
        <ShareIcon />
      </button>
      <SpeedDial />
    </div>
  );
}

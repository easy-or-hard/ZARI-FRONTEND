"use client";

import { useCallback, useContext } from "react";
import { ToastContext } from "@/component/ui/toast-message/toast-provider";
import { ModalContext } from "@/component/ui/popup/modal/modal.provider";
import constellationMap from "@/component/constellation/map";
import styles from "./zari.module.css";
import ShareIcon from "@/component/ui/icon/size24/link";
import { DOMAIN } from "@/const";
import { useZari } from "@/services/zari/use.zari";
import { BanzzackKey, BanzzackUnique } from "@/services/byeol/api.byeol";

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
  const { showReadBanzzackModal, showCreateBanzzackModal } = modalContext;

  const { data: zariData } = useZari([name, constellationIAU]);

  const constellation = constellationMap[constellationIAU];
  const ConstellationOrigin = constellation.origin;
  const ConstellationEffect = constellation.effect;

  const handleShare = useCallback(() => {
    navigator.clipboard
      .writeText(`${DOMAIN.BASE_URL}/byeol/${name}`)
      .then(() => {
        showToast("링크를 복사했어요");
      })
      .catch((error) => {
        console.error("클립보드 복사 실패: ", error);
      });
  }, [showToast]);

  const handleSvgClick = useCallback(
    (event: any) => {
      if (event.target.tagName.toLowerCase() !== "circle") {
        return;
      }

      console.log("🍓click", event.target.tagName.toLowerCase());

      const selectedStarNumber =
        +event.target.parentNode.getAttribute("data-name");

      const banzzack = zariData?.banzzacks.find(
        (banzzack) => banzzack.starNumber === selectedStarNumber
      );

      // 반짝이가 존재할 경우
      if (banzzack) {
        const banzzackUniqueKey: BanzzackKey = [
          name,
          constellationIAU,
          selectedStarNumber,
        ];

        showReadBanzzackModal({ uniqueKey: banzzackUniqueKey });
      }
      // 반짝이가 없을 경우
      else {
        const banzzackUnique: BanzzackUnique = {
          name,
          constellationIAU,
          starNumber: selectedStarNumber,
        };
        showCreateBanzzackModal({
          unique: banzzackUnique,
          closeBeforeCallback: () => {},
        });
      }
    },
    [zariData?.banzzacks, showCreateBanzzackModal, showReadBanzzackModal]
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
        {zariData && <ConstellationEffect banzzacks={zariData?.banzzacks} />}
        <ConstellationOrigin />
        {/* {zariData && <ConstellationWriting banzzacks={zariData?.banzzacks} />}*/}
      </svg>
      {/* svg 가 위에 있는 이유는 영역이 커서 문맥상 먼저 나온 돔이 클릭이 안 돼서... */}
      <div className={styles.description}>
        <div className={styles.byeolName}>{name}</div>
        {zariData && (
          <div className={styles.constellationName}>
            {zariData.constellation.name}자리
          </div>
        )}
        {zariData && (
          <div className={styles.collectedStar}>
            {zariData.banzzacks.length} /{" "}
            {zariData.constellation.constellationCount}
          </div>
        )}
      </div>
      <button type={"button"} className={styles.share} onClick={handleShare}>
        <ShareIcon />
      </button>
    </div>
  );
}

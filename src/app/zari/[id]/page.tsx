"use client";

import constellationMap from "@/app/component/constellation/map";
import useZari from "@/services/zari/use.zari";
import { MouseEventHandler, useCallback, useContext, useEffect } from "react";
import { notFound } from "next/navigation";
import { ModalContext } from "@/app/component/ui/popup/modal/modal.provider";
import { ToastContext } from "@/app/component/ui/toast-message/toast-provider";
import ZariHeader from "@/app/zari/[id]/zari-header";
import useZariLockBanzzack from "@/services/zari/use.zari-lock-banzzack";

type Props = {
  params: {
    id: number;
  };
};

/**
 * @description 반짝이를 볼 수 있는 페이지
 * @param {number} id
 * @constructor
 */
export default function ZariPage({ params: { id } }: Props) {
  // 컨텍스트 임포트
  const toastContext = useContext(ToastContext);
  if (!toastContext) throw new Error("ToastContext is null");
  const showToast = toastContext;

  const modalContext = useContext(ModalContext);
  if (!modalContext) throw new Error("ModalContext is null");
  const { showReadBanzzackModal, showCreateBanzzackModal, allCloseModal } =
    modalContext;

  // 로직 시작
  const {
    data: includeConstellationByeolBanzzackZari,
    isLoading,
    error,
  } = useZari(id);

  const { locks, lock, release, createBanzzackTimeOut, timeOutInit } =
    useZariLockBanzzack(id);

  // 서버에서 타임아웃을 날리면 모든 모달 팝업 닫기, 타임아웃 초기화
  useEffect(() => {
    if (createBanzzackTimeOut) {
      allCloseModal();
      timeOutInit();
      // 릴리즈가 되면 반짝이이 붙이기에 성공한 케이스도 호출 돼서 일딴 주석합니다.
      // TODO, 반짝이 붙이기 타임아웃에만 토스트 띄우도록 수정하기
      // showToast("반짝이 붙이기를 취소했어요");
    }
  }, [createBanzzackTimeOut]);

  const handlerRandomBanzzackCreate = useCallback(() => {
    // Get all elements of ConstellationOriginComponent
    const gElements = document.querySelectorAll(
      "svg g[id] > circle:first-child"
    );

    // Filter out elements that are in locks or includeConstellationByeolBanzzackZari.banzzacks
    const availableElements = Array.from(gElements).filter((element) => {
      const starNumber = Number(
        element.parentElement?.getAttribute("data-name")
      );
      return (
        !locks[starNumber] &&
        !includeConstellationByeolBanzzackZari?.banzzacks.find(
          (banzzack) => banzzack.starNumber === starNumber
        )
      );
    });

    // If there are no available elements, return
    if (availableElements.length === 0) {
      showToast("모든 반짝이가 붙었어요");
      return;
    }

    // Select a random element from the available elements
    const randomElement =
      availableElements[Math.floor(Math.random() * availableElements.length)];

    // Trigger a click event on the random element
    randomElement.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  }, [includeConstellationByeolBanzzackZari, locks]);

  if (isLoading) return null;
  else if (error || !includeConstellationByeolBanzzackZari) {
    notFound();
  }

  const {
    origin: ConstellationOriginComponent,
    effect: ConstellationEffectComponent,
    writing: ConstellationWritingComponent,
  } = constellationMap[includeConstellationByeolBanzzackZari.constellationIAU];

  const handlerBanzzack: MouseEventHandler<SVGSVGElement> = (event) => {
    const target = event.target as SVGElement;
    if (target.tagName === "circle") {
      const parent = target.parentNode as SVGGElement;
      const starNumber = Number(parent.getAttribute("data-name"));
      if (!starNumber) return; // 이 케이스가 나와서는 안 됨. 나온다는것은 svg 파일이 잘못된 것임.
      const banzzack = includeConstellationByeolBanzzackZari.banzzacks.find(
        (banzzack) => banzzack.starNumber === +starNumber
      );

      // TODO, useBanzzack 훅을 만들어놨는데 이걸로 교체하기
      if (banzzack) {
        showReadBanzzackModal({ banzzack });
      } else {
        if (locks[starNumber]) {
          showToast("✨ 누군가 반짝이를 붙이고 있어요");
        } else {
          // 락이 성공하면 반짝이 붙이기
          lock(starNumber)
            .then(() => {
              const createBanzzackModalProps = {
                byeolName: includeConstellationByeolBanzzackZari.byeol.name,
                zariId: includeConstellationByeolBanzzackZari.id,
                starNumber: starNumber,
                closeBeforeCallback: () => {
                  release(starNumber);
                },
              };
              showCreateBanzzackModal(createBanzzackModalProps);
            })
            .catch((error) => {
              if (error.statusCode === 401) {
                showToast("✨ 회원 가입 먼저 하라우!");
              } else {
                showToast("✨ 누군가 반짝이를 붙이고 있어요");
              }
            });
        }
      }
    }
  };

  return (
    <div className="h-full p-4 flex flex-col items-center">
      <ZariHeader onClickWrite={handlerRandomBanzzackCreate} />
      <div className={"p-4 flex flex-col justify-around items-center"}>
        <div className="font-bold text-center text-5xl">
          {includeConstellationByeolBanzzackZari.byeol.name}
        </div>
        <div className="font-medium text-center">
          {includeConstellationByeolBanzzackZari.constellation.name} 자리
        </div>
      </div>
      <svg
        onClick={handlerBanzzack}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 360 640"
      >
        {/* 이펙트가 별자리 origin 보다 문맥상으로 상단에 있어야 origin 의 객체를 가리지 않습니다. */}
        <ConstellationWritingComponent locks={locks} />
        <ConstellationEffectComponent
          banzzacks={includeConstellationByeolBanzzackZari.banzzacks}
        />
        {/* 별자리 */}
        <ConstellationOriginComponent />
      </svg>
    </div>
  );
}

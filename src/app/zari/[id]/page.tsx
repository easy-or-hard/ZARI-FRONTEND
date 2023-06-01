"use client";

import constellationMap from "@/app/component/constellation/map";
import { useZariFindById } from "@/services/zari/zari.use";
import { MouseEventHandler, useContext } from "react";
import { notFound } from "next/navigation";
import { ModalContext } from "@/app/component/ui/popup/modal/modal.provider";

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
  const modalContext = useContext(ModalContext);
  if (!modalContext) throw new Error("ModalContext is null");
  const { showReadBanzzackModal, showCreateBanzzackModal } = modalContext;
  const {
    data: OkResponseIncludeConstellationByeolBanzzackZari,
    isLoading,
    error,
  } = useZariFindById(id);

  if (isLoading) return null;
  else if (error || !OkResponseIncludeConstellationByeolBanzzackZari) {
    notFound();
  }

  const includeConstellationByeolBanzzackZari =
    OkResponseIncludeConstellationByeolBanzzackZari.data;

  const {
    origin: ConstellationOriginComponent,
    effect: ConstellationEffectComponent,
  } = constellationMap[includeConstellationByeolBanzzackZari.constellationIAU];

  const handlerBanzzack: MouseEventHandler<SVGSVGElement> = (event) => {
    const target = event.target as SVGElement;
    if (target.tagName === "circle") {
      const parent = target.parentNode as SVGGElement;
      const starNumber = parent.getAttribute("data-name");
      if (!starNumber) return; // 이 케이스가 나와서는 안 됨. 나온다는것은 svg 파일이 잘못된 것임.
      const banzzack = includeConstellationByeolBanzzackZari.banzzacks.find(
        (banzzack) => banzzack.starNumber === +starNumber
      );

      if (banzzack) {
        showReadBanzzackModal({ banzzack });
      } else {
        const createBanzzackModalProps = {
          byeolName: includeConstellationByeolBanzzackZari.byeol.name,
          zariId: includeConstellationByeolBanzzackZari.id,
          starNumber: +starNumber,
        };
        showCreateBanzzackModal(createBanzzackModalProps);
      }
    }
  };

  return (
    <div className="h-full p-4 flex flex-col items-center">
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
        <ConstellationEffectComponent
          banzzacks={includeConstellationByeolBanzzackZari.banzzacks}
        />
        {/* 별자리 */}
        <ConstellationOriginComponent />
      </svg>
    </div>
  );
}

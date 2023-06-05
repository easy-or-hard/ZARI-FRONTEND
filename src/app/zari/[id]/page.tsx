"use client";

import constellationMap from "@/app/component/constellation/map";
import useZari from "@/services/zari/use.zari";
import { MouseEventHandler, useContext, useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { ModalContext } from "@/app/component/ui/popup/modal/modal.provider";
import { baseFetcher, baseFetcherOptions } from "@/services/common/fetcher";
import { API } from "@/const";
import { ToastContext } from "@/app/component/ui/toast-message/toast-provider";

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
  const { showReadBanzzackModal, showCreateBanzzackModal } = modalContext;

  // 로직 시작
  const {
    data: includeConstellationByeolBanzzackZari,
    isLoading,
    error,
  } = useZari(id);

  const [locks, setLocks] = useState<Record<number, boolean>>({});

  // SSE 접속을 시작
  useEffect(() => {
    const eventSource = new EventSource(`${API.BASE_URL}/zari/${id}/event`);

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.locked) {
        setLocks({ ...locks, [data.starNumber]: true });
      } else {
        mutate().finally(() => {
          setLocks((prevLocks) => {
            const updatedLocks = { ...prevLocks };
            delete updatedLocks[data.starNumber];
            return updatedLocks;
          });
        });
      }
    };

    // 컴포넌트가 언마운트되면 SSE 접속을 종료
    return () => {
      eventSource.close();
    };
    // todo, 의존성에 locks 를 넣는게 좋을까? 고민해봐
  }, [id, mutate]);

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
        if (!locks[starNumber]) {
          baseFetcher(
            `${API.BASE_URL}/zari/${id}/banzzack/${starNumber}/lock`,
            baseFetcherOptions("POST")
          )
            .then(() => {
              // 락이 걸려있지 않은 경우에만 반짝이를 생성
              const createBanzzackModalProps = {
                byeolName: includeConstellationByeolBanzzackZari.byeol.name,
                zariId: includeConstellationByeolBanzzackZari.id,
                starNumber: +starNumber,
                closeBeforeCallback: () => {
                  baseFetcher(
                    `${API.BASE_URL}/zari/${id}/banzzack/${starNumber}/release`,
                    baseFetcherOptions("DELETE")
                  ).then(() => {
                    setLocks((prevLocks) => {
                      const updatedLocks = { ...prevLocks };
                      delete updatedLocks[starNumber];
                      return updatedLocks;
                    });
                  });
                },
              };
              showCreateBanzzackModal(createBanzzackModalProps);
            })
            .catch((e) => {
              // TODO, 얼럿이나 토스트 띄우기
              console.log("🧊🧊🧊🧊🧊🧊잠겨있음", e);
            });
        } else {
          showToast("✨ 누군가 반짝이를 붙이고 있어요");
        }
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

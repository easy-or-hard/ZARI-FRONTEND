"use client";

import constellationMap from "@/component/constellation/map";
import Carousel from "@/component/carousel/carousel";
import { createElement, useCallback, useRef, useState } from "react";
import styles from "./zari-create.module.css";
import ConfirmButton from "@/component/ui/button/confirm/confirm.button";
import { useRouter } from "next/navigation";
import { usePostZari } from "@/services/zari/use.zari";
import { useMyByeol } from "@/services/byeol/use.byeol";

export default function ZariCreatePage() {
  const router = useRouter();
  const [constellationIAU, setConstellationIAU] = useState<string>("");
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const { data: byeol } = useMyByeol();
  // TODO, useSWR 은 key 가 없을 경우 자동으로 처리해주는데, useSWRMutation 은 그런기능이 없음....
  // 그래서 "" 를 넣어줌 업데이트 내역 반드시 확인하고 안전하게 데이터 처리할것
  const { trigger } = usePostZari([byeol?.name ?? "", constellationIAU]);

  const sliderRef = useRef<HTMLDivElement>(null);

  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);

  const handleOnClick = useCallback(() => {
    setIsClicked(true);
    trigger().then(() => {
      router.push("/byeol");
    });
  }, [constellationIAU, router, trigger]);

  return (
    <div className={styles.container}>
      <div className={styles.selector}>
        <Carousel
          ref={sliderRef}
          showItemCount={5}
          setConstellationIAU={setConstellationIAU}
          setIsMouseDown={setIsMouseDown}
          isMouseDown={isMouseDown}
        >
          {Object.values(constellationMap).map(
            ({ icon: ConstellationIcon }, index) => (
              <ConstellationIcon key={index} />
            )
          )}
        </Carousel>
      </div>
      <svg
        className={styles.constellationOrigin}
        viewBox="0 0 360 640"
        filter={`url(#blur)`}
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
        {constellationIAU &&
          createElement(constellationMap[constellationIAU].origin)}
      </svg>
      <div className={styles.wrapButton}>
        <ConfirmButton
          colorType={"accept"}
          disabled={isClicked}
          onClick={handleOnClick}
        >
          자리 만들기 완료!
        </ConfirmButton>
      </div>
    </div>
  );
}

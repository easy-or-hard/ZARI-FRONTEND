"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Splash from "@/app/component/constellation/splash";

/**
 * @description 메인 페이지
 * @constructor
 */
export default function MainPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/auth/sign-in");
  }, []);

  return (
    <div
      className="h-full flex flex-col justify-center items-center"
      style={{
        backgroundImage: "url(/left_cloud.png), url(/right_cloud.png)",
        backgroundPosition: "left bottom, right bottom",
        backgroundRepeat: "no-repeat, no-repeat",
        mixBlendMode: "normal",
      }}
    >
      <Splash />
      <div>
        <h2 className="font-SUIT text-1xl font-normal leading-30 tracking-0 text-center">
          우리의 이야기
        </h2>
        <h1 className="font-SUIT text-7xl font-bold leading-63 tracking-0.2 text-center">
          ZARI
        </h1>
      </div>
    </div>
  );
}

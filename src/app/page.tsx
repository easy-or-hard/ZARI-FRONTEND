"use client";

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import Splash from "@/app/component/constellation/splash";
import { JoinStepControlContext } from "@/app/component/auth/join-step-control.provider";
import { useIsByeol } from "@/services/auth/use.auth";

/**
 * @description 메인 페이지
 * @constructor
 */
export default function MainPage() {
  const joinStepControlContext = useContext(JoinStepControlContext);
  if (!joinStepControlContext)
    throw new Error("JoinStepControlContext is null");
  const { step, setStep } = joinStepControlContext;
  const { data: isByeol, isLoading, isValidating } = useIsByeol();

  const router = useRouter();

  useEffect(() => {
    if (isLoading || isValidating) return;
    if (step === -1) {
      setStep(0);
    }
  }, [isLoading, isValidating]);

  useEffect(() => {
    if (isLoading || isValidating) return;
    isByeol && router.replace("/byeol/me");
  }, [isByeol, isLoading, isValidating, router]);

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
      {step === -1 && (
        <>
          <Splash />
          <div>
            <h2 className="font-SUIT text-1xl font-normal leading-30 tracking-0 text-center">
              우리의 이야기
            </h2>
            <h1 className="font-SUIT text-7xl font-bold leading-63 tracking-0.2 text-center">
              ZARI
            </h1>
          </div>
        </>
      )}
    </div>
  );
}

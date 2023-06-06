"use client";

import { useContext, useMemo } from "react";
import { JoinStepControlContext } from "@/app/component/auth/join-step-control.provider";

export default function Page() {
  const joinStepControlContext = useContext(JoinStepControlContext);
  if (!joinStepControlContext)
    throw new Error("joinStepControlContext is null");
  const { step, setStep } = useMemo(
    () => joinStepControlContext,
    [joinStepControlContext]
  );

  return (
    <>
      <div className="h-full w-full">
        화면 전체 다 사용
        <hr />
      </div>
      <button onClick={() => setStep(step + 1)}>다음 스텝</button>
      <hr />
      <button onClick={() => setStep(-1)}>스텝 완료</button>
      <hr />
      <div>{step}</div>
    </>
  );
}

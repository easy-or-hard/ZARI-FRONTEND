"use client";

import WriteIcon from "@/app/component/ui/icon/size24/write";
import SpeedDial from "@/app/component/ui/menu/speed-dial";
import { useCallback, useContext } from "react";
import { useIsByeol } from "@/services/auth/use.auth";
import { JoinStepControlContext } from "@/app/component/auth/join-step-control.provider";

type Props = {
  onClickWrite: () => void;
};

export default function ZariHeader({ onClickWrite }: Props) {
  const joinStepControlContext = useContext(JoinStepControlContext);
  if (!joinStepControlContext)
    throw new Error("JoinStepControlContext is null");
  const { step, setStep } = joinStepControlContext;

  const { data: isByeol, isLoading, isValidating } = useIsByeol();
  const handlerWrite = useCallback(() => {
    if (isLoading || isValidating) return;
    if (!isByeol) {
      setStep(step + 1);
    } else {
      onClickWrite();
    }
  }, [isByeol, isLoading, isValidating, onClickWrite, setStep, step]);

  return (
    <header className="absolute w-full px-4 mt-5 flex justify-between items-start">
      <SpeedDial />
      <button onClick={handlerWrite}>
        <WriteIcon />
      </button>
    </header>
  );
}

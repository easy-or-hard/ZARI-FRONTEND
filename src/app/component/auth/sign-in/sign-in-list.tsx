"use client";

import { useCallback, useContext, useEffect } from "react";
import { API } from "@/const";
import { useIsByeol, useIsUser } from "@/services/auth/use.auth";
import { JoinStepControlContext } from "@/app/component/auth/join-step-control.provider";

/**
 * @description OAuth 가능 리스트 컴포넌트
 * @constructor
 */
export default function SignInList() {
  const joinStepControlContext = useContext(JoinStepControlContext);
  if (!joinStepControlContext) {
    throw new Error("joinStepControlContext is null");
  }
  const { step, setStep } = joinStepControlContext;

  const {
    data: isUser,
    isLoading: isUserLoding,
    isValidating: isUserValidating,
  } = useIsUser();
  const {
    data: isByeol,
    isLoading: isByeolLoading,
    isValidating: isByeolValidating,
  } = useIsByeol();
  const openWindow = useCallback((provider: string) => {
    const width = 500;
    const height = 600;
    const left = window.screenLeft + window.innerWidth / 2 - width / 2;
    const top = window.screenTop + window.innerHeight / 2 - height / 2;

    window.open(
      `${API.BASE_URL}/auth/${provider}`,
      "_blank",
      `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`
    );
  }, []);

  useEffect(() => {
    if (isUserLoding || isUserValidating || isByeolLoading || isByeolValidating)
      return;

    if (isUser && isByeol === false) {
      setStep(step + 1);
    } else if (isUser && isByeol) {
      setStep(-1);
    }
  }, [
    isByeol,
    isByeolLoading,
    isByeolValidating,
    isUser,
    isUserLoding,
    isUserValidating,
    setStep,
    step,
  ]);

  return (
    <ul className="grid gap-4">
      <li
        onClick={() => openWindow("github")}
        className="border border-solid rounded-full p-4 text-center"
      >
        github
      </li>
      <li className="border border-solid rounded-full p-4 text-center">
        google(준비중)
      </li>
      <li className="border border-solid rounded-full p-4 text-center">
        naver(준비중)
      </li>
      <li className="border border-solid rounded-full p-4 text-center">
        kakao(준비중)
      </li>
      {/* <li className="border border-solid rounded-full m-5 p-5 text-center">apple(준비중)</li>*/}
    </ul>
  );
}

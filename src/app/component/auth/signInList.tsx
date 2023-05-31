"use client";

import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { API } from "@/const";

import { useIsByeol } from "@/services/auth/auth.use";

/**
 * @description OAuth 가능 리스트 컴포넌트
 * @constructor
 */
export default function SignInList() {
  const router = useRouter();
  const { data: byeol, isLoading } = useIsByeol();
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
    if (byeol?.data) {
      router.replace("/byeol/me");
    } else if (byeol?.data === false) {
      router.replace("/byeol/create");
    }
  }, [byeol, isLoading, router]);

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

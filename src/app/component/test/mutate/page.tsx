"use client";
import { useIsByeol } from "@/services/auth/auth.use";
import { useCallback } from "react";
import { API } from "@/const";

export default function MutateTestPage() {
  const { data: byeol, isLoading, mutate } = useIsByeol();

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

  return (
    <>
      <div>뮤테이트 테스트</div>
      <div>{isLoading && "로딩중"}</div>
      <div>{byeol && byeol.data ? "true" : "false"}</div>
      <div>mutate test page</div>
      <ul>
        <li
          onClick={() => openWindow("github")}
          className="border border-solid rounded-full p-4 text-center"
        >
          github
        </li>
        <li
          onClick={async () => {
            await fetch(`${API.BASE_URL}/auth/sign-out`, {
              method: "GET",
              credentials: "include",
            });
            await mutate(undefined, false);
          }}
          className="border border-solid rounded-full p-4 text-center"
        >
          sign-out
        </li>
      </ul>
    </>
  );
}

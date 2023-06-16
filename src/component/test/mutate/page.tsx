"use client";
import { useCallback, useState } from "react";
import { API } from "@/const";
import {
  useByeol,
  useMyByeol,
  usePatchByeol,
  usePostByeol,
} from "@/services/byeol/use.byeol";
import { signOut } from "@/services/auth/api.auth";
import { PostByeolDto } from "@/services/byeol/dto/reuqest/post-byeol.dto";

export default function MutateTestPage() {
  const [name, setName] = useState<string>();
  const { data: myByeol, isLoading } = useMyByeol();
  const { data: byeol } = useByeol(name);
  const { trigger: postByeol } = usePostByeol(name);
  const { trigger } = usePatchByeol(name);

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
      <div>my byeol {myByeol ? JSON.stringify(myByeol) : null}</div>
      <div>byeol {byeol ? JSON.stringify(byeol) : null}</div>
      <button onClick={() => setName("킹태희2")}>버튼</button>
      <button onClick={() => trigger(undefined)}>트리거</button>
      <div>mutate test page</div>
      <ul>
        <li
          className="border border-solid rounded-full p-4 text-center"
          onClick={() => {
            postByeol({ birthMonth: 12, birthDay: 12 } as PostByeolDto);
          }}
        >
          별 만들기
        </li>
        <li
          onClick={() => openWindow("github")}
          className="border border-solid rounded-full p-4 text-center"
        >
          github
        </li>
        <li
          onClick={() => {
            signOut();
          }}
          className="border border-solid rounded-full p-4 text-center"
        >
          sign-out
        </li>
      </ul>
    </>
  );
}

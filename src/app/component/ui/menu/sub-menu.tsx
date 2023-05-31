"use client";

import HomeIcon from "@/app/component/ui/icon/size24/home";
import SignOutIcon from "@/app/component/ui/icon/size24/sign-out";
import SettingIcon from "@/app/component/ui/icon/size24/setting";
import { useRouter } from "next/navigation";
import { API } from "@/const";
import { mutate } from "swr";
import authFetcher from "@/services/auth/auth.fetcher";

export default function SubMenu() {
  const router = useRouter();
  return (
    <span
      className={`px-3 py-4 bg-zari_default_white rounded-full inline-grid gap-4`}
    >
      <button onClick={() => router.push("/byeol/me")}>
        <HomeIcon color={"#161616"} />
      </button>
      <button>
        <SettingIcon color={"#161616"} />
      </button>
      <button
        onClick={async () => {
          await fetch(`${API.BASE_URL}/auth/sign-out`, {
            method: "GET",
            credentials: "include",
          });

          // TODO, mutate 가 전역으로 써도 되는지 검토하기
          const { key } = authFetcher.isByeol();
          await mutate(key, undefined, false);
        }}
      >
        <SignOutIcon color={"#161616"} />
      </button>
    </span>
  );
}

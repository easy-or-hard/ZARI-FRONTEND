"use client";

import HomeIcon from "@/app/component/ui/icon/size24/home";
import SignOutIcon from "@/app/component/ui/icon/size24/sign-out";
import SettingIcon from "@/app/component/ui/icon/size24/setting";
import { useRouter } from "next/navigation";
import { signOut, useIsByeol } from "@/services/auth/auth.use";
import { useContext } from "react";
import { ToastContext } from "@/app/component/ui/toast-message/toast-provider";

export default function SubMenu() {
  const toastContext = useContext(ToastContext);
  if (!toastContext) throw new Error("ToastContext is null");
  const showToast = toastContext;

  const router = useRouter();
  const handlerSignOut = () => {
    showToast("로그아웃 되었어요");
    signOut();
  };

  const { data: isByeol } = useIsByeol();

  const url = isByeol ? "/byeol/me" : "/";
  return (
    <span
      className={`px-3 py-4 bg-zari_default_white rounded-full inline-grid gap-4`}
    >
      <button onClick={() => router.push(url)}>
        <HomeIcon color={"#161616"} />
      </button>
      {isByeol && (
        <button>
          <SettingIcon color={"#161616"} />
        </button>
      )}
      {isByeol && (
        <button onClick={handlerSignOut}>
          <SignOutIcon color={"#161616"} />
        </button>
      )}
    </span>
  );
}

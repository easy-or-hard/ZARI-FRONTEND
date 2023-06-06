"use client";

import HomeIcon from "@/app/component/ui/icon/size24/home";
import SignOutIcon from "@/app/component/ui/icon/size24/sign-out";
import SettingIcon from "@/app/component/ui/icon/size24/setting";
import { useRouter } from "next/navigation";
import { signOut, useIsByeol } from "@/services/auth/use.auth";
import { useContext } from "react";
import { ToastContext } from "@/app/component/ui/toast-message/toast-provider";
import { ModalContext } from "@/app/component/ui/popup/modal/modal.provider";

export default function SubMenu() {
  const modalConext = useContext(ModalContext);
  if (!modalConext) throw new Error("ModalContext is null");
  const { showConfirmModal, showSettingsModal } = modalConext;

  const toastContext = useContext(ToastContext);
  if (!toastContext) throw new Error("ToastContext is null");
  const showToast = toastContext;

  const router = useRouter();

  const handlerSettings = () => {
    showSettingsModal();
  };

  const handlerSignOut = () => {
    showConfirmModal({
      onAccept: () => {
        signOut().then(() => showToast("로그아웃 되었어요"));
      },
      accept: "나갈래요",
      cancel: "머물게요",
      title: "로그아웃 할까요?",
      description: "다시 로그인 하면 자리로 돌아 올 수 있어요",
      acceptType: "danger",
    });
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
        <button onClick={handlerSettings}>
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

"use client";

import { useContext } from "react";
import { ModalContext } from "@/component/ui/popup/modal/modal.provider";
import { ToastContext } from "@/component/ui/toast-message/toast-provider";
import { useRouter } from "next/navigation";
import { signOut } from "@/services/auth/api.auth";
import { useIsByeol } from "@/services/auth/use.auth";
import HomeIcon from "@/component/ui/icon/size24/home";
import SettingIcon from "@/component/ui/icon/size24/setting";
import SignOutIcon from "@/component/ui/icon/size24/sign-out";

export default function SubMenu() {
  const modalContext = useContext(ModalContext);
  if (!modalContext) throw new Error("ModalContext is null");
  const { showConfirmModal, showSettingsModal } = modalContext;

  const toastContext = useContext(ToastContext);
  if (!toastContext) throw new Error("ToastContext is null");
  const showToast = toastContext;

  const router = useRouter();

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
        <button onClick={showSettingsModal}>
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

"use client";

import { useContext, useEffect, useState } from "react";
import { ModalContext } from "@/component/ui/popup/modal/modal.provider";
import { ToastContext } from "@/component/ui/toast-message/toast-provider";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "@/services/auth/api.auth";
import { useIsByeol } from "@/services/auth/use.auth";
import HomeIcon from "@/component/ui/icon/size24/home";
import SettingIcon from "@/component/ui/icon/size24/setting";
import SignOutIcon from "@/component/ui/icon/size24/sign-out";
import { useMyByeol } from "@/services/byeol/use.byeol";
import SignInIcon from "@/component/ui/icon/size24/sign-in";

export default function SubMenu() {
  const modalContext = useContext(ModalContext);
  if (!modalContext) throw new Error("ModalContext is null");
  const { showConfirmModal, showSettingsModal } = modalContext;

  const toastContext = useContext(ToastContext);
  if (!toastContext) throw new Error("ToastContext is null");
  const showToast = toastContext;

  const router = useRouter();
  const pathName = usePathname();
  const [byeolName, setByeolName] = useState<string>("");

  const { data: isByeol } = useIsByeol();
  const { data: myByeol } = useMyByeol(isByeol);

  useEffect(() => {
    if (!myByeol) return;
    setByeolName(myByeol.name);
  }, [myByeol]);

  const handlerSignOut = () => {
    showConfirmModal({
      onAccept: () => {
        signOut()
          .then(() => showToast("로그아웃 되었어요"))
          .then(() => {
            if (pathName === "/byeol") {
              const url = `/byeol/${byeolName}`;
              router.replace(`${url}`);
            }
          });
      },
      accept: "나갈래요",
      cancel: "머물게요",
      title: "로그아웃 할까요?",
      description: "다시 로그인 하면 자리로 돌아 올 수 있어요",
      acceptType: "danger",
    });
  };

  const handlerSignIn = () => {
    router.push("/auth");
  };

  const url = isByeol ? "/byeol" : "/";

  return (
    <>
      <button onClick={() => router.push(url)}>
        <HomeIcon color={"#161616"} />
      </button>
      <button
        disabled={!isByeol}
        onClick={showSettingsModal}
        style={{ opacity: isByeol ? 1 : 0.3 }}
      >
        <SettingIcon color={"#161616"} />
      </button>
      {isByeol ? (
        <button onClick={handlerSignOut}>
          <SignOutIcon color={"#161616"} />
        </button>
      ) : (
        <button onClick={handlerSignIn}>
          <SignInIcon color={"#161616"} />
        </button>
      )}
    </>
  );
}

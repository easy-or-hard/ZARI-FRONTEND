import React from "react";
import ModalProvider from "@/app/component/ui/popup/modal/modal.provider";
import ToastProvider from "@/app/component/ui/toast-message/toast-provider";
import JoinStepControlProvider from "@/app/component/auth/join-step-control.provider";

export default function ZariLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ToastProvider>
      <ModalProvider>
        <JoinStepControlProvider>{children}</JoinStepControlProvider>
      </ModalProvider>
    </ToastProvider>
  );
}

import React from "react";
import ModalProvider from "@/app/component/ui/popup/modal/modal.provider";
import ToastProvider from "@/app/component/ui/toast-message/toast-provider";

export default function PopupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ModalProvider>
      <ToastProvider>{children}</ToastProvider>
    </ModalProvider>
  );
}

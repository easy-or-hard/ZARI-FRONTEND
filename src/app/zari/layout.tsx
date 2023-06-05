import React from "react";
import ModalProvider from "@/app/component/ui/popup/modal/modal.provider";
import ToastProvider from "@/app/component/ui/toast-message/toast-provider";

export default function ZariLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ToastProvider>
        <ModalProvider>{children}</ModalProvider>
      </ToastProvider>
    </>
  );
}

import React from "react";
import ModalProvider from "@/app/component/ui/popup/modal.provider";

export default function PopupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ModalProvider>{children}</ModalProvider>
    </>
  );
}

import ZariHeader from "@/app/component/zari/zari-header";
import React from "react";
import ModalProvider from "@/app/component/ui/popup/modal/modal.provider";

export default function ZariLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ZariHeader />
      <ModalProvider>{children}</ModalProvider>
    </>
  );
}

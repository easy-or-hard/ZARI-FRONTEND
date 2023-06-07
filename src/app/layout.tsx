import "./globals.css";
import React from "react";
import JoinStepControlProvider from "@/app/component/auth/join-step-control.provider";
import ToastProvider from "@/app/component/ui/toast-message/toast-provider";
import ModalProvider from "@/app/component/ui/popup/modal/modal.provider";

export const metadata = {
  title: "ZARI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <body className={"bg-gray-950"}>
        <div id="decorator">앙퀴모리</div>
        <main>
          <ToastProvider>
            <ModalProvider>
              <JoinStepControlProvider>{children}</JoinStepControlProvider>
            </ModalProvider>
          </ToastProvider>
        </main>
      </body>
    </html>
  );
}

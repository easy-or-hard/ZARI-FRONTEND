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
        <main
          className="relative min-h-[480px] max-h-[926px] w-full min-w-[270px] max-w-[428px] mx-auto"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(19, 16, 29, 0.7), rgba(63, 44, 83, 0.2)), url(/test_bg.jpg)`,
            backgroundPosition: "center, top center", // 각각의 위치 설정
            backgroundRepeat: "no-repeat, repeat", // 각각의 반복 설정
          }}
        >
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

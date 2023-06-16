import "./globals.css";
import TeamIntroduce from "@/component/root/team-introduce";
import { ReactNode } from "react";
import localFont from "next/font/local";
import ToastProvider from "@/component/ui/toast-message/toast-provider";
import ModalProvider from "@/component/ui/popup/modal/modal.provider";

const font = localFont({
  src: "../../fonts/SUIT-Variable.woff2",
});

export const metadata = {
  title: "ZARI",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="kr">
      <body className={font.className}>
        <TeamIntroduce />
        <main>
          <ToastProvider>
            <ModalProvider>{children}</ModalProvider>
          </ToastProvider>
        </main>
      </body>
    </html>
  );
}

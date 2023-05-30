import React from "react";
import ToastProvider from "@/app/component/ui/toast-message/toast-provider";

export default function ComponentLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <ToastProvider>
            {children}
        </ToastProvider>
    )
}

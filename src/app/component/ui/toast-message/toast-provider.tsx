"use client";

import React, { createContext, useCallback, useState } from "react";
import ToastMessage from "@/app/component/ui/toast-message/toast-message";

export const ToastContext = createContext<(message: string) => void>(() => {});

export default function ToastProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const showToast = useCallback((message: string) => {
    setMessage(message);
    setIsVisible(true);
    setTimeout(() => setIsVisible(false), 2000);
  }, []);

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      {isVisible && <ToastMessage>{message}</ToastMessage>}
    </ToastContext.Provider>
  );
}

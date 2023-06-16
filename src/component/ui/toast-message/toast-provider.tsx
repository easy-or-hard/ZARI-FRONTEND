"use client";

import React, { createContext, useCallback, useRef, useState } from "react";
import ToastMessage from "@/component/ui/toast-message/toast-message";
import { CSSTransition } from "react-transition-group";
import styles from "./toast-provider.module.css";

export const ToastContext = createContext<(message: string) => void>(() => {});

export default function ToastProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const toastRef = useRef<HTMLHtmlElement>(null);

  const showToast = useCallback((message: string) => {
    setMessage(message);
    setIsVisible(true);
    setTimeout(() => setIsVisible(false), 3000);
  }, []);

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <CSSTransition
        nodeRef={toastRef}
        in={isVisible}
        timeout={200}
        classNames={{
          enter: styles.toastEnter,
          enterActive: styles.toastEnterActive,
          exit: styles.toastExit,
          exitActive: styles.toastExitActive,
        }}
        unmountOnExit
      >
        <ToastMessage ref={toastRef}>{message}</ToastMessage>
      </CSSTransition>
    </ToastContext.Provider>
  );
}

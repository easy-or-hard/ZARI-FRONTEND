"use client";

import React, {
  createContext,
  ReactNode,
  useCallback,
  useRef,
  useState,
} from "react";
import ToastMessage from "@/component/ui/toast-message/toast-message";
import { CSSTransition } from "react-transition-group";
import anime from "animejs";

export const ToastContext = createContext<(message: string) => void>(() => {});

export default function ToastProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const toastRef = useRef<HTMLHtmlElement>();
  const timeoutRef = useRef<NodeJS.Timeout | null>();

  const showToast = useCallback((message: string, timer: number = 3000) => {
    setMessage(message);
    setIsVisible(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
      timeoutRef.current = null;
    }, timer);
  }, []);

  const onEnter = useCallback(() => {
    anime({
      targets: toastRef.current,
      translateY: [100, 0],
      opacity: [0, 1],
      duration: 200,
      easing: "easeOutQuad",
    });
  }, []);

  const onExit = useCallback(() => {
    anime({
      targets: toastRef.current,
      translateY: [0, 100],
      opacity: [1, 0],
      duration: 200,
      easing: "easeOutQuad",
    });
  }, []);

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <CSSTransition
        nodeRef={toastRef}
        in={isVisible}
        timeout={200}
        onEnter={onEnter}
        onExit={onExit}
        unmountOnExit
      >
        <ToastMessage ref={toastRef}>{message}</ToastMessage>
      </CSSTransition>
    </ToastContext.Provider>
  );
}

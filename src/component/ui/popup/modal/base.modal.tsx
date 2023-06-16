"use client";

import { useContext, useEffect, useMemo } from "react";
import { BaseModalContext } from "@/component/ui/popup/modal/modal.provider";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Dim from "@/component/ui/popup/modal/dim";
import styles from "./base-modal.module.css";

/**
 * 모달의 기본 레이아웃
 * @constructor
 */
export default function BaseModal() {
  // TODO, 매우긴 텍스트가 공백없이 들어가면 레이아웃이 길어지며 화면밖을 벗어남
  // TODO, 모달이 여러개 뜨면 뒤에 있는 모달을 연하게 바꿔야함
  const modalContext = useContext(BaseModalContext);
  if (!modalContext) {
    throw new Error("ModalContext is null");
  }
  const { modalStack } = useMemo(() => modalContext, [modalContext]);

  useEffect(() => {
    if (modalStack.length > 0) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [modalStack]);

  return (
    <TransitionGroup>
      {modalStack.length > 0 && (
        <CSSTransition timeout={300} classNames="dim">
          <Dim />
        </CSSTransition>
      )}
      {modalStack.map((modalContent, index) => (
        <CSSTransition key={index} timeout={300} classNames="modal">
          <div className={styles.modal}>{modalContent}</div>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

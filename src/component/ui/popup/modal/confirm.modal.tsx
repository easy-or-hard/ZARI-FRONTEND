"use client";

import { ReactNode, useCallback, useContext, useMemo, useState } from "react";
import { BaseModalContext } from "@/component/ui/popup/modal/modal.provider";
import ConfirmButton from "@/component/ui/button/confirm/confirm.button";
import styles from "./confirm-modal.module.css";

export type ConfirmModalProps = {
  title?: string;
  description: ReactNode;
  onAccept: () => void;
  onCancel?: () => void;
  cancel?: string;
  accept?: string;
  acceptType?: "accept" | "cancel" | "danger";
};

export default function ConfirmModal({
  title,
  description,
  onAccept,
  onCancel,
  cancel = "취소",
  accept = "확인",
  acceptType = "accept",
}: ConfirmModalProps) {
  const baseModalContext = useContext(BaseModalContext);
  if (!baseModalContext) {
    throw new Error("BaseModalContext is null");
  }
  const { closeModal, allCloseModal } = useMemo(
    () => baseModalContext,
    [baseModalContext]
  );

  const [isClicked, setIsClicked] = useState(false);

  const handleAccept = useCallback(() => {
    setIsClicked(true);
    onAccept();
    allCloseModal();
  }, [allCloseModal, onAccept]);

  const handleCancel = useCallback(() => {
    setIsClicked(true);
    onCancel && onCancel();
    closeModal();
  }, [closeModal, onCancel]);

  return (
    <div className={styles.container}>
      {title && <div className={styles.title}>{title}</div>}
      <div className={styles.description}>{description}</div>
      <div className={styles.wrapButtons}>
        <ConfirmButton
          onClick={handleCancel}
          colorType={"cancel"}
          disabled={isClicked}
        >
          {cancel}
        </ConfirmButton>
        <ConfirmButton
          colorType={acceptType}
          disabled={isClicked}
          onClick={handleAccept}
        >
          {accept}
        </ConfirmButton>
      </div>
    </div>
  );
}

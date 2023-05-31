"use client";

import { BaseModalContext } from "@/app/component/ui/popup/modal/modal.provider";
import { ReactNode, useCallback, useContext, useMemo, useState } from "react";
import ConfirmButton from "@/app/component/ui/button/confirm/confirm.button";

export type ConfirmModalProps = {
  children: ReactNode;
  onAccept: () => void;
  onCancel?: () => void;
  cancel?: string;
  accept?: string;
};

/**
 * @description 확인 모달
 * @param {ReactNode} children
 * @param {Function} onConfirm
 * @param {string} cancel
 * @param {string} accept
 * @constructor
 */
export default function ConfirmModal({
  children,
  onAccept,
  onCancel,
  cancel = "취소",
  accept = "확인",
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
    <div>
      <div className="mb-4">{children}</div>
      <div className="grid grid-cols-2 gap-2">
        <ConfirmButton
          onClick={handleCancel}
          colorType={"cancel"}
          disabled={isClicked}
        >
          {cancel}
        </ConfirmButton>
        <ConfirmButton
          colorType={"accept"}
          disabled={isClicked}
          onClick={handleAccept}
        >
          {accept}
        </ConfirmButton>
      </div>
    </div>
  );
}

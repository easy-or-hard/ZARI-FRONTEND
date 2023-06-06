"use client";

import { BaseModalContext } from "@/app/component/ui/popup/modal/modal.provider";
import { ReactNode, useCallback, useContext, useMemo, useState } from "react";
import ConfirmButton from "@/app/component/ui/button/confirm/confirm.button";

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
    // 패딩을 부모가 관리하는데 기본 패딩 p3에 추가로 p2를 줌
    <div className="p-2">
      {title && <div className="font-bold pb-3">{title}</div>}
      <div className="mb-4">{description}</div>
      <div className="grid grid-cols-2 gap-2">
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

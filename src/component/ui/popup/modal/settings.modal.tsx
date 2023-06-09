"use client";

import { useCallback, useContext, useMemo, useState } from "react";
import { BaseModalContext } from "@/component/ui/popup/modal/modal.provider";
import { ToastContext } from "@/component/ui/toast-message/toast-provider";
import { useMyByeol, usePatchByeol } from "@/services/byeol/use.byeol";
import CloseButton from "@/component/ui/button/icon/close.button";
import ByeolNameInput from "@/component/auth/byeol/byeol-name.input";
import NewTabIcon from "@/component/ui/icon/size16/new-tab";
import ConfirmButton from "@/component/ui/button/confirm/confirm.button";

export default function SettingsModal() {
  const modalContext = useContext(BaseModalContext);
  if (!modalContext) {
    throw new Error("BaseModalContext is null");
  }
  const { closeModal } = useMemo(() => modalContext, [modalContext]);

  const toastContext = useContext(ToastContext);
  if (!toastContext) throw new Error("ToastContext is null");
  const showToast = toastContext;

  const [isClicked, setIsClicked] = useState(false);
  const [name, setName] = useState("");
  const [isNameAvailable, setIsNameAvailable] = useState(false);

  const { data } = useMyByeol();
  const { changeName } = usePatchByeol();

  const handleAccept = useCallback(() => {
    setIsClicked(true);
    changeName(name).then(() => {
      closeModal();
      showToast("별 이름이 변경되었어요!");
    });
  }, [closeModal, name, showToast, changeName]);

  return (
    // 패딩을 부모가 관리하는데 기본 패딩 p3에 추가로 p2를 줌
    <div className="p-2">
      {/* 헤더 */}
      <div className="flex justify-between items-center mb-7">
        <div className="modal-title">자리의 무언가를 바꿔볼까요?</div>
        <CloseButton onClick={closeModal} />
      </div>

      {/* 이름 변경 */}
      <div className="mb-15">
        <ByeolNameInput
          title={<div className="modal-content-title mb-3">별 이름 바꾸기</div>}
          name={name}
          setName={setName}
          setIsNameAvailable={setIsNameAvailable}
          placeHolder={data?.name}
        />
      </div>

      {/* 설명 */}
      <div className="mb-10">
        <div className="modal-content-title mb-3">저 할말있어요!</div>
        <p className="modal-content-subtitle mb-5">
          자리에 대해 하고 싶은 말이 있다면 아래 이메일로 의견을 보내주세요!
          <br /> 적극적인 패드백은 언제든이 환영이에요 :-)
        </p>
        <a
          className=" inline-flex items-center gap-1 underline"
          href="mailto:master@xiyo.dev"
        >
          master@xiyo.dev <NewTabIcon />
        </a>
      </div>
      <div className="grid">
        <ConfirmButton
          disabled={isClicked || !isNameAvailable}
          onClick={handleAccept}
          colorType={"accept"}
          isToggle={true}
        >
          저장하기
        </ConfirmButton>
      </div>
    </div>
  );
}

"use client";

import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import {
  BaseModalContext,
  ModalContext,
} from "@/component/ui/popup/modal/modal.provider";
import CloseButton from "@/component/ui/button/icon/close.button";
import ConfirmButton from "@/component/ui/button/confirm/confirm.button";
import { usePostBanzzack } from "@/services/banzzack/use.banzzack";
import { BanzzackUniqueKey } from "@/services/byeol/api.byeol";
import styles from "./create-banzzack-modal.module.css";

export type CreateBanzzackModalProps = {
  banzzackUniqueKey: BanzzackUniqueKey;
  closeBeforeCallback: Function;
};

const MAX_LENGTH = 150;

/**
 * @description 반짝이 생성 모달
 * @param { BanzzackUniqueKey } key
 * @param { Function } closeBeforeCallback
 * @constructor
 */
export default function CreateBanzzackModal({
  banzzackUniqueKey,
  closeBeforeCallback,
}: CreateBanzzackModalProps) {
  // BaseModalContext 임포트
  const baseModalContext = useContext(BaseModalContext);
  if (!baseModalContext) {
    throw new Error("BaseModalContext is null");
  }
  const { closeModal } = useMemo(() => baseModalContext, [baseModalContext]);

  // ModalContext 임포트
  const modalContext = useContext(ModalContext);
  if (!modalContext) {
    throw new Error("ModalContext is null");
  }
  const { showConfirmModal } = useMemo(() => modalContext, [modalContext]);

  // 로직 시작
  const byeolName = banzzackUniqueKey[0];

  const { trigger } = usePostBanzzack(banzzackUniqueKey);
  const [textLength, setTextLength] = useState(0); // 글자 수를 저장하는 상태
  const [isClicked, setIsClicked] = useState(false); // 반짝이 생성 버튼 클릭 여부

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      setTextLength(event.target.value.length);
    },
    []
  );

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      setIsClicked(true);

      const formData = new FormData(event.currentTarget);
      const content = { content: formData.get("content") as string };

      const handleAccept = async () => {
        await trigger(content);
        closeBeforeCallback();
      };

      const handleCancel = () => {
        setIsClicked(false);
      };

      showConfirmModal({
        title: "반짝이를 붙일까요?",
        description: (
          <p>
            한번 붙은 반짝이는 수정을 할 수 없어요 <br /> 그리고 나의 이야기는
            모두가 볼 수 있어요
          </p>
        ),
        onAccept: handleAccept,
        onCancel: handleCancel,
      });
    },
    [closeBeforeCallback, showConfirmModal, trigger]
  );

  const handleCloseModal = useCallback(() => {
    closeBeforeCallback();
    closeModal();
  }, [closeBeforeCallback, closeModal]);

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          <span className={styles.byeolName}>{byeolName}</span> 에게 남기는
          반짝이
        </div>
        <CloseButton onClick={handleCloseModal} />
      </div>
      <div className={styles.textAreaContainer}>
        <textarea
          name={"content"}
          className={styles.textArea}
          placeholder={"여기에 이야기를 적어보세요"}
          maxLength={MAX_LENGTH}
          onChange={handleChange}
        />
      </div>
      <div className={styles.textCounter}>
        {textLength} / {MAX_LENGTH}
      </div>
      <ConfirmButton
        colorType={"accept"}
        type={"submit"}
        disabled={isClicked || textLength === 0}
        isToggle={true}
      >
        <span className={styles.buttonText}>반짝이 붙이기</span>
      </ConfirmButton>
    </form>
  );
}

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
} from "@/app/component/ui/popup/modal/modal.provider";
import CloseButton from "@/app/component/ui/button/icon/close.button";
import ConfirmButton from "@/app/component/ui/button/confirm/confirm.button";
import banzzackFetcher from "@/services/banzzack/banzzack.fetcher";

const MAX_LENGTH = 150;

export type CreateBanzzackModalProps = {
  byeolName: string;
  zariId: number;
  starNumber: number;
};

/**
 * @description 반짝이 생성 모달
 * @param { CreateBanzzackModalProps } createBanzzackModal
 * @constructor
 */
export default function CreateBanzzackModal({
  byeolName,
  zariId,
  starNumber,
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
  const [textLength, setTextLength] = useState(0); // 글자 수를 저장하는 상태
  const [isClicked, setIsClicked] = useState(false); // 반짝이 생성 버튼 클릭 여부

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      setTextLength(event.target.value.length);
    },
    []
  );

  const confirmContent = useMemo(
    () => (
      <div>
        <div className={"mb-3 font-bold"}>반짝이를 붙일까요?</div>
        한번 붙은 반짝이는 수정을 할 수 없어요
        <br />
        그리고 나의 이야기는 모두가 볼 수 있어요
      </div>
    ),
    []
  );

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      // TODO, nextjs 13 의 실험적 기능 action 이 turbo 와 같이 사용할 수 있게 되면 action 으로 바꿔서 테스트하기
      event.preventDefault();

      setIsClicked(true);

      const formData = new FormData(event.currentTarget);
      const content = formData.get("content") as string;

      const handleAccept = () => {
        const createBanzzack = {
          zariId,
          starNumber,
          content,
        };
        const { key, fetcher } = banzzackFetcher.createBanzzack(createBanzzack);
        // TODO, 붙인 뒤에 화면에 반짝이가 바로 반영되도록 변경하기
        fetcher(key);
      };

      const handleCancel = () => {
        setIsClicked(false);
      };

      showConfirmModal({
        children: confirmContent,
        onAccept: handleAccept,
        onCancel: handleCancel,
      });
    },
    [confirmContent, showConfirmModal, starNumber, zariId]
  );

  return (
    <form onSubmit={handleSubmit} className={"flex flex-col gap-2"}>
      <div className="flex justify-between items-center">
        <div className={"font-bold indent-1"}>
          <span className={"text-zari_txt_primary"}>{byeolName}</span> 에게
          남기는 반짝이
        </div>
        <CloseButton onClick={closeModal} />
      </div>
      <div
        className={"bg-zari_default_white bg-opacity-20 rounded-lg px-2 py-4"}
      >
        <textarea
          name={"content"}
          className={"w-full bg-transparent h-32 max-h-60 outline-none"}
          placeholder={"여기에 이야기를 적어보세요"}
          maxLength={MAX_LENGTH}
          onChange={handleChange}
        />
      </div>
      <div className={"text-right"}>
        {textLength} / {MAX_LENGTH}
      </div>
      <ConfirmButton
        colorType={"accept"}
        type={"submit"}
        disabled={isClicked}
        isToggle={true}
      >
        <span className="font-bold">반짝이 붙이기</span>
      </ConfirmButton>
    </form>
  );
}

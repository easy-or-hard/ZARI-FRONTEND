"use client";

import { EnableButton } from "@/app/component/button/enableButton";
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { IncludeConstellationByeolBanzzackZariDto } from "@/services/zari/dto/include-constellation-byeol-banzzack-zari.dto";
import {
  BaseModalContext,
  ModalContext,
} from "@/app/component/ui/popup/modal.provider";
import CloseIcon from "@/app/component/ui/icon/size24/close";

const MAX_LENGTH = 150;

export default function CreateBanzzackModal({
  includeConstellationByeolBanzzackZariDto,
}: {
  includeConstellationByeolBanzzackZariDto: IncludeConstellationByeolBanzzackZariDto;
}) {
  // BaseModalContext 임포트
  const baseModalContext = useContext(BaseModalContext);
  if (!baseModalContext) {
    throw new Error("BaseModalContext is null");
  }
  const { closeModal } = useMemo(() => baseModalContext, []);

  // ModalContext 임포트
  const modalContext = useContext(ModalContext);
  if (!modalContext) {
    throw new Error("ModalContext is null");
  }
  const { showConfirmModal } = useMemo(() => modalContext, []);

  // 로직 시작
  const [isCreated, setIsCreated] = useState(false); // 반짝이 생성 여부
  const [textLength, setTextLength] = useState(0); // 글자 수를 저장하는 상태

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
      // TODO, nextjs13 의 실험적 기능 action 이 turbo 와 같이 사용할 수 있게 되면 action 으로 바꿔서 테스트하기
      event.preventDefault();
      const handleConfirm = () => {
        setIsCreated(true);
      };
      console.log(11);
      showConfirmModal(confirmContent, handleConfirm);
    },
    [confirmContent, showConfirmModal]
  );

  return (
    <form onSubmit={handleSubmit} className={"flex flex-col gap-2"}>
      <div className={"font-bold px-1"}>
        <span className={"text-zari_txt_primary"}>
          {includeConstellationByeolBanzzackZariDto.byeol.name}
        </span>{" "}
        에게 남기는 반짝이
        <button
          type={"button"}
          onClick={closeModal}
          className={"absolute top-3 right-3"}
        >
          <CloseIcon />
        </button>
      </div>
      <div
        className={"bg-zari_default_white bg-opacity-20 rounded-lg px-2 py-4"}
      >
        <textarea
          className={"w-full bg-transparent h-32 max-h-60 outline-none"}
          placeholder={"여기에 이야기를 적어보세요"}
          maxLength={MAX_LENGTH}
          onChange={handleChange}
        />
      </div>
      <div className={"text-right"}>
        {textLength} / {MAX_LENGTH}
      </div>
      <EnableButton
        className={"font-bold"}
        type={"submit"}
        enabled={textLength > 0 && !isCreated}
      >
        반짝이 붙이기
      </EnableButton>
    </form>
  );
}

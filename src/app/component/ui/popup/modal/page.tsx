"use client";

import { ModalContext } from "@/app/component/ui/popup/modal/modal.provider";
import { useContext, useReducer } from "react";
import { BanzzackEntity } from "@/services/banzzack/entities/banzzack.entity";
import { CreateBanzzackModalProps } from "@/app/component/ui/popup/modal/create-banzzack.modal";

const words =
  "김수한무 거북이와 두루미 삼천갑자 동방삭 치치카포 사리사리센타 워리워리 세브리깡 무두셀라 구름이 허리케인에 담벼락 담벼락에 서생원 서생원에 고양이 고양이엔 바둑이 바둑이는 돌돌이".split(
    " "
  );

/**
 * 모달 컴포넌트 확인 페이지
 * @constructor
 */
export default function ModalTestPage() {
  const modalContext = useContext(ModalContext);
  if (!modalContext) {
    throw new Error("ModalContext is null");
  }
  const { showReadBanzzackModal, showCreateBanzzackModal, showConfirmModal } =
    modalContext;

  const [state, dispatch] = useReducer(
    (state) => {
      const nextIndex = (state.index + 1) % words.length;
      return {
        text: state.text + " " + words[state.index],
        index: nextIndex,
      };
    },
    {
      text: "처음",
      index: 0,
    }
  );

  const sampleBanzzack = {
    byeolName: "반짝이를 입력할 당시의 이름",
    content: state.text,
  };

  const sampleByeol: CreateBanzzackModalProps = {
    byeolName: "반짝이를 입력할 당시의 이름",
    starNumber: 1,
    zariId: 5,
  };

  const confirmContent = (
    <div>
      <div className={"mb-3 font-bold"}>반짝이를 붙일까요?</div>
      한번 붙은 반짝이는 수정을 할 수 없어요
      <br />
      그리고 나의 이야기는 모두가 볼 수 있어요
    </div>
  );

  return (
    <>
      <button
        type={"button"}
        onClick={() => {
          dispatch();
          showReadBanzzackModal({ banzzack: sampleBanzzack as BanzzackEntity });
        }}
      >
        readBanzzackModal
      </button>

      <hr />
      <button
        type={"button"}
        onClick={() => showCreateBanzzackModal(sampleByeol)}
      >
        writeBanzzackModal
      </button>

      <hr />
      <button
        type={"button"}
        onClick={() =>
          showConfirmModal({
            children: confirmContent,
            onAccept: () => alert("accept"),
            onCancel: () => alert("cancel"),
          })
        }
      >
        confirmModal
      </button>
    </>
  );
}

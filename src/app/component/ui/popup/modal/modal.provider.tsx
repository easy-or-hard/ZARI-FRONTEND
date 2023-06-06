"use client";

import { createContext, ReactNode, useCallback, useState } from "react";
import BaseModal from "@/app/component/ui/popup/modal/base.modal";
import ReadBanzzackModal, {
  ReadBanzzackModalProps,
} from "@/app/component/ui/popup/modal/read-banzzack.modal";
import CreateBanzzackModal, {
  CreateBanzzackModalProps,
} from "@/app/component/ui/popup/modal/create-banzzack.modal";
import ConfirmModal, {
  ConfirmModalProps,
} from "@/app/component/ui/popup/modal/confirm.modal";
import SettingsModal from "@/app/component/ui/popup/modal/settings.modal";

type BaseModalContextType = {
  closeModal: () => void;
  allCloseModal: () => void;
  modalStack: ReactNode[];
  popModal: () => void;
};

type ModalContextType = {
  closeModal: () => void;
  allCloseModal: () => void;
  showConfirmModal: (props: ConfirmModalProps) => void;
  showReadBanzzackModal: (props: ReadBanzzackModalProps) => void;
  showCreateBanzzackModal: (props: CreateBanzzackModalProps) => void;
  showSettingsModal: () => void;
};

export const BaseModalContext = createContext<BaseModalContextType | null>(
  null
);
export const ModalContext = createContext<ModalContextType | null>(null);

type Props = {
  children: ReactNode;
};

/**
 * @description 모달 프로바이더
 * @param {ReactNode} children
 * @constructor
 */
export default function ModalProvider({ children }: Props) {
  // 여러 팝업이 나올 수 있게, 배열 관리
  const [modalStack, setModalStack] = useState<ReactNode[]>([]);

  // 모달을 배열로 관리하기위한 모달 푸시 메소드
  const pushModal = useCallback((modal: ReactNode) => {
    setModalStack((modals) => [...modals, modal]);
  }, []);

  // 배열로 관리하는 모달을 pop 으로 최상단에서 하나씩 제거
  const popModal = useCallback(() => {
    setModalStack((modals) => modals.slice(0, -1));
  }, []);

  // 팝업 호출 메소드 초기화
  const showReadBanzzackModal = useCallback(
    (props: ReadBanzzackModalProps) => {
      pushModal(<ReadBanzzackModal {...props} />);
    },
    [pushModal]
  );

  const showCreateBanzzackModal = useCallback(
    (props: CreateBanzzackModalProps) => {
      pushModal(<CreateBanzzackModal {...props} />);
    },
    [pushModal]
  );

  const showConfirmModal = useCallback(
    (props: ConfirmModalProps) => {
      pushModal(<ConfirmModal {...props} />);
    },
    [pushModal]
  );

  const showSettingsModal = useCallback(() => {
    pushModal(<SettingsModal />);
  }, [pushModal]);

  const closeModal = useCallback(() => {
    popModal();
  }, [popModal]);

  const allCloseModal = useCallback((depth = 1) => {
    setModalStack([]);
  }, []);

  return (
    <ModalContext.Provider
      value={{
        closeModal,
        allCloseModal,
        showReadBanzzackModal,
        showCreateBanzzackModal,
        showConfirmModal,
        showSettingsModal,
      }}
    >
      {children}

      {/* 코어 개발자용, 모달팝업의 베이스 돔 */}
      <BaseModalContext.Provider
        value={{
          closeModal,
          allCloseModal,
          modalStack,
          popModal,
        }}
      >
        <BaseModal />
      </BaseModalContext.Provider>
    </ModalContext.Provider>
  );
}

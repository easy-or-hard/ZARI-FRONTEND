"use client";

import { createContext, ReactNode, useCallback, useState } from "react";
import BaseModal from "@/app/component/ui/popup/modal/base.modal";
import ReadBanzzackModal from "@/app/component/ui/popup/modal/read-banzzack.modal";
import { BanzzackEntity } from "@/services/banzzack/entities/banzzack.entity";
import CreateBanzzackModal from "@/app/component/ui/popup/modal/create-banzzack.modal";
import { IncludeConstellationByeolBanzzackZariDto } from "@/services/zari/dto/include-constellation-byeol-banzzack-zari.dto";
import ConfirmModal from "@/app/component/ui/popup/modal/confirm.modal";

type BaseModalContextType = {
  modalContent: ReactNode | null;
  closeModal: () => void;
  allCloseModal: () => void;
  modalStack: ReactNode[];
  popModal: () => void;
};

type ModalContextType = {
  showConfirmModal: (children: ReactNode, onConfirm: () => void) => void;
  showReadBanzzackModal: (banzzack: BanzzackEntity) => void;
  showCreateBanzzackModal: (
    includeConstellationByeolBanzzackZariDto: IncludeConstellationByeolBanzzackZariDto
  ) => void;
};

export const BaseModalContext = createContext<BaseModalContextType | null>(
  null
);
export const ModalContext = createContext<ModalContextType | null>(null);

type Props = {
  children: ReactNode;
};
export default function ModalProvider({ children }: Props) {
  // 여러 팝업이 나올 수 있게, 배열 관리
  const [modalStack, setModalStack] = useState<ReactNode[]>([]);

  const pushModal = useCallback((modal: ReactNode) => {
    setModalStack((modals) => [...modals, modal]);
  }, []);

  const popModal = useCallback(() => {
    setModalStack((modals) => modals.slice(0, -1));
  }, []);

  // 팝업 호출 메소드 초기화
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);
  const showReadBanzzackModal = useCallback(
    (banzzack: BanzzackEntity) => {
      pushModal(<ReadBanzzackModal banzzack={banzzack} />);
    },
    [pushModal]
  );

  const showCreateBanzzackModal = useCallback(
    (
      includeConstellationByeolBanzzackZariDto: IncludeConstellationByeolBanzzackZariDto
    ) => {
      pushModal(
        <CreateBanzzackModal
          includeConstellationByeolBanzzackZariDto={
            includeConstellationByeolBanzzackZariDto
          }
        />
      );
    },
    [pushModal]
  );

  const showConfirmModal = useCallback(
    (children: ReactNode, onConfirm: () => void) => {
      pushModal(<ConfirmModal onConfirm={onConfirm}>{children}</ConfirmModal>);
    },
    [pushModal]
  );

  const closeModal = useCallback((depth = 1) => {
    popModal();
  }, []);

  const allCloseModal = useCallback((depth = 1) => {
    setModalStack([]);
  }, []);

  return (
    <ModalContext.Provider
      value={{
        showReadBanzzackModal,
        showCreateBanzzackModal,
        showConfirmModal,
      }}
    >
      {children}

      {/* 코어 개발자용, 모달팝업의 베이스 돔 */}
      <BaseModalContext.Provider
        value={{
          modalContent,
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

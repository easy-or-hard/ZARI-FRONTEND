'use client'

import {createContext, ReactNode, useCallback, useState} from "react";
import BaseModal from "@/app/component/ui/popup/modal/base.modal";
import ReadBanzzackModal from "@/app/component/ui/popup/modal/read-banzzack.modal";
import {BanzzackEntity} from "@/services/banzzack/entities/banzzack.entity";
import CreateBanzzackModal from "@/app/component/ui/popup/modal/create-banzzack.modal";
import {
    IncludeConstellationByeolBanzzackZariDto
} from "@/services/zari/dto/include-constellation-byeol-banzzack-zari.dto";
import ConfirmModal from "@/app/component/ui/popup/modal/confirm.modal";

type BaseModalContextType = {
    modalContent: ReactNode | null;
    closeModal: () => void;
}

type ModalContextType = {
    showConfirmModal: (children: ReactNode, onConfirm: () => void) => void;
    showReadBanzzackModal: (banzzack: BanzzackEntity) => void;
    showCreateBanzzackModal: (includeConstellationByeolBanzzackZariDto: IncludeConstellationByeolBanzzackZariDto) => void;
}

export const BaseModalContext = createContext<BaseModalContextType | null>(null);
export const ModalContext = createContext<ModalContextType | null>(null);

type Props = {
    children: ReactNode;
}
export default function ModalProvider({children}: Props) {
    const [modalContent, setModalContent] = useState<ReactNode | null>(null);
    const showReadBanzzackModal = useCallback((banzzack: BanzzackEntity) => {
        setModalContent(<ReadBanzzackModal banzzack={banzzack}/>);
    }, []);
    const showCreateBanzzackModal = useCallback((includeConstellationByeolBanzzackZariDto: IncludeConstellationByeolBanzzackZariDto) => {
        setModalContent(<CreateBanzzackModal
            includeConstellationByeolBanzzackZariDto={includeConstellationByeolBanzzackZariDto}/>);
    }, []);
    const showConfirmModal = useCallback((children: ReactNode, onConfirm: () => void) => {
        setModalContent(<ConfirmModal onConfirm={onConfirm}>{children}</ConfirmModal>);
    }, []);
    const closeModal = useCallback(() => {
        setModalContent(null);
    }, []);

    return (
        <ModalContext.Provider value={{
            showReadBanzzackModal,
            showCreateBanzzackModal,
            showConfirmModal,
        }}>
            {children}

            {/* 코어 개발자용, 모달팝업의 베이스 돔 */}
            <BaseModalContext.Provider value={{
                modalContent,
                closeModal,
            }}>
                <BaseModal/>
            </BaseModalContext.Provider>
        </ModalContext.Provider>
    )
}

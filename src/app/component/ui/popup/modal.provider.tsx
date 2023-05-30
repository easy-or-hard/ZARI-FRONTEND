'use client'

import {createContext, ReactNode, useCallback, useState} from "react";
import BaseModal from "@/app/component/ui/popup/modal/base.modal";
import ReadBanzzackModal from "@/app/component/ui/popup/modal/read-banzzack.modal";
import {BanzzackEntity} from "@/services/banzzack/entities/banzzack.entity";
import CreateBanzzackModal from "@/app/component/ui/popup/modal/create-banzzack.modal";
import {
    IncludeConstellationByeolBanzzackZariDto
} from "@/services/zari/dto/include-constellation-byeol-banzzack-zari.dto";

type BaseModalContextType = {
    modalContent: ReactNode | null;
    closeModal: () => void;
}

type ModalContextType = {
    setConfirmModalContent: (content: ReactNode) => void;
    setReadBanzzackModalContent: (banzzack: BanzzackEntity) => void;
    setCreateBanzzackModalContent: (includeConstellationByeolBanzzackZariDto: IncludeConstellationByeolBanzzackZariDto) => void;
}

export const BaseModalContext = createContext<BaseModalContextType | null>(null);
export const ModalContext = createContext<ModalContextType | null>(null);

type Props = {
    children: ReactNode;
}
export default function ModalProvider({children}: Props) {
    const [modalContent, setModalContent] = useState<ReactNode | null>(null);
    const setReadBanzzackModalContent = useCallback((banzzack: BanzzackEntity) => {
        setModalContent(<ReadBanzzackModal banzzack={banzzack}/>);
    }, []);
    const setCreateBanzzackModalContent = useCallback((includeConstellationByeolBanzzackZariDto: IncludeConstellationByeolBanzzackZariDto) => {
        setModalContent(<CreateBanzzackModal
            includeConstellationByeolBanzzackZariDto={includeConstellationByeolBanzzackZariDto}/>);
    }, []);
    const setConfirmModalContent = useCallback((content: ReactNode) => {
        setModalContent(content);
    }, []);
    const closeModal = useCallback(() => {
        setModalContent(null);
    }, []);

    return (
        <ModalContext.Provider value={{
            setConfirmModalContent,
            setReadBanzzackModalContent,
            setCreateBanzzackModalContent,
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

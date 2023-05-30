'use client'

import {createContext, ReactNode, useCallback, useState} from "react";
import BaseModal from "@/app/component/ui/popup/modal/base.modal";
import ReadBanzzackModal from "@/app/component/ui/popup/modal/read-banzzack.modal";
import {BanzzackEntity} from "@/services/banzzack/entities/banzzack.entity";

type ModalContextType = {
    modalContent: ReactNode | null;
    setModalContent: (content: ReactNode | null) => void;
    setReadBanzzackModalContent: (banzzack: BanzzackEntity) => void;
}

export const ModalContext = createContext<ModalContextType | null>(null);

type Props = {
    children: ReactNode;
}
export default function ModalProvider({children}: Props) {
    const [modalContent, setModalContent] = useState<ReactNode | null>(null);
    const setReadBanzzackModalContent = useCallback((banzzack: BanzzackEntity) => {
        setModalContent(ReadBanzzackModal({banzzack}));
    }, [modalContent]);

    return (
        <ModalContext.Provider value={{
            modalContent, setModalContent,
            setReadBanzzackModalContent
        }}>
            {children}
            <BaseModal/>
        </ModalContext.Provider>
    )
}

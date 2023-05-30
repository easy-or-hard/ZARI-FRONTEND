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
    setModalContent: (content: ReactNode | null) => void;
}

type ModalContextType = {
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

    return (
        <ModalContext.Provider value={{
            setReadBanzzackModalContent,
            setCreateBanzzackModalContent,
        }}>
            {children}
            <BaseModalContext.Provider value={{
                modalContent,
                setModalContent,
            }}>
            <BaseModal/>
            </BaseModalContext.Provider>
        </ModalContext.Provider>
    )
}

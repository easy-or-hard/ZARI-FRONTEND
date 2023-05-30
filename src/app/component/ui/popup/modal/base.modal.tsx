'use client'

import {ReactNode, useContext, useEffect, useState} from "react";
import {ModalContext} from "@/app/component/ui/popup/modal.provider";
import {CSSTransition} from 'react-transition-group';
import CloseIcon from "@/app/component/ui/icon/size24/close";
import Dim from "@/app/component/ui/popup/modal/dim";

/**
 * 모달의 기본 레이아웃
 * TODO, CSSTransition 이 findDOMNode 를 사용하고 있는데, 이는 deprecated 되었다. 추후에 수정 필요.
 * TODO, 매우긴 텍스트가 공백없이 들어가면 레이아웃이 길어지며 화면밖을 벗어남
 * @constructor
 */
export default function BaseModal() {
    const modalContext = useContext(ModalContext);
    if (!modalContext) {
        throw new Error('ModalContext is null');
    }
    const {modalContent, setModalContent} = modalContext;
    const [prevModalContent, setPrevModalContent] = useState<ReactNode | null>(null);

    useEffect(() => {
        modalContent && setPrevModalContent(modalContent);
    }, [modalContent]);

    useEffect(() => {
        if (modalContent) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [modalContent]);

    const close = () => {
        setModalContent(null);
    }

    return (
        <>
            <CSSTransition
                in={!!modalContent}
                timeout={300}
                classNames="modal"
                unmountOnExit
            >
                <div className={'z-20 absolute top-0 p-10 w-full h-full grid place-items-center'}>
                    <div
                        className={`relative modal border-[1px] border-white border-opacity-20 w-full bg-zari_default_black bg-opacity-60 backdrop-blur-lg rounded-2xl p-3`}
                    >
                        <button onClick={close} className={'absolute top-3 right-3'}><CloseIcon/></button>
                        {prevModalContent}
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                in={!!modalContent}
                timeout={300}
                classNames="dim"
                unmountOnExit
            >
                <Dim/>
            </CSSTransition>
        </>
    )
}
'use client'

import {useContext, useEffect, useMemo} from "react";
import {BaseModalContext} from "@/app/component/ui/popup/modal.provider";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Dim from "@/app/component/ui/popup/modal/dim";

/**
 * 모달의 기본 레이아웃
 * TODO, CSSTransition 이 findDOMNode 를 사용하고 있는데, 이는 deprecated 되었다. 추후에 수정 필요.
 * TODO, 매우긴 텍스트가 공백없이 들어가면 레이아웃이 길어지며 화면밖을 벗어남
 * TODO, 모달이 여러개 뜨면 뒤에 있는 모달을 연하게 바꿔야함
 * @constructor
 */
export default function BaseModal() {
    const modalContext = useContext(BaseModalContext);
    if (!modalContext) {
        throw new Error('ModalContext is null');
    }
    const {modalStack} = useMemo(() => modalContext, [modalContext]);

    useEffect(() => {
        if (modalStack.length > 0) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [modalStack]);

    return (
        <TransitionGroup>
            {modalStack.length > 0 && (
                <CSSTransition
                    timeout={300}
                    classNames="dim"
                >
                    <Dim/>
                </CSSTransition>
            )}
            {modalStack.map((modalContent, index) => (
                <CSSTransition
                    key={index}
                    timeout={300}
                    classNames="modal"
                >
                    <div className={`absolute top-0 px-10 w-full h-full grid place-items-center`}>
                        <div
                            className={`relative modal border-[1px] border-white border-opacity-20 w-full bg-zari_default_black backdrop-blur-lg rounded-2xl p-3`}>
                            {modalContent}
                        </div>
                    </div>
                </CSSTransition>
            ))}
        </TransitionGroup>
    )
}
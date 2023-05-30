'use client'

import {ModalContext} from "@/app/component/ui/popup/modal.provider";
import {useContext, useReducer} from "react";
import {BanzzackEntity} from "@/services/banzzack/entities/banzzack.entity";

const words = '김수한무 거북이와 두루미 삼천갑자 동방삭 치치카포 사리사리센타 워리워리 세브리깡 무두셀라 구름이 허리케인에 담벼락 담벼락에 서생원 서생원에 고양이 고양이엔 바둑이 바둑이는 돌돌이'.split(' ');

export default function PopupPage() {
    const modalContext = useContext(ModalContext);
    if (!modalContext) {
        throw new Error('ModalContext is null');
    }
    const {setModalContent, setReadBanzzackModalContent} = modalContext;

    const [state, dispatch] = useReducer((state) => {
        const nextIndex = (state.index + 1) % words.length;
        return {
            text: state.text + ' ' + words[state.index],
            index: nextIndex
        };
    }, {
        text: '처음',
        index: 0
    });

    const sampleBanzzack = {
        byeolName: '김수한무리수',
        content: '내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 '
    }

    return (
        <>
            <button onClick={() => {dispatch();setModalContent(state.text)}}>
                baseModal
            </button>
            <hr/>

            <button onClick={() => setReadBanzzackModalContent(sampleBanzzack as BanzzackEntity)}>
                readBanzzackModal
            </button>
        </>
    );
}
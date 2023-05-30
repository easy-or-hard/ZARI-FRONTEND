'use client'

import {EnableButton} from "@/app/component/button/enableButton";
import {ChangeEvent, useCallback, useContext, useMemo, useState} from "react";
import {
    IncludeConstellationByeolBanzzackZariDto
} from "@/services/zari/dto/include-constellation-byeol-banzzack-zari.dto";
import {BaseModalContext, ModalContext} from "@/app/component/ui/popup/modal.provider";
import CloseIcon from "@/app/component/ui/icon/size24/close";

const MAX_LENGTH = 150;

export default function CreateBanzzackModal({includeConstellationByeolBanzzackZariDto}: {
    includeConstellationByeolBanzzackZariDto: IncludeConstellationByeolBanzzackZariDto
}) {
    // BaseModalContext 임포트
    const baseModalContext = useContext(BaseModalContext);
    if (!baseModalContext) {
        throw new Error('BaseModalContext is null');
    }
    const {closeModal} = useMemo(() => baseModalContext, []);

    // ModalContext 임포트
    const modalContext = useContext(ModalContext);
    if (!modalContext) {
        throw new Error('ModalContext is null');
    }
    const {showConfirmModal} = useMemo(() => modalContext, []);

    // 로직 시작
    const [textLength, setTextLength] = useState(0); // 글자 수를 저장하는 상태

    const handleChange = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
        setTextLength(event.target.value.length);
    }, []);

    const confirmContent = <div>
        <div className={'mb-3 font-bold'}>반짝이를 붙일까요?</div>
        한번 붙은 반짝이는 수정을 할 수 없어요<br/>그리고 나의 이야기는 모두가 볼 수 있어요
    </div>

    return (
        <div className={'flex flex-col gap-2'}>
            <div className={'font-bold px-1'}>
                    <span
                        className={'text-zari_txt_primary'}>{includeConstellationByeolBanzzackZariDto.byeol.name}</span> 에게
                남기는 반짝이
                <button onClick={closeModal} className={'absolute top-3 right-3'}><CloseIcon/></button>
            </div>
            <div className={'bg-zari_default_white bg-opacity-20 rounded-lg px-2 py-4'}>
                    <textarea className={'w-full bg-transparent h-32 max-h-60 outline-none'}
                              placeholder={'여기에 이야기를 적어보세요'}
                              maxLength={MAX_LENGTH}
                              onChange={handleChange}
                    />
            </div>
            <div className={'text-right'}>{textLength} / {MAX_LENGTH}</div>
            <EnableButton className={'font-bold'} type={'submit'} onClick={() => showConfirmModal(confirmContent, () => alert('test'))}>
                반짝이 붙이기
            </EnableButton>
        </div>
    )
}
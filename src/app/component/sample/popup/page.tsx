'use client'

import ModalPopup from "@/app/component/ui/popup/modal-popup";
import {useState} from "react";
import {EnableButton} from "@/app/component/button/enableButton";

export default function PopUpPage() {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <EnableButton onClick={() => setToggle(true)}>팝업</EnableButton>
            {toggle &&
                <ModalPopup setVisible={setToggle}>
                    <div
                        className={'flex flex-col gap-2'}
                    >
                        <div className={'font-bold px-1'}>
                            <span className={'text-zari_txt_primary'}>엽기토끼이요</span> 의 반짝이
                        </div>
                        <div
                            className={'bg-zari_default_white bg-opacity-20 rounded-lg px-3 py-4'}
                        >
                            <div className={' max-h-60 overflow-y-auto'}>
                                다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀
                                돌고파.다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀
                                돌고파.다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀
                                돌고파.다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀
                                돌고파.다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀
                                돌고파.다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀
                                돌고파.다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀
                                돌고파.다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀
                                돌고파.다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀
                                돌고파.다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀
                                돌고파.다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀
                                돌고파.다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀
                                돌고파.다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀
                                돌고파.다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀
                                돌고파.다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀
                                돌고파.다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀
                                돌고파.다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀
                                돌고파.다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀
                                돌고파.다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀
                                돌고파.다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀
                                돌고파.다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀
                                돌고파.다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀
                                돌고파.
                            </div>
                        </div>
                        <EnableButton onClick={() => alert('버튼을 눌렀네요')}><span className={'font-bold'}>나도 반짝이 붙이기</span></EnableButton>
                    </div>
                </ModalPopup>}
        </>
    )
}
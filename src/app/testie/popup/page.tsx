'use client'

import Dim from "@/components/ui/popup/dim";
import ModalPopup from "@/components/ui/popup/modal-popup";
import {useState} from "react";
import {EnableButton} from "@/components/button/enableButton";

export default function PopUpPage() {
    const [show, setShow] = useState(false);
    return (
        <>
            <EnableButton onClick={() => setShow(true)}>팝업</EnableButton>
            {show && <div
                className={'relative z-20 p-10 w-full h-full flex flex-col justify-center items-center'}
            ><ModalPopup title={'앙키모'}>다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파.</ModalPopup></div>
            }
            {show && <Dim/>}
        </>
    )
}
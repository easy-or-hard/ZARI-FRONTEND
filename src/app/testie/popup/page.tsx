'use client'

import ModalPopup from "@/components/ui/popup/modal-popup";
import {useState} from "react";
import {EnableButton} from "@/components/button/enableButton";

export default function PopUpPage() {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <EnableButton onClick={() => setToggle(true)}>팝업</EnableButton>
            {toggle &&<ModalPopup title={'앙키모'} setToggle={setToggle}>다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파. 다람쥐 헌 쳇바귀 돌고파.</ModalPopup>}
        </>
    )
}
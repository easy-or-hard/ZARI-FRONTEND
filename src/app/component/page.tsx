'use client'

import LeftIcon from "@/app/component/ui/icon/arrow/left.icon";
import RightIcon from "@/app/component/ui/icon/arrow/right.icon";
import DownIcon from "@/app/component/ui/icon/arrow/down.icon";
import UpIcon from "@/app/component/ui/icon/arrow/up.icon";
import ChatIcon from "@/app/component/ui/icon/size24/chat";
import CloseIcon from "@/app/component/ui/icon/size24/close";
import DeleteIcon from "@/app/component/ui/icon/size24/delete";
import HomeIcon from "@/app/component/ui/icon/size24/home";
import LinkIcon from "@/app/component/ui/icon/size24/link";
import PlusIcon from "@/app/component/ui/icon/size24/plus";
import SettingIcon from "@/app/component/ui/icon/size24/setting";
import SignInIcon from "@/app/component/ui/icon/size24/sign-in";
import SignOutIcon from "@/app/component/ui/icon/size24/sign-out";
import WriteIcon from "@/app/component/ui/icon/size24/write";
import WriteSignedInIcon from "@/app/component/ui/icon/size24/write-signed-in";
import WriteSignedOutIcon from "@/app/component/ui/icon/size24/wirte-signed-out";
import ArrowDownIcon from "@/app/component/ui/icon/size16/arrow-down";
import ArrowUpIcon from "@/app/component/ui/icon/size16/arrow-up";
import CheckIcon from "@/app/component/ui/icon/size16/check";
import NewTabIcon from "@/app/component/ui/icon/size16/new-tab";
import CheckBoldIcon from "@/app/component/ui/icon/size16/check-bold";
import WarningIcon from "@/app/component/ui/icon/size16/warning";
import StarIcon from "@/app/component/ui/icon/size16/star";

import React, {useContext, useState} from "react";
import {ToastContext} from "@/app/component/ui/toast-message/toast-provider";
import {CancelButton} from "@/app/component/button/cancel.button";
import {DangerButton} from "@/app/component/button/danger.button";
import {EnableButton} from "@/app/component/button/enableButton";
import SpeedDial from "@/app/component/ui/menu/speed-dial";
import ModalPopup from "@/app/component/ui/popup/modal-popup";

export default function Components() {
    const showToast = useContext(ToastContext);
    const [isNameAvailable, setIsNameAvailable] = useState(false);
    const [toggleModalPopup, setToggleModalPopup] = useState(false);

    return (
        <div className='relative w-full'>
            <div className={'absolute top-0 right-0'}>
            <SpeedDial/>
            </div>
            <h1>Components</h1>
            <h2>Icons</h2>
            <hr/>
            <h3 className='m-4'>Arrow-line</h3>
            <div className='flex'>
                <LeftIcon/>
                <RightIcon/>
                <UpIcon/>
                <DownIcon/>
            </div>
            <hr/>
            <h3 className='m-4'>24 * 24</h3>
            <div className='flex'>
                <ChatIcon/>
                <CloseIcon/>
                <DeleteIcon/>
                <HomeIcon/>
                <LinkIcon/>
                <PlusIcon/>
                <SettingIcon/>
                <SignInIcon/>
                <SignOutIcon/>
                <WriteIcon/>
                <WriteSignedInIcon/>
                <WriteSignedOutIcon/>
            </div>
            <h3 className='m-4'>16 * 16</h3>
            <div className='flex'>
                <ArrowDownIcon/>
                <ArrowUpIcon/>
                <CheckIcon/>
                <CheckBoldIcon/>
                <NewTabIcon/>
                <StarIcon/>
                <WarningIcon/>
            </div>
            <hr/>
            <h3 className='m-4'>토스트 메시지</h3>
            <EnableButton onClick={() => showToast("토스트입니다. 토스트입니다. 토스트입니다. 토스트입니다. 토스트입니다.")}>
                토스트 활성화 버튼
            </EnableButton>
            <hr/>
            <h3>폼과 버튼 컴포넌트</h3>
            <form>
                <input
                    className={`bg-[#3A2B4D] p-4 rounded-xl block w-full`}
                    type={'text'}
                    name={'name'}
                    placeholder={'2 <= 글(한글, 대소문자영, 숫자) <= 8'}
                    onChange={(e) => {
                        const isValid = /^[1-9a-zA-Z가-힣]{2,8}$/.test(e.target.value);
                        setIsNameAvailable(isValid);
                    }
                    }
                    minLength={2}
                    maxLength={8}
                    required
                />
                <EnableButton type='submit' enabled={isNameAvailable}>
                    서브밋 버튼</EnableButton>
                <EnableButton type='button' onClick={() => alert('일반 버튼 입니다')}>
                    클릭시 비활성화</EnableButton>
                <DangerButton>위험한 버튼(삭제 기능)</DangerButton>
                <CancelButton onClick={() => setIsNameAvailable(false)}>취소(폼 내용 삭제)</CancelButton>
            </form>
            <hr/>
            <h3>모달 팝업</h3>
            <EnableButton type='button' onClick={() => setToggleModalPopup(!toggleModalPopup)}>
                모달 팝업 열기</EnableButton>
            {toggleModalPopup && <ModalPopup setVisible={setToggleModalPopup}>다람쥐 헌 쳇바퀴</ModalPopup>}
        </div>
    )
}
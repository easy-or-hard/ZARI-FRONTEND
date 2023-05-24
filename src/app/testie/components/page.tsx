'use client'

import LeftIcon from "@/components/ui/icon/arrow/leftIcon";
import RightIcon from "@/components/ui/icon/arrow/rightIcon";
import DownIcon from "@/components/ui/icon/arrow/downIcon";
import UpIcon from "@/components/ui/icon/arrow/upIcon";
import ChatIcon from "@/components/ui/icon/size24/chat";
import CloseIcon from "@/components/ui/icon/size24/close";
import DeleteIcon from "@/components/ui/icon/size24/delete";
import HomeIcon from "@/components/ui/icon/size24/home";
import LinkIcon from "@/components/ui/icon/size24/link";
import PlusIcon from "@/components/ui/icon/size24/plus";
import SettingIcon from "@/components/ui/icon/size24/setting";
import SignInIcon from "@/components/ui/icon/size24/sign-in";
import SignOutIcon from "@/components/ui/icon/size24/sign-out";
import WriteIcon from "@/components/ui/icon/size24/write";
import WriteSignedInIcon from "@/components/ui/icon/size24/write-signed-in";
import WriteSignedOutIcon from "@/components/ui/icon/size24/wirte-signed-out";
import ArrowDownIcon from "@/components/ui/icon/size16/arrow-down";
import ArrowUpIcon from "@/components/ui/icon/size16/arrow-up";
import CheckIcon from "@/components/ui/icon/size16/check";
import NewTabIcon from "@/components/ui/icon/size16/new-tab";
import CheckBoldIcon from "@/components/ui/icon/size16/check-bold";
import WarningIcon from "@/components/ui/icon/size16/warning";
import StarIcon from "@/components/ui/icon/size16/star";

import React, {useContext, useState} from "react";
import {ToastContext} from "@/components/ui/toast-message/toast-provider";
import {CancelButton} from "@/components/button/cancel.button";
import {DangerButton} from "@/components/button/danger.button";
import {EnableButton} from "@/components/button/enableButton";
import Menu from "@/components/ui/menu/menu";

export default function Components() {
    const showToast = useContext(ToastContext);
    const [isNameAvailable, setIsNameAvailable] = useState(false);

    return (
        <div className='p-4 w-full'>
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
            <h3>메뉴</h3>
            <Menu/>
        </div>
    )
}
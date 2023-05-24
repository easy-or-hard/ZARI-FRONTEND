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

import {useContext} from "react";
import {ToastContext} from "@/components/ui/toast-message/toast-provider";

export default function Components() {
    const showToast = useContext(ToastContext);

    return (
        <div className='p-4 w-full'>
            <h1>Components</h1>
            <h2>Icons</h2>
            <h3 className='m-4'>Arrow-line</h3>
            <div className='flex'>
                <LeftIcon/>
                <RightIcon/>
                <UpIcon/>
                <DownIcon/>
            </div>
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
            <h3 className='m-4'>토스트 메시지</h3>
            <button onClick={() => showToast("토스트입니다. 토스트입니다. 토스트입니다. 토스트입니다. 토스트입니다.")}>
                토스트 활성화 버튼</button>
        </div>
    )
}
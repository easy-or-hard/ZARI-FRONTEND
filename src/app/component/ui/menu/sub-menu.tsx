'use client'

import HomeIcon from "@/app/component/ui/icon/size24/home";
import SignOutIcon from "@/app/component/ui/icon/size24/sign-out";
import SettingIcon from "@/app/component/ui/icon/size24/setting";
import {useRouter} from "next/navigation";
import {API} from "@/const";

export default function SubMenu() {
    const router = useRouter();
    return (
        <span
            className={`px-3 py-4 bg-zari_default_white rounded-full inline-grid gap-4`}
        >
            <button onClick={() => router.push('/byeol/me')}>
                <HomeIcon color={'#161616'}/>
            </button>
            <button >
                <SettingIcon color={'#161616'}/>
            </button>
            <button onClick={() => fetch(`${API.BASE_URL}/auth/sign-out`, {
                method: 'GET',
                credentials: 'include'
            })}>
                <SignOutIcon color={'#161616'}/>
            </button>
        </span>
    )
}
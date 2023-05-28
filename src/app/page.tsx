'use client'

import {useCallback, useEffect} from "react";
import {useRouter} from "next/navigation";
import {Identity} from "@/components/Identity";
import Splash from "@/components/splash";
import AuthService from "@/services/auth/auth.service";

const {key: isUserKey, fetcher: isUserFetcher} = AuthService.isUser();
const {key: isByeolKey, fetcher: isByeolFetcher} = AuthService.isByeol();

export default function MainPage() {
    const router = useRouter();

    const isUserOrByeol = useCallback(async () => {
        const {data: isUser} = await isUserFetcher(isUserKey);
        if (isUser) {
            const {data: isByeol} = await isByeolFetcher(isByeolKey);
            if (isByeol) {
                router.replace('/byeol/me');
            } else {
                router.replace('/byeol/create');
            }
        } else {
            router.replace('/auth/sign-in');
        }
    }, []);

    useEffect(() => {
        isUserOrByeol();
    }, [])

    // isLoading===true 일때는 스플래시 화면을 렌더링한다.
    return (
        <div
            className="h-full flex flex-col justify-center items-center"
            style={{
                backgroundImage: 'url(/left_cloud.png), url(/right_cloud.png)',
                backgroundPosition: 'left bottom, right bottom',
                backgroundRepeat: 'no-repeat, no-repeat',
                mixBlendMode: 'normal',
            }}
        >
            <Splash/>
            <div>
                <Identity/>
            </div>
        </div>
    );
}

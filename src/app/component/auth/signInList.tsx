'use client';

import {useCallback, useEffect, useRef} from "react";
import {useRouter} from 'next/navigation';
import {API} from "@/const";

import {useIsByeol, useIsUser} from "@/services/auth/auth.use";

export default function SignInList() {
    const router = useRouter();
    const {data: user, isLoading: isLoadingUser} = useIsUser();
    const {data: byeol, isLoading: isLoadingByeol} = useIsByeol(user ? user.data : false);
    const openWindow = useCallback(async (provider: string) => {
        const width = 500;
        const height = 600;
        const left = window.screenLeft + (window.innerWidth / 2) - (width / 2);
        const top = window.screenTop + (window.innerHeight / 2) - (height / 2);

        window.open(
            `${API.BASE_URL}/auth/${provider}`,
            '_blank',
            `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`
        );
    }, []);

    useEffect(() => {
        if (user?.data) {
            if (byeol?.data) {
                console.log('byeol', byeol.data);
                router.replace('/byeol/me');
            } else if (byeol?.data) {
                router.replace('/byeol/create');
            }
        }
    }, [byeol, router, user])

    return (
        <ul className='grid gap-4'>
            <li onClick={() => openWindow('github')} className="border border-solid rounded-full p-4 text-center">
                github
            </li>
            <li className="border border-solid rounded-full p-4 text-center">google(준비중)</li>
            <li className="border border-solid rounded-full p-4 text-center">naver(준비중)</li>
            <li className="border border-solid rounded-full p-4 text-center">kakao(준비중)</li>
            {/*<li className="border border-solid rounded-full m-5 p-5 text-center">apple(준비중)</li>*/}
        </ul>

    )
}
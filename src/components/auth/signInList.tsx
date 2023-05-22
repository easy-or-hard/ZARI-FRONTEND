'use client';

import {useCallback, useEffect, useRef} from "react";
import {useRouter} from 'next/navigation';
import io from 'socket.io-client';
import {API} from "@/lib/const";

export default function SignInList() {
    const router = useRouter();
    const authState = useRef('');
    const openWindow = useCallback(async (provider: string) => {
        const width = 500;
        const height = 600;
        const left = window.screenLeft + (window.innerWidth / 2) - (width / 2);
        const top = window.screenTop + (window.innerHeight / 2) - (height / 2);

        window.open(
            `${API.BASE_URL}/auth/${provider}/socket?state=${authState.current}`,
            '_blank',
            `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`
        );
    }, []);

    useEffect(() => {
        const socket = io(API.BASE_URL);

        socket.on('authSuccess', (data) => {
            router.replace('/byeol/create');
        });

        socket.on('state', (data: string) => {
            authState.current = data;
        })

        return () => {
            socket.disconnect();
        }
    }, [router])

    return (
        <ul className='mx-4 h-full flex flex-col justify-around'>
            <li onClick={() => openWindow('github')} className="border border-solid rounded-full p-4 text-center">
                <a>github</a>
            </li>
            <li className="border border-solid rounded-full p-4 text-center">google(준비중)</li>
            <li className="border border-solid rounded-full p-4 text-center">naver(준비중)</li>
            <li className="border border-solid rounded-full p-4 text-center">kakao(준비중)</li>
            {/*<li className="border border-solid rounded-full m-5 p-5 text-center">apple(준비중)</li>*/}
        </ul>

    )
}
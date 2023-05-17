'use client';

import {useEffect, useState} from "react";
import {useRouter} from 'next/navigation';
import io from 'socket.io-client';
import {API} from "@/lib/const";

export default function SignInList() {
    const router = useRouter();
    const [authState, setAuthState] = useState<string>('');

    useEffect(() => {
        const socket = io(API.BASE_URL);

        socket.on('connect', () => {
            console.log('socket connected');
        });
        socket.on('disconnect', () => {
            console.log('socket disconnected');
        });
        socket.on('authSuccess', (data) => {
            console.log(data);
            router.push('/byeol/create');
        });

        socket.on('state', (data: string) => {
            console.log(data);
            setAuthState(data);
        })
    }, [router])

    const handleClick = () => {
        const width = 500;
        const height = 600;
        const left = window.screenLeft + (window.innerWidth / 2) - (width / 2);
        const top = window.screenTop + (window.innerHeight / 2) - (height / 2);

        window.open(
            `http://localhost:3000/auth/github/socket?state=${authState}`,
            '_blank',
            `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`
        );
    }

    return (
        <ul>
            <li className="border border-solid rounded-full m-5 p-5 text-center">
                <a onClick={handleClick}>github</a>
            </li>
            <li className="border border-solid rounded-full m-5 p-5 text-center">google(준비중)</li>
            <li className="border border-solid rounded-full m-5 p-5 text-center">naver(준비중)</li>
            <li className="border border-solid rounded-full m-5 p-5 text-center">kakao(준비중)</li>
            {/*<li className="border border-solid rounded-full m-5 p-5 text-center">apple(준비중)</li>*/}
        </ul>

    )
}
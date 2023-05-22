'use client'

import {useEffect} from "react";
import {useRouter} from "next/navigation";
import useSWR from "swr";
import Image from "next/image";
import {Identity} from "@/components/Identity";
import UserService from "@/service/user/user.service";
import {UserEntity} from "@/service/user/dto/entities/user.entity";
import {OkResponseDto} from "@/service/common/dto/ok.response.dto";

export default function Splash() {
    const router = useRouter();

    useEffect(() => {
        const {key, fetcher} = UserService.findMe();

        const routeChange = async () => {
            try {
                const user = await fetcher(key);
                const route = user.byeolId ? '/byeol/me' : '/byeol/create';
                setTimeout(() => router.push(route), 2000);
            } catch (error) {
                setTimeout(() => router.push('/auth/sign-in'), 2000);
            }
        };

        routeChange();
    }, []);

    return (
        <div
            className="h-full flex flex-col justify-center items-center"
            style={{
                backgroundImage: 'url(/cloud.svg)',
                backgroundPosition: 'bottom',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Image
                src="/constellation.svg"
                alt="스플래시 이미지"
                width={256}
                height={426}
                className="mx-auto h-3/4"
            />
            <div className="mx-auto h-1/4">
                <Identity/>
            </div>
        </div>
    );
}

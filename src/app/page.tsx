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
    const {key, fetcher} = UserService.findMe();
    const {data: response, isLoading} = useSWR(key, fetcher);

    useEffect(() => {
        // TODO, isLoading 타임에 스피너 추가??
        if (isLoading)
            return;

        let routePath: string;

        switch (response?.statusCode) {
            case 200:
                const user: UserEntity = (response as OkResponseDto<UserEntity>).data;
                routePath = user.byeolId ? '/byeol/me' : '/byeol/create';
                break;
            case 400:
                routePath = '/sign-in';
        }

        const timer = setTimeout(() => {
            router.replace(routePath);
        }, 5000);

        return () => clearTimeout(timer);
    }, [isLoading, response, router]);

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

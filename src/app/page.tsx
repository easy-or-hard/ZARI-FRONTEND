'use client'

import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {Identity} from "@/components/Identity";
import UserService from "@/services/user/user.service";
import Splash from "@/components/splash";
import useSWR from "swr";
import {ZariError} from "@/services/common/fetcher";

const {key, fetcher} = UserService.findMeFetcher();

export default function MainPage() {
    const router = useRouter();
    const {error, data} = useSWR(key, fetcher);

    useEffect(() => {
        if (error) {
            if (error instanceof ZariError) {
                error.statusCode === 401 && router.replace('/auth/sign-in');
            } else {
                // TODO, 예외 에러에 대해서 어떻게 처리할까?
                console.error(error);
                throw error;
            }
        } else if (data) {
            const responseData = data.data
            if (responseData.byeolId) {
                router.replace('/byeol/me');
            } else {
                router.replace('/byeol/create');
            }
        }
    }, [error, data])

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

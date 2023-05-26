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
    const {data, error} = useSWR(key, fetcher);

    useEffect(() => {
        const {key, fetcher} = UserService.findMe();

        const routeChange = async () => {
            try {
                const user = await fetcher(key);
                const route = user.data.byeolId ? '/byeol/me' : '/byeol/create';
                setTimeout(() => router.push(route), 2000);
            } catch (error) {
                setTimeout(() => router.push('/auth/sign-in'), 2000);
            }
        };

        routeChange();
    }, [router]);

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

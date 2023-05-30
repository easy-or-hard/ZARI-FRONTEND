'use client'

import {useEffect} from "react";
import {useRouter} from "next/navigation";
import Splash from "@/app/component/constellation/splash";

import {useIsByeol, useIsUser} from "@/services/auth/auth.use";

export default function MainPage() {
    const router = useRouter();
    const {data: user, isLoading: isLoadingUser} = useIsUser();
    const {data: byeol, isLoading: isLoadingByeol} = useIsByeol(user ? user.data : false);

    useEffect(() => {
        if (user?.data) {
            if (byeol?.data) {
                router.replace('/byeol/me');
            } else if (!byeol?.data) {
                router.replace('/byeol/create');
            }
        } else {
            router.replace('/auth/sign-in');
        }
    }, [user, byeol, router]);

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
                <h2 className="font-SUIT text-1xl font-normal leading-30 tracking-0 text-center">
                    우리의 이야기
                </h2>
                <h1 className="font-SUIT text-7xl font-bold leading-63 tracking-0.2 text-center">
                    ZARI
                </h1>
            </div>
        </div>
    );
}

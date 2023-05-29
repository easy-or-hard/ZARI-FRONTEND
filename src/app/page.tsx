'use client'

import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {Identity} from "@/components/Identity";
import Splash from "@/components/splash";

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
    }, [user, byeol]);

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

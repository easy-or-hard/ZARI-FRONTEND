'use client'

import {useEffect} from "react";
import {useRouter} from "next/navigation";
import Image from "next/image";
import {Identity} from "@/components/Identity";
import UserService from "@/service/user/user.service";
import Splash from "@/components/splash";

export default function MainPage() {
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
            <Splash/>
            <div>
                <Identity/>
            </div>
        </div>
    );
}

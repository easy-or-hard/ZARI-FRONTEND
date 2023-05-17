'use client';

import SignInList from "@/components/auth/signInList";
import {Identity} from "@/components/Identity";

const cloud = "/cloud.svg";

export default function SignInComponent() {
    return (
        <div className="h-full" style={{
        backgroundImage: `url(${cloud})`,
            backgroundPosition: 'bottom', // 각각의 위치 설정
            backgroundRepeat: 'no-repeat', // 각각의 반복 설정
    }}>
    <div className="h-1/2 flex flex-col justify-center">
        <Identity/>
        </div>
        <div><SignInList/></div>
        </div>
)
}
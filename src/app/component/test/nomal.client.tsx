'use client'

import {ReactNode} from "react";

export default function NormalClient({children}: { children: ReactNode} ) {
    console.log('normal Client');
    return (
        <div>
            자리 클라이언트 컴포넌트
            {children}
        </div>
    )
}
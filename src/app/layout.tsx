import './globals.css'
import React from "react";
import Header from "@/components/header";

export const metadata = {
    title: 'ZARI',
}

export default function RootLayout({
children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="kr">
        <body className={'bg-gray-950'}>
        <main
            className="min-h-[480px] max-h-[926px] w-full min-w-[270px] max-w-[428px] mx-auto"
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(19, 16, 29, 0.7), rgba(63, 44, 83, 0.2)), url(/BG_Star.png)`,
                backgroundPosition: 'center, top left', // 각각의 위치 설정
                backgroundRepeat: 'no-repeat, no-repeat', // 각각의 반복 설정
            }}
        >
            {children}
        </main>
        </body>
        </html>
    )
}

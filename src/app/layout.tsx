import './globals.css'
import React from "react";

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
        <body>
        <main className="h-screen max-w-xl mx-auto p-4 pt-8" style={{
            backgroundImage: `url(/BG_Star.svg), linear-gradient(to bottom, #13101D, #3F2C53)`,
            backgroundPosition: 'center, center', // 각각의 위치 설정
            backgroundRepeat: 'repeat, repeat', // 각각의 반복 설정
        }}>
            {children}
        </main>
        </body>
        </html>
    )
}

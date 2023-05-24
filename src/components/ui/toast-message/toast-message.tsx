'use client'

import React from "react";

type props = {
    message: string
}
export default function ToastMessage({message}: props) {
    return (
        <div className='fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4
            text-center px-10 py-3
            bg-black bg-opacity-20
            border border-white border-opacity-40 backdrop-blur-[5px] rounded-full'>
            {message ? message : '토스트 메시지가 전달되지 않았습니다'}
        </div>
    )
}

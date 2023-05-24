import React from "react";

type props = {
    children: React.ReactNode;
}
export default function ToastMessage({children}: props) {
    return (
        <div className='fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4
            text-center px-10 py-3
            bg-black bg-opacity-20
            border border-white border-opacity-40 backdrop-blur-[5px] rounded-full'>
            {children}
        </div>
    )
}

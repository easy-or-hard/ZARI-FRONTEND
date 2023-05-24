import React from "react";

type props = {
    children: React.ReactNode;
}
export default function ToastMessage({children}: props) {
    return (
        // fixed 는 실제 디바이스를 기준으로 넓이와 높이를 잡기 때문에 width, height 의 한계값을 지정해줬습니다.
        <div
            className={'fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full min-w-[270px] max-w-[396px]'}
        >
            <div className='m-4
            text-center px-10 py-3
            bg-black bg-opacity-20
            border border-white border-opacity-40 backdrop-blur-[5px] rounded-full'>
                {children}
            </div>
        </div>
    )
}

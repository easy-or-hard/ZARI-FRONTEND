'use client'

import {ReactNode, useCallback, useEffect, useMemo, useState} from "react";
import Dim from "@/components/ui/popup/dim";
import CloseIcon from "@/components/ui/icon/size24/close";

type Props = {
    children: ReactNode;
    setVisible: (isVisible: boolean) => void;
}

export default function ModalPopup({children, setVisible} : Props) {
    const [visibleAnimation, setVisibleAnimation] = useState(true);
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        // 컴포넌트가 unmount 될 때 원래 스크롤 상태로 되돌리기
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const animationClass = useMemo(() => (
        visibleAnimation
            ? 'animate-jump-in animate-duration-300 animate-ease-in-out'
            : 'animate-jump-out animate-duration-300 animate-ease-in-out'
    ), [visibleAnimation]);

    const close = useCallback(() => {
        if (!visibleAnimation) {
            setVisible(false);
        }
        // setVisible 은 의존성에 주입할 필요가 없습니다.
    }, [visibleAnimation]);

    return (
        <>
            <div className={'absolute z-20 top-0 p-10 w-full h-full flex flex-col justify-center items-center'}>
                <div className={`${animationClass} border-[1px] border-white border-opacity-20 relative w-full bg-zari_default_black bg-opacity-60 backdrop-blur-lg rounded-2xl p-3`}
                     onAnimationEnd={close}
                >
                    <button className={'absolute m-3 top-0 right-0'} onClick={() => setVisibleAnimation(false)}><CloseIcon/></button>
                    {children}
                </div>
            </div>
            <Dim/>
        </>
    )
}
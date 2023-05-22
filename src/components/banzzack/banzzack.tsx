'use client'

import {useEffect, useState} from "react";
import {BanzzackEntity} from "@/service/banzzack/entities/banzzack.entity";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";

export default function Banzzack({banzzack, closeFunction}: { banzzack: BanzzackEntity, closeFunction: Function }) {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    }

    useEffect(() => {
        if (!isVisible) {
            const timer = setTimeout(() => {
                closeFunction(0);
            }, 500);  // Wait for the transition to finish
            document.documentElement.style.overflow = 'unset';

            return () => clearTimeout(timer);  // Clear the timer if the component is unmounted
        } else {
            // 팝업 활성화시 스크롤 차단
            document.documentElement.style.overflow = 'hidden';
        }
    }, [isVisible, closeFunction]);

    return (
        <div
            className={`
            fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-50
            transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}
            `}>
            <div
                className={`
            absolute p-2 w-4/5 bg-opacity-60
            top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            border border-white border-opacity-20 shadow-lg backdrop-blur-md 
            rounded-2xl 
            transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}
            `}>
                <div className='p-4 flex justify-between'>
                    <div className='font-bold'>
                        <span className='text-themeText'>{banzzack.byeolName}</span> 님의 반짝이
                    </div>
                    <FontAwesomeIcon onClick={handleClose} icon={faXmark}/>
                </div>
                <div className="p-4 rounded-xl bg-darkPurple">
                    {banzzack.content}
                </div>
            </div>
        </div>
    )
}

'use client'

import {useSpring, animated} from '@react-spring/web';
import PlusIcon from "@/components/ui/icon/size24/plus";
import React, {useCallback, useState} from "react";
import SubMenu from "@/components/ui/menu/sub-menu";

export default function Menu() {
    const [isClicked, setIsClicked] = useState(false);
    const {transform} = useSpring({
        transform: isClicked ? 'rotate(45deg)' : 'rotate(0deg)',
    });

    const handleClick = useCallback(() => {
        setIsClicked(!isClicked);
    }, [isClicked]);

    return (
        <>
            <button
                onClick={handleClick}
                className={'mb-3 bg-zari_primary w-11 h-11 rounded-full flex items-center justify-center'}
            >
                <animated.div style={{transform}}>
                    <PlusIcon/>
                </animated.div>
            </button>
            {isClicked && <SubMenu/>}
        </>
    );
}

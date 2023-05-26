'use client'

import {useCallback, useEffect, useState} from "react";
import PlusIcon from "@/components/ui/icon/size24/plus";
import SubMenu from "@/components/ui/menu/sub-menu";

export default function Menu() {
    const [menuButtonRotate, setMenuButtonRotate] = useState(false);
    const [subMenuVisible, setSubMenuVisible] = useState(false);

    const menuAnimation = `transition-transform ${menuButtonRotate ? 'rotate-45' : ''}`;
    const subMenuAnimation = `transition ${menuButtonRotate ? '' : '-translate-y-1 opacity-0'}`;

    useEffect(() => {
        if (menuButtonRotate) {
            setSubMenuVisible(true);
        }
    }, [menuButtonRotate]);

    const subMenuTransitionEnd = useCallback(() => {
        if (!menuButtonRotate) {
            setSubMenuVisible(false);
        }
    }, [menuButtonRotate]);

    return (
        <span>
            <button
                onClick={() => setMenuButtonRotate(!menuButtonRotate)}
                className={`${menuAnimation} z-10 bg-zari_primary w-11 h-11 rounded-full flex items-center justify-center`}
            >
                <PlusIcon/>
            </button>
            {/* TODO, 나타날때도 트랜지션을 걸고싶은데 잘 안되네용. ㅎ*/}
            {
                subMenuVisible &&
                <span
                    className={`mt-3 inline-block translate ${subMenuAnimation}`}
                    onTransitionEnd={subMenuTransitionEnd}
                >
                    <SubMenu/>
                </span>
            }
        </span>
    );
}

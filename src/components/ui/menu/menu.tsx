'use client'

import {useSpring, animated} from '@react-spring/web';
import PlusIcon from "@/components/ui/icon/size24/plus";
import {useEffect, useState} from "react";
import SubMenu from "@/components/ui/menu/sub-menu";

export default function Menu() {
    const [toggle, setToggle] = useState(false);
    const [subMenuToggle, setSubMenuToggle] = useState(false);
    const [timer, setTimer] = useState(null);
    const {transform: menuTransform} = useSpring({
        transform: toggle ? 'rotate(45deg)' : 'rotate(0deg)',
    });

    const {transform: subMenuTransform, opacity: subMenuOpacity} = useSpring({
        transform: toggle ? 'translateY(58px)' : 'translateY(0px)',
        opacity: toggle ? 1 : 0,
    });

    useEffect(() => {
        // setTimer 대신 이벤트 기반 콜백으로 처리하고 싶은데,
        // 애니메이션에 콜백을 넣는 방법을 몰라서, 타이머로 할 수 밖에 없는듯...
        if (toggle) {
            setSubMenuToggle(true);
            // @ts-ignore, 타입을 못 찾겠습니다...
            clearTimeout(timer);
        } else {
            // @ts-ignore, 타입을 못 찾겠습니다...
            setTimer(setTimeout(() => setSubMenuToggle(false), 500));
        }
        // 디펜던시에 timer 를 넣으면 무한 반복합니다. 넣지마세요.
    }, [toggle])

    return (
        <div className={'absolute top-0'}>
            <button
                onClick={() => setToggle(!toggle)}
                className={'absolute z-10 bg-zari_primary w-11 h-11 rounded-full flex items-center justify-center'}
            >
                <animated.div style={{transform: menuTransform}}>
                    <PlusIcon/>
                </animated.div>
            </button>
            {subMenuToggle &&
                <animated.div style={{transform: subMenuTransform, opacity: subMenuOpacity, position: 'absolute'}}>
                    <SubMenu/>
                </animated.div>}
        </div>
    );
}

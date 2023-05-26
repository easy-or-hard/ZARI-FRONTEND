'use client'

import {useRef, useState} from "react";
import PlusIcon from "@/components/ui/icon/size24/plus";
import SubMenu from "@/components/ui/menu/sub-menu";
import {CSSTransition} from "react-transition-group";

export default function SpeedDial() {
    const [menuButtonRotate, setMenuButtonRotate] = useState(false);
    const nodeRef = useRef(null);

    return (
        <span className={'inline-grid'}>
            {/* handler */}
            <button
                onClick={() => setMenuButtonRotate(!menuButtonRotate)}
                className={`z-10 transition-transform ${menuButtonRotate ? 'rotate-45' : ''} bg-zari_primary p-3 rounded-full inline-grid place-items-center`}
            >
                <PlusIcon/>
            </button>
            {/* contents */}
            <CSSTransition
                in={menuButtonRotate}
                nodeRef={nodeRef}
                timeout={300}
                classNames={'speed-dial'}
                unmountOnExit
            >
                <span
                    ref={nodeRef}
                    className={`mt-3 inline-block translate`}
                >
                    <SubMenu/>
                </span>
            </CSSTransition>
        </span>
    );
}

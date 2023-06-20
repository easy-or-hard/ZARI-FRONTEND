"use client";

import { useRef, useState } from "react";
import PlusIcon from "@/component/ui/icon/size24/plus";
import SubMenu from "@/component/ui/menu/sub-menu";
import { CSSTransition } from "react-transition-group";
import styles from "./speed-dial.module.css";

export default function SpeedDial() {
  const [menuButtonRotate, setMenuButtonRotate] = useState(false);
  const nodeRef = useRef(null);

  return (
    <span className={styles.wrapDial}>
      {/* handler */}
      <button
        onClick={() => setMenuButtonRotate(!menuButtonRotate)}
        className={`${styles.handle} ${menuButtonRotate && styles.rotate}`}
      >
        <PlusIcon />
      </button>
      {/* contents */}
      {/* TODO, 트랜지션 값을 나이스게 할 수 있게 변수화 시켜야 합니다 */}
      <CSSTransition
        in={menuButtonRotate}
        nodeRef={nodeRef}
        timeout={300}
        classNames={"speed-dial"}
        unmountOnExit
      >
        <span ref={nodeRef} className={styles.contents}>
          <SubMenu />
        </span>
      </CSSTransition>
    </span>
  );
}

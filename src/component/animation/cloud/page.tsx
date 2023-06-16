"use client";

import { animated, useSpring } from "@react-spring/web";
import EffectBanzzack from "@/app/component/banzzack/effect-banzzack";
import ChatIcon from "@/app/component/ui/icon/size24/chat";

export default function CloudPage() {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    loop: true,
    onStart: () => console.log("start"),
  });

  return (
    <>
      <animated.svg style={props}>
        <EffectBanzzack cx={10} cy={10} />
      </animated.svg>
      <ChatIcon />
    </>
  );
}

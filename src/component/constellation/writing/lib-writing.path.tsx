"use client";

import { ConstellationWriterProps } from "@/component/constellation/map";
import SpeakPath from "@/component/ui/icon/size24/speak.path";

export default function LibWritingPath({ locks }: ConstellationWriterProps) {
  return (
    <>
      {locks.includes(11) && <SpeakPath cx="116.16" cy="514.14" />}
      {locks.includes(10) && <SpeakPath cx="69.06" cy="464.55" />}
      {locks.includes(9) && <SpeakPath cx="148.39" cy="412.49" />}
      {locks.includes(8) && <SpeakPath cx="276.07" cy="387.7" />}
      {locks.includes(7) && <SpeakPath cx="340" cy="206.73" />}
      {locks.includes(6) && <SpeakPath cx="225.24" cy="232.76" />}
      {locks.includes(5) && <SpeakPath cx="272.35" cy="137.31" />}
      {locks.includes(4) && <SpeakPath cx="191.78" cy="102.6" />}
      {locks.includes(3) && <SpeakPath cx="124.84" cy="220.36" />}
      {locks.includes(2) && <SpeakPath cx="20" cy="251.35" />}
      {locks.includes(1) && <SpeakPath cx="29.92" cy="174.5" />}
    </>
  );
}

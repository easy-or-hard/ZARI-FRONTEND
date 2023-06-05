"use client";

import SpeakPath from "@/app/component/ui/icon/size24/speak.path";
import { ConstellationWriterProps } from "@/app/component/constellation/map";

export default function LibWritingPath({ lockMap }: ConstellationWriterProps) {
  return (
    <>
      {lockMap.get(11) && <SpeakPath cx="116.16" cy="514.14" />}
      {lockMap.get(10) && <SpeakPath cx="69.06" cy="464.55" />}
      {lockMap.get(9) && <SpeakPath cx="148.39" cy="412.49" />}
      {lockMap.get(8) && <SpeakPath cx="276.07" cy="387.7" />}
      {lockMap.get(7) && <SpeakPath cx="340" cy="206.73" />}
      {lockMap.get(6) && <SpeakPath cx="225.24" cy="232.76" />}
      {lockMap.get(5) && <SpeakPath cx="272.35" cy="137.31" />}
      {lockMap.get(4) && <SpeakPath cx="191.78" cy="102.6" />}
      {lockMap.get(3) && <SpeakPath cx="124.84" cy="220.36" />}
      {lockMap.get(2) && <SpeakPath cx="20" cy="251.35" />}
      {lockMap.get(1) && <SpeakPath cx="29.92" cy="174.5" />}
    </>
  );
}

"use client";

import SpeakPath from "@/app/component/ui/icon/size24/speak.path";
import { ConstellationWriterProps } from "@/app/component/constellation/map";

export default function CncWritingPath({ lockMap }: ConstellationWriterProps) {
  return (
    <>
      {lockMap.get(12) && <SpeakPath cx="20" cy="419.95" />}
      {lockMap.get(11) && <SpeakPath cx="59.63" cy="514.5" />}
      {lockMap.get(9) && <SpeakPath cx="131.6" cy="522.97" />}
      {lockMap.get(8) && <SpeakPath cx="340" cy="498.85" />}
      {lockMap.get(7) && <SpeakPath cx="272.43" cy="388.9" />}
      {lockMap.get(6) && <SpeakPath cx="176.47" cy="379.03" />}
      {lockMap.get(5) && <SpeakPath cx="235.74" cy="252.02" />}
      {lockMap.get(4) && <SpeakPath cx="293.6" cy="182.87" />}
      {lockMap.get(3) && <SpeakPath cx="120.03" cy="290.12" />}
      {lockMap.get(2) && <SpeakPath cx="50.88" cy="180.78" />}
      {lockMap.get(1) && <SpeakPath cx="105.67" cy="117.03" />}
    </>
  );
}

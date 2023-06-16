"use client";

import { ConstellationWriterProps } from "@/component/constellation/map";
import SpeakPath from "@/component/ui/icon/size24/speak.path";

export default function CncWritingPath({ locks }: ConstellationWriterProps) {
  return (
    <>
      {locks.includes(12) && <SpeakPath cx="20" cy="419.95" />}
      {locks.includes(11) && <SpeakPath cx="59.63" cy="514.5" />}
      {locks.includes(9) && <SpeakPath cx="131.6" cy="522.97" />}
      {locks.includes(8) && <SpeakPath cx="340" cy="498.85" />}
      {locks.includes(7) && <SpeakPath cx="272.43" cy="388.9" />}
      {locks.includes(6) && <SpeakPath cx="176.47" cy="379.03" />}
      {locks.includes(5) && <SpeakPath cx="235.74" cy="252.02" />}
      {locks.includes(4) && <SpeakPath cx="293.6" cy="182.87" />}
      {locks.includes(3) && <SpeakPath cx="120.03" cy="290.12" />}
      {locks.includes(2) && <SpeakPath cx="50.88" cy="180.78" />}
      {locks.includes(1) && <SpeakPath cx="105.67" cy="117.03" />}
    </>
  );
}

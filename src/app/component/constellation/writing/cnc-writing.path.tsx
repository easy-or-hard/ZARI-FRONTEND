"use client";

import SpeakPath from "@/app/component/ui/icon/size24/speak.path";
import { ConstellationWriterProps } from "@/app/component/constellation/map";

export default function CncWritingPath({ locks }: ConstellationWriterProps) {
  return (
    <>
      {locks[12] && <SpeakPath cx="20" cy="419.95" />}
      {locks[11] && <SpeakPath cx="59.63" cy="514.5" />}
      {locks[9] && <SpeakPath cx="131.6" cy="522.97" />}
      {locks[8] && <SpeakPath cx="340" cy="498.85" />}
      {locks[7] && <SpeakPath cx="272.43" cy="388.9" />}
      {locks[6] && <SpeakPath cx="176.47" cy="379.03" />}
      {locks[5] && <SpeakPath cx="235.74" cy="252.02" />}
      {locks[4] && <SpeakPath cx="293.6" cy="182.87" />}
      {locks[3] && <SpeakPath cx="120.03" cy="290.12" />}
      {locks[2] && <SpeakPath cx="50.88" cy="180.78" />}
      {locks[1] && <SpeakPath cx="105.67" cy="117.03" />}
    </>
  );
}

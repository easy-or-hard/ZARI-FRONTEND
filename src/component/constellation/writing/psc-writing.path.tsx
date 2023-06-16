"use client";

import { ConstellationWriterProps } from "@/component/constellation/map";
import SpeakPath from "@/component/ui/icon/size24/speak.path";

export default function PscWritingPath({ locks }: ConstellationWriterProps) {
  return (
    <>
      {locks.includes(13) && <SpeakPath cx="172.19" cy="540.86" />}
      {locks.includes(12) && <SpeakPath cx="89.79" cy="550.8" />}
      {locks.includes(11) && <SpeakPath cx="130.99" cy="478.35" />}
      {locks.includes(10) && <SpeakPath cx="129.57" cy="415.84" />}
      {locks.includes(9) && <SpeakPath cx="111.1" cy="349.07" />}
      {locks.includes(8) && <SpeakPath cx="99.73" cy="289.41" />}
      {locks.includes(7) && <SpeakPath cx="75.58" cy="214.11" />}
      {locks.includes(6) && <SpeakPath cx="339.82" cy="239.68" />}
      {locks.includes(5) && <SpeakPath cx="311.41" cy="174.33" />}
      {locks.includes(4) && <SpeakPath cx="244.64" cy="215.53" />}
      {locks.includes(3) && <SpeakPath cx="159.4" cy="177.17" />}
      {locks.includes(2) && <SpeakPath cx="98.31" cy="141.66" />}
      {locks.includes(1) && <SpeakPath cx="20.18" cy="90.51" />}
    </>
  );
}

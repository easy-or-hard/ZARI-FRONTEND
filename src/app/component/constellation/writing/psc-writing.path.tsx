"use client";

import SpeakPath from "@/app/component/ui/icon/size24/speak.path";
import { ConstellationWriterProps } from "@/app/component/constellation/map";

export default function PscWritingPath({ lockMap }: ConstellationWriterProps) {
  return (
    <>
      {lockMap.get(13) && <SpeakPath cx="172.19" cy="540.86" />}
      {lockMap.get(12) && <SpeakPath cx="89.79" cy="550.8" />}
      {lockMap.get(11) && <SpeakPath cx="130.99" cy="478.35" />}
      {lockMap.get(10) && <SpeakPath cx="129.57" cy="415.84" />}
      {lockMap.get(9) && <SpeakPath cx="111.1" cy="349.07" />}
      {lockMap.get(8) && <SpeakPath cx="99.73" cy="289.41" />}
      {lockMap.get(7) && <SpeakPath cx="75.58" cy="214.11" />}
      {lockMap.get(6) && <SpeakPath cx="339.82" cy="239.68" />}
      {lockMap.get(5) && <SpeakPath cx="311.41" cy="174.33" />}
      {lockMap.get(4) && <SpeakPath cx="244.64" cy="215.53" />}
      {lockMap.get(3) && <SpeakPath cx="159.4" cy="177.17" />}
      {lockMap.get(2) && <SpeakPath cx="98.31" cy="141.66" />}
      {lockMap.get(1) && <SpeakPath cx="20.18" cy="90.51" />}
    </>
  );
}

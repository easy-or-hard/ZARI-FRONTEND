"use client";

import SpeakPath from "@/app/component/ui/icon/size24/speak.path";
import { ConstellationWriterProps } from "@/app/component/constellation/map";

export default function ScoWritingPath({ lockMap }: ConstellationWriterProps) {
  return (
    <>
      {lockMap.get(14) && <SpeakPath cx="20" cy="439.35" />}
      {lockMap.get(13) && <SpeakPath cx="79.09" cy="406.9" />}
      {lockMap.get(12) && <SpeakPath cx="49.65" cy="514.66" />}
      {lockMap.get(11) && <SpeakPath cx="107.58" cy="537.84" />}
      {lockMap.get(10) && <SpeakPath cx="194.48" cy="522.77" />}
      {lockMap.get(9) && <SpeakPath cx="277.91" cy="469.47" />}
      {lockMap.get(8) && <SpeakPath cx="222.29" cy="395.32" />}
      {lockMap.get(7) && <SpeakPath cx="168.99" cy="338.54" />}
      {lockMap.get(6) && <SpeakPath cx="179.42" cy="237.73" />}
      {lockMap.get(5) && <SpeakPath cx="228.09" cy="187.91" />}
      {lockMap.get(4) && <SpeakPath cx="340" cy="222.67" />}
      {lockMap.get(3) && <SpeakPath cx="323.78" cy="172.84" />}
      {lockMap.get(2) && <SpeakPath cx="297.61" cy="113.75" />}
      {lockMap.get(1) && <SpeakPath cx="229.24" cy="102.16" />}
    </>
  );
}

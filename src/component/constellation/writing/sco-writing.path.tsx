"use client";

import { ConstellationWriterProps } from "@/component/constellation/map";
import SpeakPath from "@/component/ui/icon/size24/speak.path";

export default function ScoWritingPath({ locks }: ConstellationWriterProps) {
  return (
    <>
      {locks[14] && <SpeakPath cx="20" cy="439.35" />}
      {locks[13] && <SpeakPath cx="79.09" cy="406.9" />}
      {locks[12] && <SpeakPath cx="49.65" cy="514.66" />}
      {locks[11] && <SpeakPath cx="107.58" cy="537.84" />}
      {locks[10] && <SpeakPath cx="194.48" cy="522.77" />}
      {locks[9] && <SpeakPath cx="277.91" cy="469.47" />}
      {locks[8] && <SpeakPath cx="222.29" cy="395.32" />}
      {locks[7] && <SpeakPath cx="168.99" cy="338.54" />}
      {locks[6] && <SpeakPath cx="179.42" cy="237.73" />}
      {locks[5] && <SpeakPath cx="228.09" cy="187.91" />}
      {locks[4] && <SpeakPath cx="340" cy="222.67" />}
      {locks[3] && <SpeakPath cx="323.78" cy="172.84" />}
      {locks[2] && <SpeakPath cx="297.61" cy="113.75" />}
      {locks[1] && <SpeakPath cx="229.24" cy="102.16" />}
    </>
  );
}

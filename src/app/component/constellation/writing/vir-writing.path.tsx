"use client";

import { ConstellationWriterProps } from "@/app/component/constellation/map";
import SpeakPath from "@/app/component/ui/icon/size24/speak.path";

export default function VirWritingPath({ lockMap }: ConstellationWriterProps) {
  return (
    <>
      {lockMap.get(14) && <SpeakPath cx="146.4" cy="553.88" />}
      {lockMap.get(13) && <SpeakPath cx="20" cy="518.45" />}
      {lockMap.get(12) && <SpeakPath cx="222.71" cy="443.5" />}
      {lockMap.get(11) && <SpeakPath cx="165.48" cy="462.58" />}
      {lockMap.get(10) && <SpeakPath cx="80.99" cy="405.34" />}
      {lockMap.get(9) && <SpeakPath cx="148.66" cy="333.58" />}
      {lockMap.get(8) && <SpeakPath cx="338.54" cy="317.21" />}
      {lockMap.get(7) && <SpeakPath cx="256.78" cy="244.98" />}
      {lockMap.get(6) && <SpeakPath cx="159.56" cy="231.38" />}
      {lockMap.get(5) && <SpeakPath cx="72.35" cy="174.14" />}
      {lockMap.get(4) && <SpeakPath cx="223.97" cy="202.49" />}
      {lockMap.get(3) && <SpeakPath cx="243.61" cy="134.09" />}
      {lockMap.get(2) && <SpeakPath cx="191.37" cy="72.86" />}
      {lockMap.get(1) && <SpeakPath cx="144.13" cy="110.56" />}
    </>
  );
}

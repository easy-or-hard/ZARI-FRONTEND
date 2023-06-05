"use client";

import { ConstellationWriterProps } from "@/app/component/constellation/map";
import SpeakPath from "@/app/component/ui/icon/size24/speak.path";

export default function VirWritingPath({ locks }: ConstellationWriterProps) {
  return (
    <>
      {locks[14] && <SpeakPath cx="146.4" cy="553.88" />}
      {locks[13] && <SpeakPath cx="20" cy="518.45" />}
      {locks[12] && <SpeakPath cx="222.71" cy="443.5" />}
      {locks[11] && <SpeakPath cx="165.48" cy="462.58" />}
      {locks[10] && <SpeakPath cx="80.99" cy="405.34" />}
      {locks[9] && <SpeakPath cx="148.66" cy="333.58" />}
      {locks[8] && <SpeakPath cx="338.54" cy="317.21" />}
      {locks[7] && <SpeakPath cx="256.78" cy="244.98" />}
      {locks[6] && <SpeakPath cx="159.56" cy="231.38" />}
      {locks[5] && <SpeakPath cx="72.35" cy="174.14" />}
      {locks[4] && <SpeakPath cx="223.97" cy="202.49" />}
      {locks[3] && <SpeakPath cx="243.61" cy="134.09" />}
      {locks[2] && <SpeakPath cx="191.37" cy="72.86" />}
      {locks[1] && <SpeakPath cx="144.13" cy="110.56" />}
    </>
  );
}

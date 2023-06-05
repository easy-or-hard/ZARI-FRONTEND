"use client";

import { ConstellationWriterProps } from "@/app/component/constellation/map";
import SpeakPath from "@/app/component/ui/icon/size24/speak.path";

export default function AqrWritingPath({ locks }: ConstellationWriterProps) {
  return (
    <>
      {locks[13] && <SpeakPath cx="257.9" cy="340.5" />}
      {locks[12] && <SpeakPath cx="161.3" cy="348.9" />}
      {locks[11] && <SpeakPath cx="340" cy="579.3" />}
      {locks[10] && <SpeakPath cx="267.5" cy="527.5" />}
      {locks[9] && <SpeakPath cx="210.1" cy="488.3" />}
      {locks[8] && <SpeakPath cx="124.5" cy="485.7" />}
      {locks[7] && <SpeakPath cx="65.7" cy="534.7" />}
      {locks[6] && <SpeakPath cx="20" cy="416.3" />}
      {locks[5] && <SpeakPath cx="54.5" cy="343.3" />}
      {locks[4] && <SpeakPath cx="75.7" cy="263.7" />}
      {locks[3] && <SpeakPath cx="144.1" cy="202.3" />}
      {locks[2] && <SpeakPath cx="184.7" cy="142.3" />}
      {locks[1] && <SpeakPath cx="220.5" cy="89.7" />}
    </>
  );
}

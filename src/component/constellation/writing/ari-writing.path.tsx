"use client";

import { ConstellationWriterProps } from "@/component/constellation/map";
import SpeakPath from "@/component/ui/icon/size24/speak.path";

export default function AriWritingPath({ locks }: ConstellationWriterProps) {
  return (
    <>
      {locks[9] && <SpeakPath cx="20.19" cy="462.57" />}
      {locks[8] && <SpeakPath cx="181.99" cy="531.53" />}
      {locks[7] && <SpeakPath cx="143.53" cy="416.15" />}
      {locks[6] && <SpeakPath cx="38.76" cy="385.65" />}
      {locks[5] && <SpeakPath cx="115.68" cy="242.42" />}
      {locks[4] && <SpeakPath cx="304" cy="184.06" />}
      {locks[3] && <SpeakPath cx="221.78" cy="161.52" />}
      {locks[2] && <SpeakPath cx="282.78" cy="108.47" />}
      {locks[1] && <SpeakPath cx="339.81" cy="119.08" />}
    </>
  );
}

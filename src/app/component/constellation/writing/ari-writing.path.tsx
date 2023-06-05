"use client";

import SpeakPath from "@/app/component/ui/icon/size24/speak.path";
import { ConstellationWriterProps } from "@/app/component/constellation/map";

export default function AriWritingPath({ lockMap }: ConstellationWriterProps) {
  return (
    <>
      {lockMap.get(9) && <SpeakPath cx="20.19" cy="462.57" />}
      {lockMap.get(8) && <SpeakPath cx="181.99" cy="531.53" />}
      {lockMap.get(7) && <SpeakPath cx="143.53" cy="416.15" />}
      {lockMap.get(6) && <SpeakPath cx="38.76" cy="385.65" />}
      {lockMap.get(5) && <SpeakPath cx="115.68" cy="242.42" />}
      {lockMap.get(4) && <SpeakPath cx="304" cy="184.06" />}
      {lockMap.get(3) && <SpeakPath cx="221.78" cy="161.52" />}
      {lockMap.get(2) && <SpeakPath cx="282.78" cy="108.47" />}
      {lockMap.get(1) && <SpeakPath cx="339.81" cy="119.08" />}
    </>
  );
}

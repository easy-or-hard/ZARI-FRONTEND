"use client";

import { ConstellationWriterProps } from "@/app/component/constellation/map";
import SpeakPath from "@/app/component/banzzack/effect-banzzack";

export default function TauWritingPath({ lockMap }: ConstellationWriterProps) {
  return (
    <>
      {lockMap.get(11) && <SpeakPath cx="339.99" cy="479.13" />}
      {lockMap.get(10) && <SpeakPath cx="339.99" cy="429.91" />}
      {lockMap.get(9) && <SpeakPath cx="254.41" cy="412.57" />}
      {lockMap.get(8) && <SpeakPath cx="210.78" cy="361.11" />}
      {lockMap.get(7) && <SpeakPath cx="147.01" cy="334.26" />}
      {lockMap.get(6) && <SpeakPath cx="78.77" cy="304.06" />}
      {lockMap.get(5) && <SpeakPath cx="20.01" cy="221.28" />}
      {lockMap.get(4) && <SpeakPath cx="260" cy="307.42" />}
      {lockMap.get(3) && <SpeakPath cx="195.12" cy="290.64" />}
      {lockMap.get(2) && <SpeakPath cx="183.93" cy="235.82" />}
      {lockMap.get(1) && <SpeakPath cx="115.69" cy="160.87" />}
    </>
  );
}

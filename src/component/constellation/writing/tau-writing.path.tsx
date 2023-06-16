"use client";

import { ConstellationWriterProps } from "@/component/constellation/map";
import SpeakPath from "@/component/ui/icon/size24/speak.path";

export default function TauWritingPath({ locks }: ConstellationWriterProps) {
  return (
    <>
      {locks[11] && <SpeakPath cx="339.99" cy="479.13" />}
      {locks[10] && <SpeakPath cx="339.99" cy="429.91" />}
      {locks[9] && <SpeakPath cx="254.41" cy="412.57" />}
      {locks[8] && <SpeakPath cx="210.78" cy="361.11" />}
      {locks[7] && <SpeakPath cx="147.01" cy="334.26" />}
      {locks[6] && <SpeakPath cx="78.77" cy="304.06" />}
      {locks[5] && <SpeakPath cx="20.01" cy="221.28" />}
      {locks[4] && <SpeakPath cx="260" cy="307.42" />}
      {locks[3] && <SpeakPath cx="195.12" cy="290.64" />}
      {locks[2] && <SpeakPath cx="183.93" cy="235.82" />}
      {locks[1] && <SpeakPath cx="115.69" cy="160.87" />}
    </>
  );
}

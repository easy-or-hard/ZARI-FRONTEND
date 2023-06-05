"use client";

import SpeakPath from "@/app/component/ui/icon/size24/speak.path";
import { ConstellationWriterProps } from "@/app/component/constellation/map";

export default function GemWritingPath({ lockMap }: ConstellationWriterProps) {
  return (
    <>
      {lockMap.get(14) && <SpeakPath cx="321.12" cy="513.51" />}
      {lockMap.get(13) && <SpeakPath cx="239.78" cy="513.51" />}
      {lockMap.get(12) && <SpeakPath cx="165.83" cy="524.6" />}
      {lockMap.get(11) && <SpeakPath cx="93.11" cy="524.6" />}
      {lockMap.get(10) && <SpeakPath cx="69.69" cy="405.04" />}
      {lockMap.get(9) && <SpeakPath cx="270.59" cy="345.88" />}
      {lockMap.get(8) && <SpeakPath cx="125.15" cy="333.56" />}
      {lockMap.get(7) && <SpeakPath cx="339.61" cy="177.03" />}
      {lockMap.get(6) && <SpeakPath cx="268.13" cy="233.72" />}
      {lockMap.get(5) && <SpeakPath cx="191.71" cy="236.19" />}
      {lockMap.get(4) && <SpeakPath cx="117.76" cy="202.91" />}
      {lockMap.get(3) && <SpeakPath cx="20.39" cy="239.89" />}
      {lockMap.get(2) && <SpeakPath cx="252.1" cy="115.4" />}
      {lockMap.get(1) && <SpeakPath cx="102.97" cy="121.56" />}
    </>
  );
}

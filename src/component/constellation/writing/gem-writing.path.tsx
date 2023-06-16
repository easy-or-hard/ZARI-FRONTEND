"use client";

import { ConstellationWriterProps } from "@/component/constellation/map";
import SpeakPath from "@/component/ui/icon/size24/speak.path";

export default function GemWritingPath({ locks }: ConstellationWriterProps) {
  return (
    <>
      {locks.includes(14) && <SpeakPath cx="321.12" cy="513.51" />}
      {locks.includes(13) && <SpeakPath cx="239.78" cy="513.51" />}
      {locks.includes(12) && <SpeakPath cx="165.83" cy="524.6" />}
      {locks.includes(11) && <SpeakPath cx="93.11" cy="524.6" />}
      {locks.includes(10) && <SpeakPath cx="69.69" cy="405.04" />}
      {locks.includes(9) && <SpeakPath cx="270.59" cy="345.88" />}
      {locks.includes(8) && <SpeakPath cx="125.15" cy="333.56" />}
      {locks.includes(7) && <SpeakPath cx="339.61" cy="177.03" />}
      {locks.includes(6) && <SpeakPath cx="268.13" cy="233.72" />}
      {locks.includes(5) && <SpeakPath cx="191.71" cy="236.19" />}
      {locks.includes(4) && <SpeakPath cx="117.76" cy="202.91" />}
      {locks.includes(3) && <SpeakPath cx="20.39" cy="239.89" />}
      {locks.includes(2) && <SpeakPath cx="252.1" cy="115.4" />}
      {locks.includes(1) && <SpeakPath cx="102.97" cy="121.56" />}
    </>
  );
}

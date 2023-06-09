"use client";

import { ConstellationWriterProps } from "@/component/constellation/map";
import SpeakPath from "@/component/ui/icon/size24/speak.path";

export default function CapWritingPath({ locks }: ConstellationWriterProps) {
  return (
    <>
      {locks.includes(10) && <SpeakPath cx="20" cy="472.38" />}
      {locks.includes(9) && <SpeakPath cx="70.57" cy="516.05" />}
      {locks.includes(8) && <SpeakPath cx="204.94" cy="471.46" />}
      {locks.includes(7) && <SpeakPath cx="137.13" cy="417.44" />}
      {locks.includes(6) && <SpeakPath cx="323.67" cy="464.56" />}
      {locks.includes(5) && <SpeakPath cx="211.03" cy="315.15" />}
      {locks.includes(4) && <SpeakPath cx="331.95" cy="326.76" />}
      {locks.includes(3) && <SpeakPath cx="340" cy="264.7" />}
      {locks.includes(2) && <SpeakPath cx="282.29" cy="178.5" />}
      {locks.includes(1) && <SpeakPath cx="234.02" cy="110.69" />}
    </>
  );
}

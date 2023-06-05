"use client";

import SpeakPath from "@/app/component/ui/icon/size24/speak.path";
import { ConstellationWriterProps } from "@/app/component/constellation/map";

export default function CapWritingPath({ lockMap }: ConstellationWriterProps) {
  return (
    <>
      {lockMap.get(10) && <SpeakPath cx="20" cy="472.38" />}
      {lockMap.get(9) && <SpeakPath cx="70.57" cy="516.05" />}
      {lockMap.get(8) && <SpeakPath cx="204.94" cy="471.46" />}
      {lockMap.get(7) && <SpeakPath cx="137.13" cy="417.44" />}
      {lockMap.get(6) && <SpeakPath cx="323.67" cy="464.56" />}
      {lockMap.get(5) && <SpeakPath cx="211.03" cy="315.15" />}
      {lockMap.get(4) && <SpeakPath cx="331.95" cy="326.76" />}
      {lockMap.get(3) && <SpeakPath cx="340" cy="264.7" />}
      {lockMap.get(2) && <SpeakPath cx="282.29" cy="178.5" />}
      {lockMap.get(1) && <SpeakPath cx="234.02" cy="110.69" />}
    </>
  );
}

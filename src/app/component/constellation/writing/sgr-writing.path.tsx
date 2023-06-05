"use client";

import { ConstellationWriterProps } from "@/app/component/constellation/map";
import SpeakPath from "@/app/component/ui/icon/size24/speak.path";

export default function SgrWritingPath({ lockMap }: ConstellationWriterProps) {
  return (
    <>
      {lockMap.get(16) && <SpeakPath cx="155.38" cy="532.44" />}
      {lockMap.get(15) && <SpeakPath cx="137.05" cy="475.18" />}
      {lockMap.get(14) && <SpeakPath cx="78.65" cy="517.55" />}
      {lockMap.get(13) && <SpeakPath cx="36.27" cy="424.79" />}
      {lockMap.get(12) && <SpeakPath cx="20.24" cy="286.22" />}
      {lockMap.get(11) && <SpeakPath cx="85.52" cy="232.39" />}
      {lockMap.get(10) && <SpeakPath cx="273.34" cy="393.87" />}
      {lockMap.get(9) && <SpeakPath cx="337.73" cy="331.85" />}
      {lockMap.get(8) && <SpeakPath cx="285.88" cy="302.86" />}
      {lockMap.get(7) && <SpeakPath cx="339.76" cy="163.68" />}
      {lockMap.get(6) && <SpeakPath cx="296.24" cy="234.68" />}
      {lockMap.get(5) && <SpeakPath cx="224.09" cy="246.13" />}
      {lockMap.get(4) && <SpeakPath cx="208.06" cy="307.98" />}
      {lockMap.get(3) && <SpeakPath cx="151.94" cy="272.47" />}
      {lockMap.get(2) && <SpeakPath cx="162.25" cy="184.29" />}
      {lockMap.get(1) && <SpeakPath cx="110.71" cy="107.56" />}
    </>
  );
}

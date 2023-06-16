"use client";

import { ConstellationWriterProps } from "@/component/constellation/map";
import SpeakPath from "@/component/ui/icon/size24/speak.path";

export default function SgrWritingPath({ locks }: ConstellationWriterProps) {
  return (
    <>
      {locks.includes(16) && <SpeakPath cx="155.38" cy="532.44" />}
      {locks.includes(15) && <SpeakPath cx="137.05" cy="475.18" />}
      {locks.includes(14) && <SpeakPath cx="78.65" cy="517.55" />}
      {locks.includes(13) && <SpeakPath cx="36.27" cy="424.79" />}
      {locks.includes(12) && <SpeakPath cx="20.24" cy="286.22" />}
      {locks.includes(11) && <SpeakPath cx="85.52" cy="232.39" />}
      {locks.includes(10) && <SpeakPath cx="273.34" cy="393.87" />}
      {locks.includes(9) && <SpeakPath cx="337.73" cy="331.85" />}
      {locks.includes(8) && <SpeakPath cx="285.88" cy="302.86" />}
      {locks.includes(7) && <SpeakPath cx="339.76" cy="163.68" />}
      {locks.includes(6) && <SpeakPath cx="296.24" cy="234.68" />}
      {locks.includes(5) && <SpeakPath cx="224.09" cy="246.13" />}
      {locks.includes(4) && <SpeakPath cx="208.06" cy="307.98" />}
      {locks.includes(3) && <SpeakPath cx="151.94" cy="272.47" />}
      {locks.includes(2) && <SpeakPath cx="162.25" cy="184.29" />}
      {locks.includes(1) && <SpeakPath cx="110.71" cy="107.56" />}
    </>
  );
}

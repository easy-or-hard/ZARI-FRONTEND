"use client";

import SpeakPath from "@/app/component/ui/icon/size24/speak.path";
import { ConstellationWriterProps } from "@/app/component/constellation/map";

export default function LeoWritingPath({ lockMap }: ConstellationWriterProps) {
  return (
    <>
      {lockMap.get(11) && <SpeakPath cx="199.71" cy="524.56" />}
      {lockMap.get(10) && <SpeakPath cx="145.03" cy="494.04" />}
      {lockMap.get(9) && <SpeakPath cx="20" cy="464.96" />}
      {lockMap.get(8) && <SpeakPath cx="90.34" cy="410.11" />}
      {lockMap.get(7) && <SpeakPath cx="61.1" cy="355.42" />}
      {lockMap.get(6) && <SpeakPath cx="340" cy="309.64" />}
      {lockMap.get(5) && <SpeakPath cx="276.01" cy="242.24" />}
      {lockMap.get(4) && <SpeakPath cx="202.25" cy="226.98" />}
      {lockMap.get(3) && <SpeakPath cx="175.55" cy="158.31" />}
      {lockMap.get(2) && <SpeakPath cx="265.84" cy="116.34" />}
      {lockMap.get(1) && <SpeakPath cx="200.98" cy="92.18" />}
    </>
  );
}

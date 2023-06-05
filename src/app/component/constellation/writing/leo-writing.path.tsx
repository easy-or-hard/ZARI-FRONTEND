"use client";

import SpeakPath from "@/app/component/ui/icon/size24/speak.path";
import { ConstellationWriterProps } from "@/app/component/constellation/map";

export default function LeoWritingPath({ locks }: ConstellationWriterProps) {
  return (
    <>
      {locks[11] && <SpeakPath cx="199.71" cy="524.56" />}
      {locks[10] && <SpeakPath cx="145.03" cy="494.04" />}
      {locks[9] && <SpeakPath cx="20" cy="464.96" />}
      {locks[8] && <SpeakPath cx="90.34" cy="410.11" />}
      {locks[7] && <SpeakPath cx="61.1" cy="355.42" />}
      {locks[6] && <SpeakPath cx="340" cy="309.64" />}
      {locks[5] && <SpeakPath cx="276.01" cy="242.24" />}
      {locks[4] && <SpeakPath cx="202.25" cy="226.98" />}
      {locks[3] && <SpeakPath cx="175.55" cy="158.31" />}
      {locks[2] && <SpeakPath cx="265.84" cy="116.34" />}
      {locks[1] && <SpeakPath cx="200.98" cy="92.18" />}
    </>
  );
}

"use client";

import { ConstellationEffectProps } from "@/component/constellation/map";
import EffectBanzzack from "@/component/banzzack/effect-banzzack";

export default function PscEffectPath({ banzzacks }: ConstellationEffectProps) {
  return (
    <>
      {banzzacks.find((banzzack) => banzzack[1] === 13) && (
        <EffectBanzzack cx="172.19" cy="540.86" />
      )}
      {banzzacks.find((banzzack) => banzzack[1] === 12) && (
        <EffectBanzzack cx="89.79" cy="550.8" />
      )}
      {banzzacks.find((banzzack) => banzzack[1] === 11) && (
        <EffectBanzzack cx="130.99" cy="478.35" />
      )}
      {banzzacks.find((banzzack) => banzzack[1] === 10) && (
        <EffectBanzzack cx="129.57" cy="415.84" />
      )}
      {banzzacks.find((banzzack) => banzzack[1] === 9) && (
        <EffectBanzzack cx="111.1" cy="349.07" />
      )}
      {banzzacks.find((banzzack) => banzzack[1] === 8) && (
        <EffectBanzzack cx="99.73" cy="289.41" />
      )}
      {banzzacks.find((banzzack) => banzzack[1] === 7) && (
        <EffectBanzzack cx="75.58" cy="214.11" />
      )}
      {banzzacks.find((banzzack) => banzzack[1] === 6) && (
        <EffectBanzzack cx="339.82" cy="239.68" />
      )}
      {banzzacks.find((banzzack) => banzzack[1] === 5) && (
        <EffectBanzzack cx="311.41" cy="174.33" />
      )}
      {banzzacks.find((banzzack) => banzzack[1] === 4) && (
        <EffectBanzzack cx="244.64" cy="215.53" />
      )}
      {banzzacks.find((banzzack) => banzzack[1] === 3) && (
        <EffectBanzzack cx="159.4" cy="177.17" />
      )}
      {banzzacks.find((banzzack) => banzzack[1] === 2) && (
        <EffectBanzzack cx="98.31" cy="141.66" />
      )}
      {banzzacks.find((banzzack) => banzzack[1] === 1) && (
        <EffectBanzzack cx="20.18" cy="90.51" />
      )}
    </>
  );
}

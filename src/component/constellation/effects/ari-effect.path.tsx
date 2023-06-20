"use client";

import { ConstellationEffectProps } from "@/component/constellation/map";
import EffectBanzzack from "@/component/banzzack/effect-banzzack";

export default function AriEffectPath({ banzzacks }: ConstellationEffectProps) {
  return (
    <>
      {banzzacks.find((banzzack) => banzzack[1] === 9) && (
        <EffectBanzzack cx="20.19" cy="462.57" />
      )}
      {banzzacks.find((banzzack) => banzzack[1] === 8) && (
        <EffectBanzzack cx="181.99" cy="531.53" />
      )}
      {banzzacks.find((banzzack) => banzzack[1] === 7) && (
        <EffectBanzzack cx="143.53" cy="416.15" />
      )}
      {banzzacks.find((banzzack) => banzzack[1] === 6) && (
        <EffectBanzzack cx="38.76" cy="385.65" />
      )}
      {banzzacks.find((banzzack) => banzzack[1] === 5) && (
        <EffectBanzzack cx="115.68" cy="242.42" />
      )}
      {banzzacks.find((banzzack) => banzzack[1] === 4) && (
        <EffectBanzzack cx="304" cy="184.06" />
      )}
      {banzzacks.find((banzzack) => banzzack[1] === 3) && (
        <EffectBanzzack cx="221.78" cy="161.52" />
      )}
      {banzzacks.find((banzzack) => banzzack[1] === 2) && (
        <EffectBanzzack cx="282.78" cy="108.47" />
      )}
      {banzzacks.find((banzzack) => banzzack[1] === 1) && (
        <EffectBanzzack cx="339.81" cy="119.08" />
      )}
    </>
  );
}

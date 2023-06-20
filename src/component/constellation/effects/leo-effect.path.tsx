"use client";

import { ConstellationEffectProps } from "@/component/constellation/map";
import EffectBanzzack from "@/component/banzzack/effect-banzzack";

export default function LeoEffectPath({ banzzacks }: ConstellationEffectProps) {
  return (
    <>
      {banzzacks.find((banzzack) => banzzack[1] === 11) && (
        <EffectBanzzack cx="199.71" cy="524.56" />
      )}
      {banzzacks.find((banzzack) => banzzack[1] === 10) && (
        <EffectBanzzack cx="145.03" cy="494.04" />
      )}
      {banzzacks.find((banzzack) => banzzack[1] === 9) && (
        <EffectBanzzack cx="20" cy="464.96" />
      )}
      {banzzacks.find((banzzack) => banzzack[1] === 8) && (
        <EffectBanzzack cx="90.34" cy="410.11" />
      )}
      {banzzacks.find((banzzack) => banzzack[1] === 7) && (
        <EffectBanzzack cx="61.1" cy="355.42" />
      )}
      {banzzacks.find((banzzack) => banzzack[1] === 6) && (
        <EffectBanzzack cx="340" cy="309.64" />
      )}
      {banzzacks.find((banzzack) => banzzack[1] === 5) && (
        <EffectBanzzack cx="276.01" cy="242.24" />
      )}
      {banzzacks.find((banzzack) => banzzack[1] === 4) && (
        <EffectBanzzack cx="202.25" cy="226.98" />
      )}
      {banzzacks.find((banzzack) => banzzack[1] === 3) && (
        <EffectBanzzack cx="175.55" cy="158.31" />
      )}
      {banzzacks.find((banzzack) => banzzack[1] === 2) && (
        <EffectBanzzack cx="265.84" cy="116.34" />
      )}
      {banzzacks.find((banzzack) => banzzack[1] === 1) && (
        <EffectBanzzack cx="200.98" cy="92.18" />
      )}
    </>
  );
}

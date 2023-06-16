"use client";

import { ConstellationComponentProps } from "@/component/constellation/map";
import EffectBanzzack from "@/component/banzzack/effect-banzzack";

export default function LibEffectPath({
  banzzacks,
}: ConstellationComponentProps) {
  return (
    <>
      {banzzacks.find((banzzack) => banzzack.starNumber === 11) && (
        <EffectBanzzack cx="116.16" cy="514.14" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 10) && (
        <EffectBanzzack cx="69.06" cy="464.55" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 9) && (
        <EffectBanzzack cx="148.39" cy="412.49" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 8) && (
        <EffectBanzzack cx="276.07" cy="387.7" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 7) && (
        <EffectBanzzack cx="340" cy="206.73" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 6) && (
        <EffectBanzzack cx="225.24" cy="232.76" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 5) && (
        <EffectBanzzack cx="272.35" cy="137.31" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 4) && (
        <EffectBanzzack cx="191.78" cy="102.6" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 3) && (
        <EffectBanzzack cx="124.84" cy="220.36" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 2) && (
        <EffectBanzzack cx="20" cy="251.35" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 1) && (
        <EffectBanzzack cx="29.92" cy="174.5" />
      )}
    </>
  );
}

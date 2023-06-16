"use client";

import { ConstellationComponentProps } from "@/component/constellation/map";
import EffectBanzzack from "@/component/banzzack/effect-banzzack";

export default function CncEffectPath({
  banzzacks,
}: ConstellationComponentProps) {
  return (
    <>
      {banzzacks.find((banzzack) => banzzack.starNumber === 12) && (
        <EffectBanzzack cx="20" cy="419.95" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 11) && (
        <EffectBanzzack cx="59.63" cy="514.5" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 9) && (
        <EffectBanzzack cx="131.6" cy="522.97" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 8) && (
        <EffectBanzzack cx="340" cy="498.85" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 7) && (
        <EffectBanzzack cx="272.43" cy="388.9" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 6) && (
        <EffectBanzzack cx="176.47" cy="379.03" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 5) && (
        <EffectBanzzack cx="235.74" cy="252.02" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 4) && (
        <EffectBanzzack cx="293.6" cy="182.87" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 3) && (
        <EffectBanzzack cx="120.03" cy="290.12" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 2) && (
        <EffectBanzzack cx="50.88" cy="180.78" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 1) && (
        <EffectBanzzack cx="105.67" cy="117.03" />
      )}
    </>
  );
}

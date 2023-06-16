"use client";

import { ConstellationComponentProps } from "@/component/constellation/map";
import EffectBanzzack from "@/component/banzzack/effect-banzzack";

export default function CapEffectPath({
  banzzacks,
}: ConstellationComponentProps) {
  return (
    <>
      {banzzacks.find((banzzack) => banzzack.starNumber === 10) && (
        <EffectBanzzack cx="20" cy="472.38" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 9) && (
        <EffectBanzzack cx="70.57" cy="516.05" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 8) && (
        <EffectBanzzack cx="204.94" cy="471.46" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 7) && (
        <EffectBanzzack cx="137.13" cy="417.44" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 6) && (
        <EffectBanzzack cx="323.67" cy="464.56" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 5) && (
        <EffectBanzzack cx="211.03" cy="315.15" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 4) && (
        <EffectBanzzack cx="331.95" cy="326.76" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 3) && (
        <EffectBanzzack cx="340" cy="264.7" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 2) && (
        <EffectBanzzack cx="282.29" cy="178.5" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 1) && (
        <EffectBanzzack cx="234.02" cy="110.69" />
      )}
    </>
  );
}

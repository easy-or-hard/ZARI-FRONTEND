"use client";

import { ConstellationComponentProps } from "@/component/constellation/map";
import EffectBanzzack from "@/component/banzzack/effect-banzzack";

export default function SgrEffectPath({
  banzzacks,
}: ConstellationComponentProps) {
  return (
    <>
      {banzzacks.find((banzzack) => banzzack.starNumber === 16) && (
        <EffectBanzzack cx="155.38" cy="532.44" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 15) && (
        <EffectBanzzack cx="137.05" cy="475.18" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 14) && (
        <EffectBanzzack cx="78.65" cy="517.55" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 13) && (
        <EffectBanzzack cx="36.27" cy="424.79" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 12) && (
        <EffectBanzzack cx="20.24" cy="286.22" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 11) && (
        <EffectBanzzack cx="85.52" cy="232.39" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 10) && (
        <EffectBanzzack cx="273.34" cy="393.87" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 9) && (
        <EffectBanzzack cx="337.73" cy="331.85" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 8) && (
        <EffectBanzzack cx="285.88" cy="302.86" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 7) && (
        <EffectBanzzack cx="339.76" cy="163.68" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 6) && (
        <EffectBanzzack cx="296.24" cy="234.68" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 5) && (
        <EffectBanzzack cx="224.09" cy="246.13" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 4) && (
        <EffectBanzzack cx="208.06" cy="307.98" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 3) && (
        <EffectBanzzack cx="151.94" cy="272.47" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 2) && (
        <EffectBanzzack cx="162.25" cy="184.29" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 1) && (
        <EffectBanzzack cx="110.71" cy="107.56" />
      )}
    </>
  );
}

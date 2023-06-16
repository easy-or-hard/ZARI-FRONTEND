"use client";

import { ConstellationComponentProps } from "@/component/constellation/map";
import EffectBanzzack from "@/component/banzzack/effect-banzzack";

export default function AqrEffectPath({
  banzzacks,
}: ConstellationComponentProps) {
  return (
    <>
      {banzzacks.find((banzzack) => banzzack.starNumber === 13) && (
        <EffectBanzzack cx="257.9" cy="340.5" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 12) && (
        <EffectBanzzack cx="161.3" cy="348.9" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 11) && (
        <EffectBanzzack cx="340" cy="579.3" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 10) && (
        <EffectBanzzack cx="267.5" cy="527.5" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 9) && (
        <EffectBanzzack cx="210.1" cy="488.3" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 8) && (
        <EffectBanzzack cx="124.5" cy="485.7" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 7) && (
        <EffectBanzzack cx="65.7" cy="534.7" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 6) && (
        <EffectBanzzack cx="20" cy="416.3" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 5) && (
        <EffectBanzzack cx="54.5" cy="343.3" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 4) && (
        <EffectBanzzack cx="75.7" cy="263.7" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 3) && (
        <EffectBanzzack cx="144.1" cy="202.3" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 2) && (
        <EffectBanzzack cx="184.7" cy="142.3" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 1) && (
        <EffectBanzzack cx="220.5" cy="89.7" />
      )}
    </>
  );
}

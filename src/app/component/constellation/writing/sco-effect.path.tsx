"use client";

import EffectBanzzack from "@/app/component/banzzack/effect-banzzack";
import { ConstellationComponentProps } from "@/app/component/constellation/map";

export default function ScoEffectPath({
  banzzacks,
}: ConstellationComponentProps) {
  return (
    <>
      {banzzacks.find((banzzack) => banzzack.starNumber === 14) && (
        <EffectBanzzack cx="20" cy="439.35" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 13) && (
        <EffectBanzzack cx="79.09" cy="406.9" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 12) && (
        <EffectBanzzack cx="49.65" cy="514.66" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 11) && (
        <EffectBanzzack cx="107.58" cy="537.84" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 10) && (
        <EffectBanzzack cx="194.48" cy="522.77" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 9) && (
        <EffectBanzzack cx="277.91" cy="469.47" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 8) && (
        <EffectBanzzack cx="222.29" cy="395.32" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 7) && (
        <EffectBanzzack cx="168.99" cy="338.54" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 6) && (
        <EffectBanzzack cx="179.42" cy="237.73" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 5) && (
        <EffectBanzzack cx="228.09" cy="187.91" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 4) && (
        <EffectBanzzack cx="340" cy="222.67" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 3) && (
        <EffectBanzzack cx="323.78" cy="172.84" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 2) && (
        <EffectBanzzack cx="297.61" cy="113.75" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 1) && (
        <EffectBanzzack cx="229.24" cy="102.16" />
      )}
    </>
  );
}

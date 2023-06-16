"use client";

import { ConstellationComponentProps } from "@/component/constellation/map";
import EffectBanzzack from "@/component/banzzack/effect-banzzack";

export default function VirEffectPath({
  banzzacks,
}: ConstellationComponentProps) {
  return (
    <>
      {banzzacks.find((banzzack) => banzzack.starNumber === 14) && (
        <EffectBanzzack cx="146.4" cy="553.88" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 13) && (
        <EffectBanzzack cx="20" cy="518.45" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 12) && (
        <EffectBanzzack cx="222.71" cy="443.5" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 11) && (
        <EffectBanzzack cx="165.48" cy="462.58" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 10) && (
        <EffectBanzzack cx="80.99" cy="405.34" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 9) && (
        <EffectBanzzack cx="148.66" cy="333.58" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 8) && (
        <EffectBanzzack cx="338.54" cy="317.21" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 7) && (
        <EffectBanzzack cx="256.78" cy="244.98" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 6) && (
        <EffectBanzzack cx="159.56" cy="231.38" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 5) && (
        <EffectBanzzack cx="72.35" cy="174.14" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 4) && (
        <EffectBanzzack cx="223.97" cy="202.49" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 3) && (
        <EffectBanzzack cx="243.61" cy="134.09" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 2) && (
        <EffectBanzzack cx="191.37" cy="72.86" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 1) && (
        <EffectBanzzack cx="144.13" cy="110.56" />
      )}
    </>
  );
}

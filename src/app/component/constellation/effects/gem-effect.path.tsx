"use client";

import EffectBanzzack from "@/app/component/banzzack/effect-banzzack";
import { ConstellationComponentProps } from "@/app/component/constellation/map";

export default function GemEffectPath({
  banzzacks,
}: ConstellationComponentProps) {
  return (
    <>
      {banzzacks.find((banzzack) => banzzack.starNumber === 14) && (
        <EffectBanzzack cx="321.12" cy="513.51" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 13) && (
        <EffectBanzzack cx="239.78" cy="513.51" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 12) && (
        <EffectBanzzack cx="165.83" cy="524.6" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 11) && (
        <EffectBanzzack cx="93.11" cy="524.6" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 10) && (
        <EffectBanzzack cx="69.69" cy="405.04" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 9) && (
        <EffectBanzzack cx="270.59" cy="345.88" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 8) && (
        <EffectBanzzack cx="125.15" cy="333.56" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 7) && (
        <EffectBanzzack cx="339.61" cy="177.03" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 6) && (
        <EffectBanzzack cx="268.13" cy="233.72" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 5) && (
        <EffectBanzzack cx="191.71" cy="236.19" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 4) && (
        <EffectBanzzack cx="117.76" cy="202.91" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 3) && (
        <EffectBanzzack cx="20.39" cy="239.89" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 2) && (
        <EffectBanzzack cx="252.1" cy="115.4" />
      )}
      {banzzacks.find((banzzack) => banzzack.starNumber === 1) && (
        <EffectBanzzack cx="102.97" cy="121.56" />
      )}
    </>
  );
}

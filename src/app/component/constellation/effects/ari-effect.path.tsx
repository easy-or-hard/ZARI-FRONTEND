'use client';

import EffectBanzzack from "@/app/component/banzzack/effect-banzzack";
import {ConstellationComponentProps} from "@/app/component/constellation/map";

export default function AriEffectPath({banzzacks}: ConstellationComponentProps) {
    return (
        <>
            {banzzacks.find(banzzack => banzzack.starNumber === 9) && <EffectBanzzack cx="20.19" cy="462.57"/>}
            {banzzacks.find(banzzack => banzzack.starNumber === 8) && <EffectBanzzack cx="181.99" cy="531.53"/>}
            {banzzacks.find(banzzack => banzzack.starNumber === 7) && <EffectBanzzack cx="143.53" cy="416.15"/>}
            {banzzacks.find(banzzack => banzzack.starNumber === 6) && <EffectBanzzack cx="38.76" cy="385.65"/>}
            {banzzacks.find(banzzack => banzzack.starNumber === 5) && <EffectBanzzack cx="115.68" cy="242.42"/>}
            {banzzacks.find(banzzack => banzzack.starNumber === 4) && <EffectBanzzack cx="304" cy="184.06"/>}
            {banzzacks.find(banzzack => banzzack.starNumber === 3) && <EffectBanzzack cx="221.78" cy="161.52"/>}
            {banzzacks.find(banzzack => banzzack.starNumber === 2) && <EffectBanzzack cx="282.78" cy="108.47"/>}
            {banzzacks.find(banzzack => banzzack.starNumber === 1) && <EffectBanzzack cx="339.81" cy="119.08"/>}
        </>
    )
}
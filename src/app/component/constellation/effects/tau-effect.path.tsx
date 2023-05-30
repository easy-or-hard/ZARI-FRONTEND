'use client';

import {ConstellationComponentProps} from "@/app/component/constellation/map";
import EffectBanzzack from "@/app/component/banzzack/effect-banzzack";

export default function TauEffectPath({banzzacks}: ConstellationComponentProps) {
    return (
        <>
            {banzzacks.find(banzzack => banzzack.starNumber === 11) && <EffectBanzzack cx="339.99" cy="479.13"/>}
            {banzzacks.find(banzzack => banzzack.starNumber === 10) && <EffectBanzzack cx="339.99" cy="429.91"/>}
            {banzzacks.find(banzzack => banzzack.starNumber === 9) && <EffectBanzzack cx="254.41" cy="412.57"/>}
            {banzzacks.find(banzzack => banzzack.starNumber === 8) && <EffectBanzzack cx="210.78" cy="361.11"/>}
            {banzzacks.find(banzzack => banzzack.starNumber === 7) && <EffectBanzzack cx="147.01" cy="334.26"/>}
            {banzzacks.find(banzzack => banzzack.starNumber === 6) && <EffectBanzzack cx="78.77" cy="304.06"/>}
            {banzzacks.find(banzzack => banzzack.starNumber === 5) && <EffectBanzzack cx="20.01" cy="221.28"/>}
            {banzzacks.find(banzzack => banzzack.starNumber === 4) && <EffectBanzzack cx="260" cy="307.42"/>}
            {banzzacks.find(banzzack => banzzack.starNumber === 3) && <EffectBanzzack cx="195.12" cy="290.64"/>}
            {banzzacks.find(banzzack => banzzack.starNumber === 2) && <EffectBanzzack cx="183.93" cy="235.82"/>}
            {banzzacks.find(banzzack => banzzack.starNumber === 1) && <EffectBanzzack cx="115.69" cy="160.87"/>}
        </>
    )
}
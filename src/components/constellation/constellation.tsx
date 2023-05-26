'use client'

import {IncludeBanzzackZariDto} from "@/services/zari/dto/include-banzzack-zari.dto";
import {FC, useEffect, useState} from 'react';
import Banzzack2 from "@/components/banzzack/banzzack2";
import {BanzzackEntity} from "@/services/banzzack/entities/banzzack.entity";

type Props = {
    includeBanzzackZariDto: IncludeBanzzackZariDto;
}

// 별자리 컴포넌트가 사용해야하는 props 를 정의
// 다른 prop 를 따로 정의해서 써서는 안 됩니다.
export type ConstellationComponentProps = {
    setClickedStarNumber: (starNumber: number) => void;
    setBanzzackVisible: (visible: boolean) => void;
}

export default function Constellation({includeBanzzackZariDto}: Props) {
    const [clickedStarNumber, setClickedStarNumber] = useState<number>(0);
    const [banzzack, setBanzzack] = useState<BanzzackEntity | null>(null);
    const [banzzackVisible, setBanzzackVisible] = useState<boolean>(false);
    const [SpecificConstellation, setSpecificConstellation] = useState<FC<ConstellationComponentProps> | null>(null);

    // 동적으로 별자리 컴포넌트를 import
    useEffect(() => {
        import(`@/components/constellation/constellations/${includeBanzzackZariDto.constellationIAU}`)
            .then((component) => {
                setSpecificConstellation(() => component.default);
            })
            .catch((err) => {
                console.error(`별자리 컴포넌트를 찾지 못 했습니다. 별자리 IAU: ${includeBanzzackZariDto.constellationIAU}`, err);
            });
    }, [includeBanzzackZariDto.constellationIAU]);

    useEffect(() => {
        if (!clickedStarNumber || !banzzackVisible) {
            setBanzzackVisible(false);
            setBanzzack(null);
            return;
        }

        const foundBanzzack = includeBanzzackZariDto.banzzacks
            .find(banzzack => banzzack.starNumber === clickedStarNumber)

        if (!foundBanzzack) {
            console.log('반짝이 없는 경우는 반짝이 붙이기');
        } else {
            setBanzzackVisible(true);
            setBanzzack(foundBanzzack);
        }
    }, [clickedStarNumber, banzzackVisible])

    return (
        <>
            {
                banzzackVisible && banzzack &&
                <Banzzack2
                    banzzack={banzzack}
                    setVisible={setBanzzackVisible}
                    onClick={() => {
                        alert('클릭!')
                    }}
                />
            }
            {
                SpecificConstellation
                    ? <SpecificConstellation setBanzzackVisible={setBanzzackVisible} setClickedStarNumber={setClickedStarNumber}/>
                    : <div className={'h-full grid items-center'}>
                        <span className={'animate-wiggle-more animate-infinite text-2xl'}>
                            별자리 로딩중...
                        </span>
                </div>
            }
        </>
    )
}

'use client';

import constellationMap from "@/app/component/constellation/map";
import {useZariFindById} from "@/services/zari/zari.use";
import {MouseEventHandler} from "react";
import {notFound} from "next/navigation";

type Props = {
    params: {
        id: number;
    }
}

export default function ZariPage({params: {id}}: Props) {
    const {data: OkResponseIncludeConstellationByeolBanzzackZari, isLoading, error} = useZariFindById(id);

    if (isLoading) return null;
    else if (error) {notFound()};

    // @ts-ignore
    const {origin: ConstellationOriginComponent, effect: ConstellationEffectComponent} = constellationMap[OkResponseIncludeConstellationByeolBanzzackZari?.data.constellationIAU];

    const banzzackHandler: MouseEventHandler<SVGSVGElement> = (event) => {
        const target = event.target as SVGElement;
        if (target.tagName === "circle") {
            const parent = target.parentNode as SVGGElement;
            const key = parent.getAttribute('data-name');
            console.log(key);
        }
    }

    return (
        <>
            <div className="h-full p-4 flex flex-col items-center">
                <div className={'p-4 flex flex-col justify-around items-center'}>
                    <div className="font-bold text-center text-5xl">
                        {OkResponseIncludeConstellationByeolBanzzackZari?.data.byeol.name}
                    </div>
                    <div className="font-medium text-center">
                        {OkResponseIncludeConstellationByeolBanzzackZari?.data.constellation.name} 자리
                    </div>
                </div>
                {/*{OkResponseIncludeConstellationByeolBanzzackZari?.data.banzzacks.map(banzzack => <pre*/}
                {/*    key={banzzack.id}>{banzzack.content}</pre>)}*/}
                <svg onClick={banzzackHandler} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 640">
                    <ConstellationOriginComponent/>
                    <ConstellationEffectComponent
                        banzzacks={OkResponseIncludeConstellationByeolBanzzackZari?.data.banzzacks}/>
                </svg>
            </div>
        </>
    )
}

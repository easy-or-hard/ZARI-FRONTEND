import {BanzzackEntity} from "@/services/banzzack/entities/banzzack.entity";
import constellationMap from "@/app/component/constellation/map";

type Props = {
    IAU: string;
}

// 별자리 컴포넌트가 사용해야하는 props 를 정의
// 다른 prop 를 따로 정의해서 써서는 안 됩니다.
export type ConstellationComponentProps = {
    setClickedStarNumber: (starNumber: number) => void;
    setReadBanzzackVisible: (visible: boolean) => void;
    banzzacks: BanzzackEntity[];
}

export default function Constellation({IAU}: Props) {
    const ConstellationOriginComponent = constellationMap[IAU].origin;
    return (
        <>
            <ConstellationOriginComponent/>
        </>
    )
}

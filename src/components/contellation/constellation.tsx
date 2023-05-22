import ConstellationService from "@/service/constellation/constellation.service";
import {notFound} from "next/navigation";
import {ConstellationEntity} from "@/service/constellation/entities/constellation.entity";
import {OkResponseDto} from "@/service/common/dto/ok.response.dto";
import React from "react";
import Tau from "@/components/contellation/Tau";

type props = {
    IAU: string;
}

export const constellations = new Map<string, React.ElementType>();
constellations.set("Tau", Tau);

export default async function Constellation({IAU}: props) {
    const {response, responseJson} = await ConstellationService.findByAUI(IAU);
    if (!response.ok) {
        notFound();
    }

    // 다이내믹 컴포넌트 임포트
    const constellation = (responseJson as OkResponseDto<ConstellationEntity>).data;
    const ConstellationComponent = constellations.get(constellation.IAU);
    if (!ConstellationComponent) {
        notFound();
    }

    return (
        <ConstellationComponent/>
    )
}

import ZariService from "@/services/zari/zari.service";
import {notFound} from "next/navigation";
import {OkResponseDto} from "@/services/common/dto/ok.response.dto";
import {IncludeBanzzackZariDto} from "@/services/zari/dto/include-banzzack-zari.dto";
import ByeolService from "@/services/byeol/byeol.service";
import {IncludeZariByeolDto} from "@/services/byeol/dto/include-zari-byeol.dto";
import ConstellationService from "@/services/constellation/constellation.service";
import {ConstellationEntity} from "@/services/constellation/entities/constellation.entity";
import Constellation from "@/components/constellation/constellation";

type Props = {
    params: {
        id: number;
    }
}

async function zariFindById(zariId: number) {
    const {response: zariResponse, responseJson: zariResponseJson} = await ZariService.findById(zariId);
    if (!zariResponse.ok) {
        notFound(); // 함수 종료
    }
    // 단언을 사용하여 data 가 undefined 가 아님을 명확히 함
    return (zariResponseJson as OkResponseDto<IncludeBanzzackZariDto>).data
}

async function byeolFindById(byeolId: number) {
    const {response: byeolResponse, responseJson: byeolResponseJson} = await ByeolService.findById(byeolId);
    if (!byeolResponse.ok) {
        notFound(); // 함수 종료
    }
    // 단언 사용
    return (byeolResponseJson as OkResponseDto<IncludeZariByeolDto>).data;
}

async function constellationFindByIAU(IAU: string) {
    const {
        response: constellationResponse,
        responseJson: constellationResponseJson
    } = await ConstellationService.findByAUI(IAU);
    if (!constellationResponse.ok) {
        notFound(); // 함수 종료
    }
    // 단언 사용
    return (constellationResponseJson as OkResponseDto<ConstellationEntity>).data;
}

export default async function Zari({params: {id}}: Props) {
    // 자리 찾기
    const includeBanzzackZari = await zariFindById(id);

    // 별 찾기, 별자리 찾기
    const [includeZariByeol, constellation] = await Promise.all([
        byeolFindById(includeBanzzackZari.byeolId),
        constellationFindByIAU(includeBanzzackZari.constellationIAU)
    ]);

    return (
        <div className="h-full p-4 flex flex-col items-center">
            <div className={'p-4 flex flex-col justify-around items-center'}>
                <div className="font-bold text-center text-5xl">
                    {includeZariByeol.name}
                </div>
                <div className="font-medium text-center">
                    {constellation.name} 자리
                </div>
            </div>

            <Constellation includeBanzzackZariDto={includeBanzzackZari} byeolName={includeZariByeol.name}/>
        </div>
    )
}

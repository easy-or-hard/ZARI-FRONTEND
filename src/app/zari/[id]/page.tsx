import ZariService from "@/services/zari/zari.service";
import {notFound} from "next/navigation";
import {OkResponseDto} from "@/services/common/dto/ok.response.dto";
import {IncludeBanzzackZariDto} from "@/services/zari/dto/include-banzzack-zari.dto";
import {constellations} from "@/components/contellation/constellation";
import ByeolService from "@/services/byeol/byeol.service";
import {IncludeZariByeolDto} from "@/services/byeol/dto/include-zari-byeol.dto";
import ConstellationService from "@/services/constellation/constellation.service";
import {ConstellationEntity} from "@/services/constellation/entities/constellation.entity";

type Props = {
    params: {
        id: number;
    }
}

export default async function Zari({params: {id}}: Props) {
    // 자리 찾기
    const {response: zariResponse, responseJson: zariResponseJson} = await ZariService.findById(id);
    if (!zariResponse.ok) {
        notFound();
        return; // 이 함수에서 더 이상 진행하지 않음
    }
    // 단언을 사용하여 data 가 undefined 가 아님을 명확히 함
    const includeBanzzackZari = (zariResponseJson as OkResponseDto<IncludeBanzzackZariDto>).data

    // 별 찾기
    const {
        response: byeolResponse,
        responseJson: byeolResponseJson
    } = await ByeolService.findById(includeBanzzackZari.byeolId);
    if (!byeolResponse.ok) {
        notFound();
        return;
    }
    // 단언 사용
    const includeZariByeol = (byeolResponseJson as OkResponseDto<IncludeZariByeolDto>).data;

    // 별자리 찾기
    const {
        response: constellationResponse,
        responseJson: constellationResponseJson
    } = await ConstellationService.findByAUI(includeBanzzackZari.constellationIAU);
    if (!constellationResponse.ok) {
        notFound();
    }
    const constellation = (constellationResponseJson as OkResponseDto<ConstellationEntity>).data;
    const ConstellationComponent = constellations.get(constellation.IAU);
    if (!ConstellationComponent) {
        notFound();
    }

    return (
        <div className="h-full p-4 flex flex-col items-center">
            <div className={'p-4 flex flex-col justify-around items-center'}>
                <div className="font-serif font-normal font-bold text-center text-white text-5xl">
                    {includeZariByeol.name}
                </div>
                {/* 스타일 속성에 적용한건 테일윈드 미지원이라 따로 적용 */}
                <div className="font-serif font-normal font-medium text-center text-white text-base"
                     style={{color: 'rgba(255, 255, 255, 0.7)', mixBlendMode: 'lighten'}}>
                    {constellation.name} 자리
                </div>
            </div>
            <ConstellationComponent banzzacks={includeBanzzackZari.banzzacks}/>
        </div>
    )
}

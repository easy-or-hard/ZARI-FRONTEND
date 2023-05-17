import {cookies} from 'next/headers';
import {JWT} from "@/lib/const";
import ByeolService from "@/service/byeol/byeol.service";
import {redirect} from "next/navigation";
import Zari from "@/components/zari/zari";
import {IncludeZariByeolDto} from "@/service/byeol/dto/include-zari-byeol.dto";
import {ZariEntity} from "@/service/zari/entities/zari.entity";
import {OkResponseDto} from "@/service/common/dto/ok.response.dto";

export default async function Me() {
    const jwt = cookies().get(JWT.ACCESS_TOKEN);
    const {key, fetcher} = ByeolService.getMeFetcher(jwt);
    const response = await fetcher(key);

    let byeol: IncludeZariByeolDto;
    let zaris: ZariEntity[] = [];
    switch (response.statusCode) {
        case 200: // 정상 응답
            byeol = (response as OkResponseDto<IncludeZariByeolDto>).data;
            zaris = byeol.zaris;
            break;
        case 401: // 비인증 사용자, 이 화면은 인증 사용자에게만 보여줌
            redirect('/auth/sign-in');
            break;
        case 404: // 별을 생성하지 않은, 간편 Sign Up 만한 사용자
            redirect('/byeol/create');
            break;
        // 그 외의 케이스가 있을까?
    }

    return (
        <>
            {zaris.map(zari => <Zari key={zari.id} zariId={zari.id}/>)}
        </>
    )
}
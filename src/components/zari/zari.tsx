import Banzzack from "@/components/banzzack/banzzack";
import {cookies} from "next/headers";
import {JWT} from "@/lib/const";
import ZariService from "@/service/zari/zari.service";
import {use} from "react";
import {OkResponseDto} from "@/service/common/dto/ok.response.dto";
import {IncludeBanzzackZariDto} from "@/service/zari/dto/include-banzzack-zari.dto";
import {NotOkResponseDto} from "@/service/common/dto/not-ok.response.dto";
import {redirect} from "next/navigation";

async function getData(id: number) {
    const jwt = cookies().get(JWT.ACCESS_TOKEN);
    const {key, fetcher} = ZariService.findById(id, jwt);
    return await fetcher(key);
}

export default function Zari({zariId: id}: { zariId: number }) {
    const response: NotOkResponseDto | OkResponseDto<IncludeBanzzackZariDto> = use(getData(id));

    let zari: IncludeBanzzackZariDto;
    switch (response.statusCode) {
        case 200: // 정상 케이스
            zari = (response as OkResponseDto<IncludeBanzzackZariDto>).data;
            break;
        case 401: // 비인증 사용자
            redirect('/sign-in');
            break;
        case 404: // 별을 생성하지 않음, 별 생성과 동시에 자리가 생성됩니다.
            redirect('/byeol/create');
            break;
    }

    // TODO, zari 객체에 대한 접근이 초기화되기전에 접근하다는 오류가 나오지만 문제 없음. 하지만 IDE 에서 오류 표시를 안 할 수 있도록 수정하기
    return (
        <div>
            <div>자리 아이디: {zari.id}</div>
            {zari?.banzzacks.map(banzzacks => <Banzzack key={banzzacks.id} banzzackId={banzzacks.id}/>)}
        </div>
    )
}
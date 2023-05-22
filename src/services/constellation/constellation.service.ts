import {API} from "@/lib/const";
import {OkResponseDto} from "@/services/common/dto/ok.response.dto";
import {NotOkResponseDto} from "@/services/common/dto/not-ok.response.dto";
import {ConstellationEntity} from "@/services/constellation/entities/constellation.entity";

export default class ConstellationService {
    static async findByAUI(IAU: string) {
        let init: RequestInit = {
            method: 'GET',
            credentials: 'include', // 이 옵션이 크로스 브라우징에도 쿠키를 전송.
        }

        const response = await fetch(`${API.BASE_URL}/constellation/${IAU}`, init);
        const responseJson: OkResponseDto<ConstellationEntity> | NotOkResponseDto = await response.json();

        return {response, responseJson}
    }
}
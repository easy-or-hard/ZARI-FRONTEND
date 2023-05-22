import {API} from "@/lib/const";
import {OkResponseDto} from "@/service/common/dto/ok.response.dto";
import {IncludeBanzzackZariDto} from "@/service/zari/dto/include-banzzack-zari.dto";
import {NotOkResponseDto} from "@/service/common/dto/not-ok.response.dto";

export default class ZariService {
    static async findById(id: number) {
        let init: RequestInit = {
            method: 'GET',
            credentials: 'include',
        }

        const response = await fetch(`${API.BASE_URL}/zari/${id}`, init);
        const responseJson: OkResponseDto<IncludeBanzzackZariDto> | NotOkResponseDto = await response.json();

        return {response, responseJson}
    }
}
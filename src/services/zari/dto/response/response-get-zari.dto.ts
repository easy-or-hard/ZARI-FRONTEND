import {NotOkResponseDto} from "@/services/common/dto/not-ok.response.dto";
import {IncludeBanzzackZariDto} from "@/services/zari/dto/include-banzzack-zari.dto";


export type ResponseGetZariDto = NotOkResponseDto & {
    data: IncludeBanzzackZariDto;
}
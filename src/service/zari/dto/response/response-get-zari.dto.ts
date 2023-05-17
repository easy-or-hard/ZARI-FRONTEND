import {NotOkResponseDto} from "@/service/common/dto/not-ok.response.dto";
import {IncludeBanzzackZariDto} from "@/service/zari/dto/include-banzzack-zari.dto";


export type ResponseGetZariDto = NotOkResponseDto & {
    data: IncludeBanzzackZariDto;
}
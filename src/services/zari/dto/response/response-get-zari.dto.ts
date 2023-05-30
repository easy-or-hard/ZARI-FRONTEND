import {NotOkResponseDto} from "@/services/common/dto/not-ok.response.dto";
import {IncludeConstellationByeolBanzzackZariDto} from "@/services/zari/dto/include-constellation-byeol-banzzack-zari.dto";


export type ResponseGetZariDto = NotOkResponseDto & {
    data: IncludeConstellationByeolBanzzackZariDto;
}
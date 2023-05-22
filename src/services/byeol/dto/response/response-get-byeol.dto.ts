import {NotOkResponseDto} from "@/services/common/dto/not-ok.response.dto";
import {IncludeZariByeolDto} from "@/services/byeol/dto/include-zari-byeol.dto";

export type ResponseGetByeolDto = NotOkResponseDto & {
    data: IncludeZariByeolDto;
}
import {NotOkResponseDto} from "@/service/common/dto/not-ok.response.dto";
import {IncludeZariByeolDto} from "@/service/byeol/dto/include-zari-byeol.dto";

export type ResponseGetByeolDto = NotOkResponseDto & {
    data: IncludeZariByeolDto;
}
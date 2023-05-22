import {NotOkResponseDto} from "@/services/common/dto/not-ok.response.dto";
import {BanzzackEntity} from "@/services/banzzack/entities/banzzack.entity";

export type ResponseGetBanzzackDto = NotOkResponseDto & {
    data: BanzzackEntity;
}
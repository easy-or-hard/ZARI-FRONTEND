import {NotOkResponseDto} from "@/service/common/dto/not-ok.response.dto";
import {BanzzackEntity} from "@/service/banzzack/entities/banzzack.entity";

export type ResponseGetBanzzackDto = NotOkResponseDto & {
    data: BanzzackEntity;
}
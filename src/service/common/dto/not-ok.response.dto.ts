import {BaseResponseDto} from "@/service/common/dto/base.response.dto";

export type NotOkResponseDto = BaseResponseDto & {
    error: string;
}

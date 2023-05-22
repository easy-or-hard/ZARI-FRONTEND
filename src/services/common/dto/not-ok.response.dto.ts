import {BaseResponseDto} from "@/services/common/dto/base.response.dto";

export type NotOkResponseDto = BaseResponseDto & {
    error: string;
}

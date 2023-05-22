import {BaseResponseDto} from "@/services/common/dto/base.response.dto";

export type OkResponseDto<T> = BaseResponseDto & {
    data: T;
}
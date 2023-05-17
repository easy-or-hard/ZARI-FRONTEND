import {BaseResponseDto} from "@/service/common/dto/base.response.dto";

export type OkResponseDto<T> = BaseResponseDto & {
    data: T;
}
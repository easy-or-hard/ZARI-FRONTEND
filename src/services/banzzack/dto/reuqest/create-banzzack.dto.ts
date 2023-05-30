import { BaseResponseDto } from "@/services/common/dto/base.response.dto";

export type CreateBanzzackDto = BaseResponseDto & {
  content: string;
  starNumber: number;
  zariId: number;
};

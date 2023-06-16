import { ZariEntity } from "@/services/zari/entities/zari.entity";

type OmitZariEntity = Omit<ZariEntity, "banzzacks" | "constellation">;

/**
 * Model Byeol
 *
 */
export type ByeolEntity = {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  isActivate: boolean;
  zaris: OmitZariEntity[];
};

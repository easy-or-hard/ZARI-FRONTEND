import { ZariOmitEntity } from "@/services/zari/entities/zari.entity";

export type ByeolUniqueKey = [name: ByeolEntity["name"]];

export type ByeolTreeUniqueKey = [name: ByeolEntity["name"]];

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
  zaris: ZariOmitEntity[];
};

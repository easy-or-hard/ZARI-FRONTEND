import { BanzzackEntity } from "@/services/banzzack/entities/banzzack.entity";
import { ConstellationEntity } from "@/services/constellation/entities/constellation.entity";

/**
 * Model ZariPreview
 *
 */
export type ZariEntity = {
  id: number;
  constellationIAU: string;
  byeolId: number;
  createdAt: Date;
  updatedAt: Date;
  isPublic: boolean;
  banzzacks: BanzzackEntity[];
  constellation: ConstellationEntity;
};

import { ZariEntity } from "@/services/zari/entities/zari.entity";
import { ByeolEntity } from "@/services/byeol/entities/byeol.entity";

// 단독으로 찾을때 필요한 유니크 키
export type BanzzackUniqueKey = [
  zariId: BanzzackEntity["zariId"],
  starNumber: BanzzackEntity["starNumber"]
];

// 리소스 접근시 필요한 트리 유니크 키
export type BanzzackTreeUniqueKey = [
  name: ByeolEntity["name"],
  constellationIAU: ZariEntity["constellationIAU"],
  starNumber: BanzzackEntity["starNumber"]
];

/**
 * Model Banzzack
 *
 */
export type BanzzackEntity = {
  id: number;
  content: string;
  byeolId: number;
  byeolName: string;
  zariId: number;
  starNumber: number;
  createdAt: Date;
  updatedAt: Date;
};

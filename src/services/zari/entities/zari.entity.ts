import { BanzzackUniqueKey } from "@/services/banzzack/entities/banzzack.entity";
import { ConstellationUniqueKey } from "@/services/constellation/entities/constellation.entity";
import { ByeolEntity } from "@/services/byeol/entities/byeol.entity";

// 단독으로 찾을때 필요한 유니크 키
export type ZariUniqueKey = [
  byeolId: ZariEntity["byeolId"],
  constellationIAU: ZariEntity["constellationIAU"]
];

// 리소스 접근시 필요한 트리 유니크 키
export type ZariTreeUniqueKey = [
  name: ByeolEntity["name"],
  constellationIAU: ZariEntity["constellationIAU"]
];

// 자식 요소를 뺀 ZariEntity
export type ZariOmitEntity = Omit<ZariEntity, "banzzacks" | "constellation">;

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
  banzzacks: BanzzackUniqueKey[];
  constellation: ConstellationUniqueKey;
};

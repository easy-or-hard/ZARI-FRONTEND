import { ZariEntity } from "@/services/zari/entities/zari.entity";
import { BanzzackEntity } from "@/services/banzzack/entities/banzzack.entity";
import { ConstellationEntity } from "@/services/constellation/entities/constellation.entity";
import { ByeolEntity } from "@/services/byeol/entities/byeol.entity";

export type IncludeConstellationByeolBanzzackZariDto = ZariEntity & {
  constellation: ConstellationEntity;
  byeol: ByeolEntity;
  banzzacks: BanzzackEntity[];
};

import {ZariEntity} from "@/services/zari/entities/zari.entity";
import {BanzzackEntity} from "@/services/banzzack/entities/banzzack.entity";

export type IncludeBanzzackZariDto = ZariEntity & {
  banzzacks: BanzzackEntity[];
}
import {ZariEntity} from "@/service/zari/entities/zari.entity";
import {BanzzackEntity} from "@/service/banzzack/entities/banzzack.entity";

export type IncludeBanzzackZariDto = ZariEntity & {
  banzzacks: BanzzackEntity[];
}
import {ZariEntity} from "@/service/zari/entities/zari.entity";
import {ByeolEntity} from "@/service/byeol/entities/byeol.entity";

export type IncludeZariByeolDto = ByeolEntity & {
  zaris: ZariEntity[];
}
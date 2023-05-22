import {ZariEntity} from "@/services/zari/entities/zari.entity";
import {ByeolEntity} from "@/services/byeol/entities/byeol.entity";

export type IncludeZariByeolDto = ByeolEntity & {
  zaris: ZariEntity[];
}
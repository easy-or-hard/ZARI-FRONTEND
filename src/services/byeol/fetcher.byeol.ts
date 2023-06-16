import { baseFetcher, baseFetcherOptions } from "@/services/common/fetcher";
import { getByeolUrl, getMyByeolUrl } from "@/services/byeol/api.byeol";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { ByeolEntity } from "@/services/byeol/entities/byeol.entity";
import { ZariEntity } from "@/services/zari/entities/zari.entity";

type zariUnique = Pick<ZariEntity, "id" | "constellationIAU">;
type ByeolIncludeZaris = ByeolEntity & { zaris: zariUnique[] };

export async function getByeol(name: string, accessToken?: RequestCookie) {
  return baseFetcher<ByeolIncludeZaris>(getByeolUrl([name]), {
    ...baseFetcherOptions("GET", accessToken),
  });
}

export async function getMyByeol(accessToken?: RequestCookie) {
  return baseFetcher<ByeolIncludeZaris>(getMyByeolUrl(), {
    ...baseFetcherOptions("GET", accessToken),
  });
}

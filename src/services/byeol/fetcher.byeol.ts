import { baseFetcher, baseFetcherOptions } from "@/services/common/fetcher";
import { getByeolUrl, getMyByeolUrl } from "@/services/byeol/api.byeol";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { ByeolEntity } from "@/services/byeol/entities/byeol.entity";

export async function getByeol(name: string, accessToken?: RequestCookie) {
  return baseFetcher<ByeolEntity>(getByeolUrl([name]), {
    ...baseFetcherOptions("GET", accessToken),
  });
}

export async function getMyByeol(accessToken?: RequestCookie) {
  return baseFetcher<ByeolEntity>(getMyByeolUrl(), {
    ...baseFetcherOptions("GET", accessToken),
  });
}

import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { IS_BYEOL_URL } from "@/services/byeol/api.byeol";
import { baseFetcher, baseFetcherOptions } from "@/services/common/fetcher";

export async function fetcherIsByeol(authToken: RequestCookie) {
  return baseFetcher(IS_BYEOL_URL, { ...baseFetcherOptions("GET", authToken) });
}

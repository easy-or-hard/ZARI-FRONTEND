import { getZariUrl, ZariUniqueKey } from "@/services/byeol/api.byeol";
import useSWR from "swr";
import { baseFetcher, ZariError } from "@/services/common/fetcher";
import useSWRMutation from "swr/mutation";
import { ZariEntity } from "@/services/zari/entities/zari.entity";

export function useZari(key: ZariUniqueKey) {
  return useSWR(key, (key) => {
    const url = getZariUrl(key);
    return baseFetcher<ZariEntity>(url);
  });
}

export function usePostZari(key: [string, string]) {
  return useSWRMutation<ZariEntity, ZariError, [string, string]>(key, (key) => {
    const url = getZariUrl(key);
    return baseFetcher<ZariEntity>(url, {
      method: "POST",
    });
  });
}

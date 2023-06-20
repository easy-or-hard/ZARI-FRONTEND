import { getZariUrl } from "@/services/byeol/api.byeol";
import useSWR from "swr";
import { baseFetcher, ZariError } from "@/services/common/fetcher";
import useSWRMutation from "swr/mutation";
import {
  ZariEntity,
  ZariTreeUniqueKey,
} from "@/services/zari/entities/zari.entity";

export function useZari(key: ZariTreeUniqueKey) {
  return useSWR(key, (key) => {
    const url = getZariUrl(key);
    return baseFetcher<ZariEntity>(url);
  });
}

export function usePostZari(key: ZariTreeUniqueKey) {
  return useSWRMutation<ZariEntity, ZariError, [string, string]>(
    key,
    (key) => {
      const url = getZariUrl(key);
      return baseFetcher<ZariEntity>(url, {
        method: "POST",
      });
    },
    {
      // onSuccess: (data) => {
      //   mutate(getZariUrl(key), , false);
      // },
    }
  );
}

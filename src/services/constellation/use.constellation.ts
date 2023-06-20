import useSWR from "swr";
import {
  ConstellationEntity,
  ConstellationUniqueKey,
} from "@/services/constellation/entities/constellation.entity";
import { baseFetcher } from "@/services/common/fetcher";
import { getConstellationUrl } from "@/services/byeol/api.byeol";

export function useConstellation(key: ConstellationUniqueKey) {
  return useSWR(key, (key) => {
    const url = getConstellationUrl(key);
    return baseFetcher<ConstellationEntity>(url);
  });
}

import useSWR from "swr";
import { baseFetcher, baseFetcherOptions } from "@/services/common/fetcher";
import { IncludeConstellationByeolBanzzackZariDto } from "@/services/zari/dto/include-constellation-byeol-banzzack-zari.dto";
import apiZari from "@/services/zari/api.zari";

/**
 * @description zari 목록을 조회합니다.
 * @param {number} id
 * @return {SWRResponse} SWRResponse 를 반환합니다.
 */
export default function useZari(id: number) {
  const url = apiZari.url(id);

  const { data, isLoading, error, isValidating, mutate } = useSWR(
    url,
    (url: string) =>
      baseFetcher<IncludeConstellationByeolBanzzackZariDto>(
        url,
        baseFetcherOptions("GET")
      )
  );

  return {
    data,
    isLoading,
    error,
    isValidating,
    mutate,
  };
}

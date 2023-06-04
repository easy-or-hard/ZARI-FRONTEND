import useSWR from "swr";
import { baseFetcher, baseFetcherOptions } from "@/services/common/fetcher";
import apiByeol from "@/services/byeol/api.byeol";

export default function useIsNameAvailableByeol(name: string) {
  const key = name
    ? `${apiByeol.defaultUrl}/is-name-available?name=${name}`
    : undefined;

  const byeolFetcher = (url: string) => {
    return baseFetcher<Boolean>(url, baseFetcherOptions("GET"));
  };

  return useSWR(key, byeolFetcher);
}

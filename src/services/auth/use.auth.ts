import useSWR, { SWRConfiguration } from "swr";
import { baseFetcher } from "@/services/common/fetcher";
import { IS_BYEOL_URL, IS_USER_URL } from "@/services/byeol/api.byeol";

export const useIsByeol = () => {
  const options: SWRConfiguration = {
    refreshWhenHidden: true,
    refreshInterval: 500,
  };
  return useSWR(IS_BYEOL_URL, baseFetcher<boolean>, options);
};

export const useIsUser = () => {
  const options: SWRConfiguration = {
    // refreshWhenHidden: true,
    // refreshInterval: 500,
  };
  return useSWR(IS_USER_URL, baseFetcher<boolean>, options);
};

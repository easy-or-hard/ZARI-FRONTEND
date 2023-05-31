import useSWR, { SWRConfiguration } from "swr";
import authFetcher from "@/services/auth/auth.fetcher";

/**
 * @description 별 사용자인지 확인합니다.
 * @param {boolean} isUser api 초기 호출 방지를 위한 파라미터 입니다. 초기 정지를 원하면 false 를 넣으면 됩니다.
 * @return { SWRResponse } SWRResponse 를 반환합니다.
 */
export const useIsByeol = (isUser = true) => {
  const { key, fetcher } = authFetcher.isByeol();
  const swrOptions: SWRConfiguration = {
    revalidateOnMount: true,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    refreshInterval: 1000, //  1 sec
  };
  return useSWR(isUser ? key : "", fetcher, swrOptions);
};

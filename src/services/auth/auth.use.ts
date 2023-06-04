import useSWR, { mutate, SWRConfiguration } from "swr";
import authFetcher from "@/services/auth/auth.fetcher";
import { API } from "@/const";
import { useCallback } from "react";
import { baseFetcher, baseFetcherOptions } from "@/services/common/fetcher";

/**
 * @description 별 사용자인지 확인합니다.
 * @return { SWRResponse } SWRResponse 를 반환합니다.
 */
export const useIsByeol = () => {
  const swrOptions: SWRConfiguration = {
    revalidateOnMount: true,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    refreshWhenHidden: true,
    refreshInterval: 1000, //  1 sec
  };
  return useSWR(
    `${API.BASE_URL}/auth/is-byeol`,
    (url) => baseFetcher<Boolean>(url, baseFetcherOptions("GET")),
    swrOptions
  );
};

export const useSignOut = () => {
  const signOut = useCallback(async () => {
    const { key, fetcher } = authFetcher.signOut();
    const { data: isSignedOut } = await fetcher(key);
    if (isSignedOut) {
      mutate(`${API.BASE_URL}/auth/is-user`, undefined, { revalidate: false });
      mutate(`${API.BASE_URL}/auth/is-byeol`, undefined, { revalidate: false });
      mutate(`${API.BASE_URL}/byeol/me`, undefined, { revalidate: false });
    }
  }, []);

  return signOut;
};

import useSWR, { mutate, SWRConfiguration } from "swr";
import authFetcher from "@/services/auth/auth.fetcher";
import { API } from "@/const";
import { baseFetcher, baseFetcherOptions } from "@/services/common/fetcher";

export const useIsUser = () => {
  const swrOptions: SWRConfiguration = {
    revalidateOnMount: true,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    refreshWhenHidden: true,
  };
  return useSWR(
    `${API.BASE_URL}/auth/is-user`,
    (url) => baseFetcher<Boolean>(url, baseFetcherOptions("GET")),
    swrOptions
  );
};

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
  };
  return useSWR(
    `${API.BASE_URL}/auth/is-byeol`,
    (url) => baseFetcher<Boolean>(url, baseFetcherOptions("GET")),
    swrOptions
  );
};

export const signOut = async () => {
  const { key, fetcher } = authFetcher.signOut();
  const { data: isSignedOut } = await fetcher(key);
  if (isSignedOut) {
    mutate(`${API.BASE_URL}/auth/is-user`, undefined, { revalidate: false });
    mutate(`${API.BASE_URL}/auth/is-byeol`, undefined, { revalidate: false });
    mutate(`${API.BASE_URL}/byeol/me`, undefined, { revalidate: false });
  }
};

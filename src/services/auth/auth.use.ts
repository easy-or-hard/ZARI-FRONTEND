import useSWR, { mutate, SWRConfiguration } from "swr";
import authFetcher from "@/services/auth/auth.fetcher";
import { API } from "@/const";
import { useCallback } from "react";

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
    refreshWhenHidden: true,
    refreshInterval: 1000, //  1 sec
  };
  return useSWR(isUser ? key : "", fetcher, swrOptions);
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

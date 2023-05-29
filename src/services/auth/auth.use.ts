import useSWR from "swr";
import authFetcher from "@/services/auth/auth.fetcher";

/**
 * OAuth 인증한 상태인지 확인하기 위한 메소드 입니다.
 */
export const useIsUser = () => {
    const { key, fetcher } = authFetcher.createIsUserKeyAndFetcher();
    const swrOptions = { revalidateOnMount: true, revalidateOnFocus: true, revalidateOnReconnect: true };
    return useSWR(key, fetcher, swrOptions);
}

/**
 * 별 사용자인지 확인합니다.
 * @param {boolean} isUser api 초기 호출 방지를 위한 파라미터 입니다. 초기 정지를 원하면 false 를 넣으면 됩니다.
 */
export const useIsByeol = (isUser = true) => {
    const { key, fetcher } = authFetcher.createIsByeolKeyAndFetcher();
    const swrOptions = { revalidateOnMount: true, revalidateOnFocus: true, revalidateOnReconnect: true };
    return useSWR(isUser ? key : '', fetcher, swrOptions);
}
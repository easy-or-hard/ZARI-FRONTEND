import byeolFetcher from "@/services/byeol/byeol.fetcher";
import useSWR from "swr";

export const useByeolFindMe = () => {
    const {key, fetcher} = byeolFetcher.findMeFetcher();
    // const swrOptions = {revalidateOnMount: true, revalidateOnFocus: true, revalidateOnReconnect: true};
    return useSWR(key, fetcher);
}
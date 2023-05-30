import useSWR from "swr";
import zariFetcher from "@/services/zari/zari.fetcher";

export const useZariFindById = (id: number) => {
    const {key, fetcher} = zariFetcher.createFindByIdFetcher(id);
    // const swrOptions = {revalidateOnMount: true, revalidateOnFocus: true, revalidateOnReconnect: true};
    return useSWR(key, fetcher);
}
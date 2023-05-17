'use client'

import useSWR from "swr";
import BanzzackService from "@/service/banzzack/banzzack.service";

export default function Banzzack({banzzackId: id}: { banzzackId: number }) {
    const {key, fetcher} = BanzzackService.findById(id);
    const {data: responseBanzzackDto, isLoading} = useSWR(key, fetcher);

    return (
        <div>
            {isLoading ? "" : responseBanzzackDto?.data.content}
        </div>
    )
}
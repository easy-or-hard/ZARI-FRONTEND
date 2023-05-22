'use client'

import ByeolService from "@/services/byeol/byeol.service";
import {useRouter} from "next/navigation";
import useSWR from "swr";
import ZariPreview from "@/components/zari/zariPreview";

const {key, fetcher} = ByeolService.getMeFetcher();

export default function MePage() {
    const router = useRouter();
    const {data: response, isLoading, error} = useSWR(key, fetcher);

    if (error) {
        console.error('error', error);
        router.replace('/auth/sign-in');
    } else if (isLoading) {
        console.info('isLoading', isLoading);
        return (<>is Loading</>);
    }

    return (
        <>
            {response?.data.zaris.map(zari => <ZariPreview key={zari.id} zariId={zari.id}/>)}
        </>
    )
}
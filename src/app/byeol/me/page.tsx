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

    if (isLoading) {
        return (
            <div className={'h-full grid place-items-center'}>
            <span className={'animate-pulse'}>
                아직 디자인 되지 않음.
            </span>
            </div>
        )
    }

    return (
        <>별에 자리가 여러개라면 여러 자리를 표현하고 싶습니다...</>
    )
}
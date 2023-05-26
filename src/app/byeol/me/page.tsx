'use client'

import ByeolService from "@/services/byeol/byeol.service";
import {useRouter} from "next/navigation";
import useSWR from "swr";
import {useEffect} from "react";
import {ZariError} from "@/services/common/fetcher";

const {key, fetcher} = ByeolService.findMeFetcher();
export default function MePage() {
    const router = useRouter();
    const {error, data, isLoading} = useSWR(key, fetcher);

    useEffect(() => {
        if (error) {
            if (error instanceof ZariError) {
                switch (error.statusCode) {
                    case 401:
                        router.replace('/auth/sign-in');
                        break;
                    case 404:
                        router.replace('/byeol/create');
                }
            } else {
                // TODO, 예외 에러에 대해서 어떻게 처리할까?
                console.error(error);
                throw error;
            }
        } else if (data) {
            const IncludeZariByeolDto = data.data
            if (IncludeZariByeolDto.zaris.length === 1) {
                const responseData = IncludeZariByeolDto.zaris[0];
                router.replace(`/byeol/${responseData.byeolId}`);
            }
        }
    }, [data, error])

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
'use client'

import {useRouter} from "next/navigation";
import {useEffect} from "react";
import {ZariError} from "@/services/common/fetcher";
import {useByeolFindMe} from "@/services/byeol/byeol.use";
import {useIsByeol} from "@/services/auth/auth.use";

export default function MePage() {
    const router = useRouter();
    const {data: okResponseIsByeol, isLoading: isLoadingIsByeol, error: errorIsByeol} = useIsByeol();
    const {
        data: okResponseIncludeZariByeolDto,
        isLoading: isLoadingIncludeZariByeol,
        error: errorIncludeZariByeol
    } = useByeolFindMe();

    useEffect(() => {
        if (errorIsByeol) {
            if (errorIsByeol instanceof ZariError) {
                if (errorIsByeol.statusCode === 401) {
                    router.push('/auth/sign-in');
                }
            } else {
                // TODO, 예외 에러에 대해서 어떻게 처리할까?
                console.error(errorIsByeol);
                throw errorIsByeol;
            }
        }
    }, [errorIsByeol]);

    return (
        <>
            {/* TODO, 테스트 코드 */}
            {okResponseIncludeZariByeolDto?.data.zaris.map(zari => (
                <div key={zari.id}>{zari.id}</div>))
                // <Zari key={zari.id} params={zari.id}/>))
            }
        </>
    )
}
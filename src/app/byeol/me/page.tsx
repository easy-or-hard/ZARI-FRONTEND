'use client'

import {useByeolFindMe} from "@/services/byeol/byeol.use";

export default function MePage() {
    const {
        data: okResponseIncludeZariByeolDto,
        isLoading: isLoadingIncludeZariByeol,
        error: errorIncludeZariByeol
    } = useByeolFindMe();

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
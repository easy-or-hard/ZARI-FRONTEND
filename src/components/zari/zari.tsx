import zariFetcher from "@/services/zari/zari.fetcher";
import {notFound} from "next/navigation";
import byeolFetcher from "@/services/byeol/byeol.fetcher";
import constellation from "@/services/constellation/constellation.fetcher";
import Constellation from "@/components/constellation/constellation";
import {ZariError} from "@/services/common/fetcher";

type Props = {
    params: {
        id: number;
    }
}

async function zariFindById(zariId: number) {
    const {key, fetcher} = zariFetcher.createFindByIdFetcher(zariId);
    try {
        const {data} = await fetcher(key);
        return data
    } catch (error) {
        if (error instanceof ZariError) {
            notFound(); // 현재 컴포넌트 렌더링 종료
        } else {
            console.error('예상하지 못한 에러');
            throw error;
        }
    }
}

async function byeolFindById(byeolId: number) {
    const {key, fetcher} = byeolFetcher.findByIdFetcher(byeolId);

    try {
        const responseJson = await fetcher(key);
        return responseJson.data;
    } catch (error) {
        if (error instanceof Error) {
            notFound(); // 현재 컴포넌트 렌더링 종료
        } else {
            console.error('예상하지 못한 에러');
            throw error;
        }
    }
}

async function constellationFindByIAU(IAU: string) {
    const {key, fetcher} = constellation.createFindByIAUFetcher(IAU);
    try {
        const {data: constellationEntity} = await fetcher(key);
        return constellationEntity;
    } catch (error) {
        if (error instanceof ZariError) {
            notFound(); // 현재 컴포넌트 렌더링 종료
        } else {
            console.error('예상하지 못한 에러');
            throw error;
        }
    }
}

export default async function Zari({params: {id}}: Props) {
    // 자리 찾기
    const includeBanzzackZari = await zariFindById(id);

    // 별 찾기, 별자리 찾기
    const [includeZariByeol, constellation] = await Promise.all([
        byeolFindById(includeBanzzackZari.byeolId),
        constellationFindByIAU(includeBanzzackZari.constellationIAU)
    ]);

    return (
        <div className="h-full p-4 flex flex-col items-center">
            <div className={'p-4 flex flex-col justify-around items-center'}>
                <div className="font-bold text-center text-5xl">
                    {includeZariByeol.name}
                </div>
                <div className="font-medium text-center">
                    {constellation.name} 자리
                </div>
            </div>

            <Constellation includeBanzzackZariDto={includeBanzzackZari} byeolName={includeZariByeol.name}/>
        </div>
    )
}

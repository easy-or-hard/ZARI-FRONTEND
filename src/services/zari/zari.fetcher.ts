import {API} from "@/lib/const";
import {OkResponseDto} from "@/services/common/dto/ok.response.dto";
import fetcher from "@/services/common/fetcher";
import {IncludeBanzzackZariDto} from "@/services/zari/dto/include-banzzack-zari.dto";

const createFindByIdFetcher = (id: number) => {
    const key = `${API.BASE_URL}/zari/${id}`;
    const init = fetcher.createRequestOptions('GET')

    return fetcher.create<OkResponseDto<IncludeBanzzackZariDto>>({key, init});
}

const zariFetcher = {
    createFindByIdFetcher: createFindByIdFetcher,
}

export default zariFetcher;
import {RequestCookie} from "next/dist/compiled/@edge-runtime/cookies";
import {API} from "@/lib/const";
import {ByeolCreateDto} from "@/services/byeol/dto/reuqest/create-byeol.dto";
import {IncludeZariByeolDto} from "@/services/byeol/dto/include-zari-byeol.dto";
import fetcher from "@/services/common/fetcher";
import {OkResponseDto} from "@/services/common/dto/ok.response.dto";
import {BaseResponseDto} from "@/services/common/dto/base.response.dto";


/**
 * 유저의 별을 생성합니다.
 * @param {ByeolCreateDto | FormData} createData 타입은 다르지만 내부의 구조는 같아야합니다.
 * @param {RequestCookie} accessToken 서버에서 호출할 경우에는 쿠키가 필요합니다.
 */
const createFetcher = (createData: ByeolCreateDto | FormData, accessToken?: RequestCookie) => {
    const url = `${API.BASE_URL}/byeol`;
    const init = fetcher.createRequestOptions('POST', accessToken)

    if (createData instanceof FormData) {
        init.body = createData;
    } else {
        init.body = JSON.stringify(createData);
        Object.assign(init, {
            headers: {
                'Content-Type': 'application/json',
                },
            });
        }

    return fetcher.create<BaseResponseDto>({key: url, init});
    }

/**
 * 별 이름을 검증합니다.
 * @param name
 */
const isNameAvailableFetcher = (name: string) => {
    const url = `${API.BASE_URL}/byeol/is-name-available/${name}`;
    let init = fetcher.createRequestOptions('GET');

    return fetcher.create<BaseResponseDto>({key: url, init});
}

const findByIdFetcher = (id: number) => {
    const url = `${API.BASE_URL}/byeol/${id}`;
    let init = fetcher.createRequestOptions('GET');

    return fetcher.create<OkResponseDto<IncludeZariByeolDto>>({key: url, init});
}

/**
 * 나의 별 정보를 가져옵니다.
 * @param accessToken
 * @throws {ZariError} response.ok 가 false 일 경우 에러를 던집니다.
 * @returns {Object} key, fetcher 가 담긴 객체를 반환합니다.
 */
const findMeFetcher = (accessToken?: RequestCookie | undefined) => {
    const url = `${API.BASE_URL}/byeol/me`;
    let init = fetcher.createRequestOptions('GET', accessToken);

    return fetcher.create<OkResponseDto<IncludeZariByeolDto>>({key: url, init});
}

const byeolFetcher = {
    createFetcher,
    isNameAvailableFetcher,
    findByIdFetcher,
    findMeFetcher,
}

export default byeolFetcher;
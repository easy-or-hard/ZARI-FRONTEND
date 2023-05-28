import {RequestCookie} from "next/dist/compiled/@edge-runtime/cookies";
import {API} from "@/lib/const";
import {ByeolCreateDto} from "@/services/byeol/dto/reuqest/create-byeol.dto";
import {IncludeZariByeolDto} from "@/services/byeol/dto/include-zari-byeol.dto";
import Fetcher from "@/services/common/fetcher";
import {OkResponseDto} from "@/services/common/dto/ok.response.dto";
import {NotOkResponseDto} from "@/services/common/dto/not-ok.response.dto";
import {BaseResponseDto} from "@/services/common/dto/base.response.dto";

export default class ByeolService {
    /**
     * 유저의 별을 생성합니다.
     * @param {ByeolCreateDto | FormData} createData 타입은 다르지만 내부의 구조는 같아야합니다.
     * @param {RequestCookie} accessToken 서버에서 호출할 경우에는 쿠키가 필요합니다.
     */
    static createFetcher(createData: ByeolCreateDto | FormData, accessToken?: RequestCookie) {
        const url = new URL(`${API.BASE_URL}/byeol`);
        let init = Fetcher.makeInit('POST', accessToken)

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

        return Fetcher.FetcherFactory<BaseResponseDto>({key: url, init});
    }

    static async isNameAvailableFetcher(name: string) {
        let init: RequestInit = {
            method: 'GET',
            credentials: 'include',
        }

        const response = await fetch(`${API.BASE_URL}/byeol/is-name-available/${name}`, init);
        const responseJson: OkResponseDto<boolean> | NotOkResponseDto = await response.json();

        return {response, responseJson}
    }

    static async findById(id: number) {
        let init: RequestInit = {
            method: 'GET',
            credentials: 'include', // 이 옵션이 크로스 브라우징에도 쿠키를 전송.
        }

        const response = await fetch(`${API.BASE_URL}/byeol/${id}`, init);
        const responseJson: OkResponseDto<IncludeZariByeolDto> | NotOkResponseDto = await response.json();

        return {response, responseJson}
    }

    /**
     * 나의 별 정보를 가져옵니다.
     * @param accessToken
     * @throws {ZariError} response.ok 가 false 일 경우 에러를 던집니다.
     * @returns {Object} key, fetcher 가 담긴 객체를 반환합니다.
     */
    static findMeFetcher(accessToken?: RequestCookie | undefined) {
        const url = new URL(`${API.BASE_URL}/byeol/me`);
        let init = Fetcher.makeInit('GET', accessToken);

        return Fetcher.FetcherFactory<OkResponseDto<IncludeZariByeolDto>>({key: url, init});
    }
}
import {RequestCookie} from "next/dist/compiled/@edge-runtime/cookies";
import {API} from "@/lib/const";
import {ByeolCreateDto} from "@/service/byeol/dto/reuqest/create-byeol.dto";
import {NotOkResponseDto} from "@/service/common/dto/not-ok.response.dto";
import {BaseResponseDto} from "@/service/common/dto/base.response.dto";
import {IncludeZariByeolDto} from "@/service/byeol/dto/include-zari-byeol.dto";
import {OkResponseDto} from "@/service/common/dto/ok.response.dto";

export default class ByeolService {
    private static get isNameAvailable() {
        return {
            path: `${API.BASE_URL}/byeol/is-name-available`,
            method: 'GET',
        };
    }

    static createFetcher(byeolCreateDto: ByeolCreateDto | FormData, accessToken?: RequestCookie | undefined) {
        let init: RequestInit = {
            method: 'POST',
            credentials: 'include',
        }

        if (byeolCreateDto instanceof FormData) {
            init.body = byeolCreateDto;
        } else {
            init.body = JSON.stringify(byeolCreateDto);
            Object.assign(init, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }

        accessToken?.value &&
        Object.assign(init, {
            headers: {
                Cookie: `access_token=${accessToken.value};`,
            },
        });

        return this.getFetcher<BaseResponseDto>({key: `${API.BASE_URL}/byeol`, init});
    }

    // 서버 렌더링시와 SWR 에서 두 곳에서 사용하기 위해서 객체를 리턴합니다.
    static isNameAvailableFetcher(name: string, accessToken?: RequestCookie | undefined) {
        let init: RequestInit = {
            method: this.isNameAvailable.method,
            credentials: 'include',
        }

        accessToken?.value &&
        Object.assign(init, {
            headers: {
                Cookie: `access_token=${accessToken.value};`,
            },
        });

        return this.getFetcher<BaseResponseDto>({key: `${API.BASE_URL}/byeol/is-name-available/${name}`, init});
    }

    static getMeFetcher(accessToken?: RequestCookie | undefined) {
        let init: RequestInit = {
            method: 'GET',
            credentials: 'include',
        }

        accessToken?.value &&
        Object.assign(init, {
            headers: {
                Cookie: `access_token=${accessToken.value};`,
            },
        });

        return this.getFetcher<OkResponseDto<IncludeZariByeolDto>>({key: `${API.BASE_URL}/byeol/me`, init});
    }

    private static getFetcher<T>({key, init}: { key: string, init: RequestInit }) {
        const fetcher = (input: string): Promise<T | NotOkResponseDto> => fetch(input, init).then((res) => res.json());

        return {key, fetcher};
    }
}
import {RequestCookie} from "next/dist/compiled/@edge-runtime/cookies";
import {API} from "@/lib/const";
import {ByeolCreateDto} from "@/service/byeol/dto/reuqest/create-byeol.dto";
import {IncludeZariByeolDto} from "@/service/byeol/dto/include-zari-byeol.dto";
import Fetcher from "@/service/common/fetcher";
import {OkResponseDto} from "@/service/common/dto/ok.response.dto";
import {NotOkResponseDto} from "@/service/common/dto/not-ok.response.dto";

export default class ByeolService {
    static async createFetcher(byeolCreateDto: ByeolCreateDto | FormData, accessToken?: RequestCookie | undefined) {
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

        const response = await fetch(`${API.BASE_URL}/byeol`, init);
        const responseJson: OkResponseDto<boolean> | NotOkResponseDto = await response.json();

        return {response, responseJson}
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

        return Fetcher.getFetcher<IncludeZariByeolDto>({key: `${API.BASE_URL}/byeol/me`, init});
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
}
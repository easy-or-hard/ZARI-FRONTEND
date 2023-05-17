import {API} from "@/lib/const";
import {RequestCookie} from "next/dist/compiled/@edge-runtime/cookies";
import {OkResponseDto} from "@/service/common/dto/ok.response.dto";
import {NotOkResponseDto} from "@/service/common/dto/not-ok.response.dto";
import {IncludeBanzzackZariDto} from "@/service/zari/dto/include-banzzack-zari.dto";

export default class ZariService {
    static findById(id: number, accessToken?: RequestCookie | undefined) {
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

        return this.getFetcher<OkResponseDto<IncludeBanzzackZariDto>>({key: `${API.BASE_URL}/zari/${id}`, init});
    }

    private static getFetcher<T>({key, init}: { key: string, init: RequestInit }) {
        const fetcher = (input: string): Promise<T | NotOkResponseDto> => fetch(input, init).then((res) => res.json());

        return {key, fetcher};
    }
}
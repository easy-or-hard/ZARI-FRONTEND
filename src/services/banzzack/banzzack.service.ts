import {API} from "@/lib/const";
import {RequestCookie} from "next/dist/compiled/@edge-runtime/cookies";
import {ResponseGetBanzzackDto} from "@/services/banzzack/dto/response/response-get-banzzack.dto";

export default class BanzzackService {
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

        return this.getFetcher({key: `${API.BASE_URL}/banzzack/${id}`, init});
    }

    private static getFetcher({key, init}: { key: string, init: RequestInit }) {
        const fetcher = (input: string): Promise<ResponseGetBanzzackDto> => fetch(input, init).then((res) => res.json());

        return {key, fetcher};
    }
}
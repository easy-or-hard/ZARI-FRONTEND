import {API} from "@/lib/const";
import {RequestCookie} from "next/dist/compiled/@edge-runtime/cookies";
import {UserEntity} from "@/services/user/entities/user.entity";
import Fetcher from "@/services/common/fetcher";
import {OkResponseDto} from "@/services/common/dto/ok.response.dto";

export default class UserService {
    /**
     * 나의 유저 정보를 가져옵니다.
     * @param accessToken
     * @throws {ZariError} response.ok 가 false 일 경우 에러를 던집니다.
     * @returns {Object} key, fetcher 가 담긴 객체를 반환합니다.
     */
    static findMeFetcher(accessToken?: RequestCookie | undefined) {
        const url = new URL(`${API.BASE_URL}/user/me`);
        const init = Fetcher.makeInit('GET', accessToken);

        return Fetcher.FetcherFactory<OkResponseDto<UserEntity>>({key: url, init});
    }
}
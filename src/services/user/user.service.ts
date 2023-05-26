import {API} from "@/lib/const";
import {RequestCookie} from "next/dist/compiled/@edge-runtime/cookies";
import {UserEntity} from "@/services/user/entities/user.entity";
import Fetcher from "@/services/common/fetcher";

export default class UserService {
    /**
     * 나의 유저 정보를 호출 합니다.
     * @param accessToken
     * @throws {ZariError} response.ok 가 false 일 경우 에러를 던집니다.
     * @returns {Object} key, fetcher 가 담긴 객체를 반환합니다.
     */
    static findMeFetcher(accessToken?: RequestCookie | undefined) {
        let init: RequestInit = {
            method: 'GET',
            credentials: 'include', // 이 옵션이 크로스 브라우징에도 쿠키를 전송.
        }

        accessToken?.value &&
        Object.assign(init, {
            headers: {
                Cookie: `access_token=${accessToken.value};`, // front 에서 bff 를 호출할 경우 브라우저가 준 쿠키 설정
            },
        });

        return Fetcher.FetcherFactory<UserEntity>({key: `${API.BASE_URL}/user/me`, init});
    }
}
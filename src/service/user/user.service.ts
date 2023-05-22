import {API} from "@/lib/const";
import {RequestCookie} from "next/dist/compiled/@edge-runtime/cookies";
import {UserEntity} from "@/service/user/entities/user.entity";
import Fetcher from "@/service/common/fetcher";

export default class UserService {
    // 서버 렌더링시와 SWR 에서 두 곳에서 사용하기 위해서 객체를 리턴합니다.
    static findMe(accessToken?: RequestCookie | undefined) {
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

        return Fetcher.getFetcher<UserEntity>({key: `${API.BASE_URL}/user/me`, init});
    }
}
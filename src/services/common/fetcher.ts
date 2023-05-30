import {NotOkResponseDto} from "@/services/common/dto/not-ok.response.dto";
import {RequestCookie} from "next/dist/compiled/@edge-runtime/cookies";
import {JWT} from "@/const";

/**
 * ZARI API 호출시 나오는 response.ok 이외의 에러를 처리하는 에러 클래스 입니다.
 */
export class ZariError extends Error {
    public statusCode: number;
    public error: string;

    constructor({statusCode, message, error}: NotOkResponseDto) {
        super(message);
        this.statusCode = statusCode;
        this.error = error;
    }
}

/**
 *
 * @param method
 * @param accessToken
 */
const createRequestOptions = (method: 'GET' | 'POST' | 'PUT' | 'DELETE', accessToken?: RequestCookie | undefined) => {
    const init: RequestInit = {
        method: method,
        credentials: 'include', // 이 옵션이 크로스 브라우징에도 쿠키를 전송.
    }

    accessToken?.value &&
    Object.assign(init, {
        headers: {
            Cookie: `${JWT.ACCESS_TOKEN}=${accessToken.value};`, // front 에서 bff 를 호출할 경우 브라우저가 준 쿠키 설정
        }
    });

    return init;
}

/**
 * 페처를 만드는 팩토리 메소드 입니다.
 * @param key http url 을 입력하세요.
 * @param init http method, credentials 등을 입력하세요.
 * @throws ZariError
 */
const create = <T>({key, init}: { key: string, init: RequestInit }) => {
    // input 타입을 의도적으로 string 타입만 썻습니다.
    // URL 로 쓰면 SWR 에서 작동하지 않습니다.
    const fetcher = async (input: string) => {
        const response = await fetch(input, init);
        const responseJson = await response.json();

        if (!response.ok) {
            throw new ZariError(responseJson);
        }

        return await responseJson as T;
    }

    return {key, fetcher};
}

const fetcher = {
    createRequestOptions,
    create,
}
export default fetcher;
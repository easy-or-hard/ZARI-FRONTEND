import {NotOkResponseDto} from "@/services/common/dto/not-ok.response.dto";
import {OkResponseDto} from "@/services/common/dto/ok.response.dto";

/**
 * ZARI API 호출시 나오는 200, 201 이외의 에러를 처리하는 에러 클래스 입니다.
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

export default class Fetcher {
    /**
     * 패쳐를 만드는 팩토리 메소드 입니다.
     * @param key http url 을 입력하세요.
     * @param init http method, credentials 등을 입력하세요.
     * @throws ZariError
     */
    static getFetcher<T>({key, init}: { key: string, init: RequestInit }) {
        const fetcher = async (input: string) => {
            const response = await fetch(input, init);
            const responseJson: OkResponseDto<T> | NotOkResponseDto = await response.json();

            if (!response.ok) {
                const NotOkResponseJson = responseJson as NotOkResponseDto;
                const errorResponse: NotOkResponseDto = {
                    statusCode: NotOkResponseJson.statusCode,
                    message: NotOkResponseJson.message,
                    error: NotOkResponseJson.error,
                };
                throw new CustomError(errorResponse);
            }

            return responseJson as OkResponseDto<T>;
        }

        return {key, fetcher};
    }

    static getResponseFetcher<T>({key, init}: { key: string, init: RequestInit }) {
        const fetcher = async (input: string) => {
            return fetch(input, init);
        }

        return {key, fetcher};
    }

    /**
     * 에러를 스로우 합니다!!!
     * @throws {ZariError } ZariError
     * @param response
     * @private
     */
    private static makeErrorAndThrow(NotOkResponseJson: NotOkResponseDto) {
        const errorResponse: NotOkResponseDto = {
            statusCode: NotOkResponseJson.statusCode,
            message: NotOkResponseJson.message,
            error: NotOkResponseJson.error,
        };
        throw new ZariError(errorResponse);
    }
}
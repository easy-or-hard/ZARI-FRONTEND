import {NotOkResponseDto} from "@/service/common/dto/not-ok.response.dto";
import {OkResponseDto} from "@/service/common/dto/ok.response.dto";

class CustomError extends Error {
    public statusCode: number;
    public error: string;
    constructor({statusCode, message, error}: NotOkResponseDto) {
        super(message);
        this.statusCode = statusCode;
        this.error = error;
    }
}

export default class Fetcher {
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

            return responseJson as T;
        }

        return {key, fetcher};
    }

    static getResponseFetcher<T>({key, init}: { key: string, init: RequestInit }) {
        const fetcher = async (input: string) => {
            return fetch(input, init);
        }

        return {key, fetcher};
    }
}
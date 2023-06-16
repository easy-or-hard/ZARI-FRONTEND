import { NotOkResponseDto } from "@/services/common/dto/not-ok.response.dto";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { JWT } from "@/const";

/**
 * ZARI API 호출시 나오는 response.ok 이외의 에러를 처리하는 에러 클래스 입니다.
 */
export class ZariError extends Error {
  public statusCode: number;
  public error: string;

  constructor({ statusCode, message, error }: NotOkResponseDto) {
    super(message);
    this.statusCode = statusCode;
    this.error = error;
  }
}

export const baseFetcher = async <T>(
  url: RequestInfo | string,
  init?: RequestInit
) => {
  let response;

  try {
    response = await fetch(url, {
      ...baseFetcherOptions("GET"),
      ...init,
    });
  } catch (error) {
    // 네트워크 오류
    throw error;
  }

  const responseJson = await response.json();
  if (!response.ok) {
    throw new ZariError(responseJson);
  }

  return responseJson as T;
};

export const baseFetcherOptions = (
  method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE",
  accessToken?: RequestCookie
): RequestInit => {
  const init: RequestInit = {
    method,
    credentials: "include",
  };

  if (accessToken) {
    init.headers = {
      Cookie: `${JWT.ACCESS_TOKEN}=${accessToken.value};`,
    };
  }

  return init;
};

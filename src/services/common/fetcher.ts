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
    // TODO, 네트워크 오류 에 대해서 처리하기
    throw error;
  }

  try {
    const responseJson = await response.json();
    if (!response.ok) {
      throw new ZariError(responseJson);
    }
    return responseJson as T;
  } catch (error) {
    // TODO 바디가 없을 경우에 대해서는 어떻게 처리할지 고민하기
  }
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

  if (method === "POST" || method === "PATCH" || method === "PUT") {
    init.headers = {
      ...init.headers,
      "Content-Type": "application/json",
    };
  }

  return init;
};

// TODO, 빌드시 디폴트가 필요해서 만든 의밍 없는 함수, 나중에 지우기
export default function fetchers() {}

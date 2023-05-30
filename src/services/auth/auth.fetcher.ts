import { API } from "@/const";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import fetcher from "@/services/common/fetcher";
import { OkResponseDto } from "@/services/common/dto/ok.response.dto";

/**
 * OAuth 인증한 상태인지 확인하기 위한 메소드 입니다.
 * @throws {ZariError} response.ok 가 false 일 경우 에러를 던집니다.
 * @returns {Object} key, fetcher 가 담긴 객체를 반환합니다.
 */
const isUser = () => {
  const url = `${API.BASE_URL}/auth/is-user`;
  const init = fetcher.createRequestOptions("GET");

  return fetcher.create<OkResponseDto<boolean>>({ key: url, init });
};

/**
 * ZARI 서비스를 사용할 수 있는 상태(별) 인지 확인합니다
 * @param accessToken
 */
const isByeol = (accessToken?: RequestCookie) => {
  const url = `${API.BASE_URL}/auth/is-byeol`;
  const init = fetcher.createRequestOptions("GET", accessToken);

  return fetcher.create<OkResponseDto<boolean>>({ key: url, init });
};

const authFetcher = {
  isUser,
  isByeol,
};
export default authFetcher;

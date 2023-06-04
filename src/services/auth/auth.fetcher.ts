import { API } from "@/const";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import fetcher, {
  baseFetcher,
  baseFetcherOptions,
} from "@/services/common/fetcher";
import { OkResponseDto } from "@/services/common/dto/ok.response.dto";

/**
 * @description OAuth 인증한 상태인지 확인하기 위한 메소드 입니다.
 * @param {RequestCookie} accessToken
 * @throws {ZariError} response.ok 가 false 일 경우 에러를 던집니다.
 * @return {Object} key, fetcher 가 담긴 객체를 반환합니다.
 */
const isUser = (accessToken?: RequestCookie) => {
  const url = `${API.BASE_URL}/auth/is-user`;
  return baseFetcher<Boolean>(url, baseFetcherOptions("GET", accessToken));
};

/**
 * ZARI 서비스를 사용할 수 있는 상태(별) 인지 확인합니다
 * @param {RequestCookie} accessToken
 * @return {Object} key, fetcher 가 담긴 객체를 반환합니다.
 */
const isByeol = (accessToken?: RequestCookie) => {
  const url = `${API.BASE_URL}/auth/is-byeol`;
  return baseFetcher<Boolean>(url, baseFetcherOptions("GET", accessToken));
};

const signOut = () => {
  const url = `${API.BASE_URL}/auth/sign-out`;
  const init = fetcher.createRequestOptions("GET");

  return fetcher.create<OkResponseDto<boolean>>({ key: url, init });
};

const authFetcher = {
  isUser,
  isByeol,
  signOut,
};
export default authFetcher;

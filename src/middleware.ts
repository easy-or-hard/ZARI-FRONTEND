import { NextRequest, NextResponse } from "next/server";
import authFetcher from "@/services/auth/auth.fetcher";
import { JWT } from "@/const";

/**
 * 매칭할 경로를 설정합니다.
 */
export const config = {
  matcher: ["/byeol/me"],
};

/**
 * @function middleware
 * @description 화면 진입시 인증이 필요한 페이지에 대해 인증을 진행합니다.
 * 컴포넌트가 인증이 필요하다면 인증 기능을 컴포넌트에 명시해야 합니다.
 * @param {NextRequest} request - next.js의 요청 객체
 * @return {Promise} - 인증 결과에 따라 다른 응답을 반환합니다.
 */
export async function middleware(request: NextRequest) {
  const jwt = request.cookies.get(`${JWT.ACCESS_TOKEN}`);

  let url;

  switch (request.nextUrl.pathname) {
    case "/byeol/me":
      try {
        const isByeol = await authFetcher.isByeol(jwt);
        url = isByeol ? null : "/";
      } catch (e) {
        url = "/";
      }
      break;
    default:
      return NextResponse.next();
  }

  return url
    ? NextResponse.redirect(new URL(url, request.nextUrl.origin))
    : NextResponse.next();
}

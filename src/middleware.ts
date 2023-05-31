import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import authFetcher from "@/services/auth/auth.fetcher";
import { JWT } from "@/const";

/**
 * 매칭할 경로를 설정합니다.
 */
export const config = {
  matcher: ["/auth/sign-in", "/byeol/create", "/byeol/me"],
};

/**
 * 화면 진입시 인증이 필요한 페이지에 대해서 인증을 진행합니다.
 * 컴포넌트가 인증이 필요하다면 인증 기능을 컴포넌트에 명시하십시오.
 * @param {NextRequest} request
 */
export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/auth/sign-in")) {
    const jwt = request.cookies.get(`${JWT.ACCESS_TOKEN}`);
    if (!jwt) {
      return NextResponse.next();
    }

    const { key, fetcher } = authFetcher.isUser(jwt);
    const { data: isUser } = await fetcher(key);
    if (isUser) {
      const { key, fetcher } = authFetcher.isByeol(jwt);
      const { data: isByeol } = await fetcher(key);
      if (!isByeol) {
        return NextResponse.redirect(
          new URL("/byeol/create", request.nextUrl.origin)
        );
      } else {
        return NextResponse.redirect(
          new URL("/byeol/me", request.nextUrl.origin)
        );
      }
    }
  } else if (request.nextUrl.pathname.startsWith("/byeol/create")) {
    const { key, fetcher } = authFetcher.isUser();
    const { data: isUser } = await fetcher(key);
    if (!isUser) {
      return NextResponse.redirect(new URL("/", request.nextUrl.origin));
    }
  } else if (request.nextUrl.pathname.startsWith("/byeol/me")) {
    const jwt = request.cookies.get(`${JWT.ACCESS_TOKEN}`);
    const { key, fetcher } = authFetcher.isByeol(jwt);
    try {
      const { data: isByeol } = await fetcher(key);
      if (!isByeol) {
        return NextResponse.redirect(new URL("/", request.nextUrl.origin));
      }
    } catch (e) {
      return NextResponse.redirect(new URL("/", request.nextUrl.origin));
    }
  }

  return NextResponse.next();
}

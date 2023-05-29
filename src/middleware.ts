import type {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';
import authFetcher from "@/services/auth/auth.fetcher";
import {JWT} from "@/lib/const";

export async function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/byeol/create')) {
        const {key, fetcher} = authFetcher.isUser();
        const {data: isUser} = await fetcher(key);
        if (!isUser) {
            return NextResponse.redirect(new URL('/', request.nextUrl.origin));
        }
    } else if (request.nextUrl.pathname.startsWith('/byeol/me')) {
        const jwt = request.cookies.get(`${JWT.ACCESS_TOKEN}`);
        const {key, fetcher} = authFetcher.isByeol(jwt);
        try {
            const {data: isByeol} = await fetcher(key);
            if (!isByeol) {
                return NextResponse.redirect(new URL('/', request.url));
            }
        } catch (e) {
            return NextResponse.redirect(new URL('/', request.nextUrl.origin));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/byeol/create',
        '/byeol/me'
    ],
};
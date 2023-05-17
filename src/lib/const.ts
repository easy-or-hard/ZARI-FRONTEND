export const JWT = {
    ACCESS_TOKEN: process.env.NEXT_PUBLIC_JWT_ACCESS_TOKEN as string,
}

export class API {
    static BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL as string;
}
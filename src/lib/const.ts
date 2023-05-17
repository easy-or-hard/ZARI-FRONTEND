export const JWT = {
    ACCESS_TOKEN: 'access_token',
}

export class API {
    static BASE_URL = 'http://localhost:3000';

    static USER = {
        ME: {
            BASE_URL: '/user/me',
            METHOD: 'GET',
        },
    }

    static CONSTELLATION = {
        GET: {
            BASE_URL: `/constellation`,
            METHOD: 'GET',
        }
    }
}
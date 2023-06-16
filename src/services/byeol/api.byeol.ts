import { API } from "@/const";

export type BanzzackUnique = {
  name: string;
  constellationIAU: string;
  starNumber: number;
};

export type BanzzackKey =
  | [name: string, constellationIAU: string, starNumber: number]
  | { banzzackId: number };

/**
 * 인증 URL
 */
export const SIGN_IN_EVENT_URL = `${API.BASE_URL}/auth/event`;
export const getOAuthUrlForProvider = (provider: string) =>
  `${API.BASE_URL}/auth/${provider}`;
export const SIGN_OUT_URL = `${API.BASE_URL}/auth/sign-out`;

export const IS_USER_URL = `${API.BASE_URL}/auth/is-user`;
export const IS_BYEOL_URL = `${API.BASE_URL}/auth/is-byeol`;

/**
 * 별 URL
 */
export const BYEOLS_URL = `${API.BASE_URL}/byeols`;

export const getMyByeolUrl = () => `${BYEOLS_URL}/me`;
export const getByeolUrl = ([name]: [string]) => `${BYEOLS_URL}/${name}`;
export const urlIsNameAvailable = (name: string) =>
  `${BYEOLS_URL}/${name}/is-name-available`;

/**
 * 자리 URL
 */

export const getZarisUrl = (name: string) => `${BYEOLS_URL}/${name}/zaris`;
export const getZariUrl = (key: [name: string, constellationIAU: string]) =>
  `${BYEOLS_URL}/${key[0]}/zaris/${key[1]}`;

/**
 * 반짝 URL
 */

export const getEventBanzzacksUrl = (name: string, constellationIAU: string) =>
  `${BYEOLS_URL}/${name}/zaris/${constellationIAU}/banzzacks/event`;

export const getBanzzacksUrl = (name: string, constellationIAU: string) =>
  `${BYEOLS_URL}/${name}/zaris/${constellationIAU}/banzzacks`;

export const getBanzzackUrl = (key: BanzzackKey) => {
  if (Array.isArray(key)) {
    const [name, constellationIAU, starNumber] = key;
    return `${BYEOLS_URL}/${name}/zaris/${constellationIAU}/banzzacks/${starNumber}`;
  } else {
    return `${BYEOLS_URL}/banzzacks/${key.banzzackId}`;
  }
};

export const getBanzzackUrlByPrimaryKey = (id: number) =>
  `${BYEOLS_URL}/banzzacks/${id}`;

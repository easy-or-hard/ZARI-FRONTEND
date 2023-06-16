import { API } from "@/const";

export type ZariUniqueKey = [name: string, constellationIAU: string];

export type BanzzackUniqueKey = [
  name: string,
  constellationIAU: string,
  starNumber: number
];

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

export const getZariUrl = ([name, constellationAIU]: ZariUniqueKey) =>
  `${BYEOLS_URL}/${name}/zaris/${constellationAIU}`;

/**
 * 반짝 URL
 */

export const getEventBanzzacksUrl = (name: string, constellationIAU: string) =>
  `${BYEOLS_URL}/${name}/zaris/${constellationIAU}/banzzacks/event`;

export const getBanzzackUrl = ([
  name,
  constellationIAU,
  starNumber,
]: BanzzackUniqueKey) => {
  return `${BYEOLS_URL}/${name}/zaris/${constellationIAU}/banzzacks/${starNumber}`;
};

import { API } from "@/const";
import { BanzzackTreeUniqueKey } from "@/services/banzzack/entities/banzzack.entity";
import { ZariTreeUniqueKey } from "@/services/zari/entities/zari.entity";
import { ConstellationUniqueKey } from "@/services/constellation/entities/constellation.entity";

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
export const BYEOLS_URL = `${API.BASE_URL}`;

export const getMyByeolUrl = () => `${BYEOLS_URL}/byeols/me`;
export const getByeolUrl = ([name]: [string]) => `${BYEOLS_URL}/byeols/${name}`;
export const urlIsNameAvailable = (name: string) =>
  `${BYEOLS_URL}/byeols/${name}/is-name-available`;

/**
 * 자리 URL
 */

export const getZariUrl = ([name, constellationAIU]: ZariTreeUniqueKey) =>
  `${BYEOLS_URL}/byeols/${name}/zaris/${constellationAIU}`;

/**
 * 반짝 URL
 */

export const getEventBanzzacksUrl = (name: string, constellationIAU: string) =>
  `${BYEOLS_URL}/byeols/${name}/zaris/${constellationIAU}/banzzacks/event`;

export const getBanzzackUrl = ([
  name,
  constellationIAU,
  starNumber,
]: BanzzackTreeUniqueKey) => {
  return `${BYEOLS_URL}/byeols/${name}/zaris/${constellationIAU}/banzzacks/${starNumber}`;
};

export const getConstellationUrl = ([
  constellationIAU,
]: ConstellationUniqueKey) =>
  `${BYEOLS_URL}/constellations/${constellationIAU}`;

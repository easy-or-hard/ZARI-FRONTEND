import { baseFetcher, baseFetcherOptions } from "@/services/common/fetcher";
import { mutate } from "swr";
import {
  getMyByeolUrl,
  IS_BYEOL_URL,
  SIGN_OUT_URL,
} from "@/services/byeol/api.byeol";

export const signOut = async () => {
  baseFetcher(SIGN_OUT_URL, baseFetcherOptions("GET"));
  mutate(IS_BYEOL_URL, undefined, false);
  mutate(getMyByeolUrl(), undefined, false);
};

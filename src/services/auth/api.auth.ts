import { baseFetcher, baseFetcherOptions } from "@/services/common/fetcher";
import { mutate } from "swr";
import { IS_BYEOL_URL, SIGN_OUT_URL } from "@/services/byeol/api.byeol";

export const signOut = async () => {
  await baseFetcher(SIGN_OUT_URL, baseFetcherOptions("GET"));
  mutate(IS_BYEOL_URL, null, false);
  mutate(["me"], null, false);
};

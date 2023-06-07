import byeolFetcher from "@/services/byeol/byeol.fetcher";
import { cookies } from "next/headers";
import { JWT } from "@/const";
import ZariPage from "@/app/zari/[id]/page";

/**
 * @description 별자리를 볼 수 있는 페이지
 * @constructor
 */
export default async function MePage() {
  const jwt = cookies().get(JWT.ACCESS_TOKEN);
  const { key, fetcher } = byeolFetcher.findMe(jwt);
  const { data: includeZariByeol } = await fetcher(key);

  return <ZariPage params={{ id: includeZariByeol.zaris[0].id }} />;
}

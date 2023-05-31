import byeolFetcher from "@/services/byeol/byeol.fetcher";
import { cookies } from "next/headers";
import { JWT } from "@/const";
import ZariCarousel from "@/app/component/byeol/zari.carousel";
import AgrOriginPath from "@/app/component/constellation/constellations/agr-origin.path";

/**
 * @description 별자리를 볼 수 있는 페이지
 * @constructor
 */
export default async function MePage() {
  const jwt = cookies().get(JWT.ACCESS_TOKEN);
  const { key, fetcher } = byeolFetcher.findMe(jwt);
  const { data: includeZariByeol } = await fetcher(key);

  return (
    <>
      <div>{includeZariByeol.name} 가 소유중인 별자리</div>
      <ZariCarousel>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 640">
          <AgrOriginPath />
        </svg>
        {includeZariByeol.zaris.map((zari) => (
          <div className={"w-full"} key={zari.id}>
            {zari.constellationIAU}
          </div>
        ))}
      </ZariCarousel>
    </>
  );
}

import byeolFetcher from "@/services/byeol/byeol.fetcher";
import ZariPage from "@/app/zari/[id]/page";

type Props = {
  params: {
    name: string;
  };
};

/**
 * @description 별자리를 볼 수 있는 페이지
 * @constructor
 */
export default async function MePage({ params: { name } }: Props) {
  const { key, fetcher } = byeolFetcher.findByName(name);
  const includeZariByeol = await fetcher(key);

  return <ZariPage params={{ id: includeZariByeol.zaris[0].id }} />;
}

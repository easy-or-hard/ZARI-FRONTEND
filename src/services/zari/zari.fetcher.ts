import { API } from "@/const";
import { OkResponseDto } from "@/services/common/dto/ok.response.dto";
import fetcher from "@/services/common/fetcher";
import { IncludeConstellationByeolBanzzackZariDto } from "@/services/zari/dto/include-constellation-byeol-banzzack-zari.dto";

const createFindByIdFetcher = (id: number) => {
  const key = `${API.BASE_URL}/zari/${id}`;
  const init = fetcher.createRequestOptions("GET");

  return fetcher.create<
    OkResponseDto<IncludeConstellationByeolBanzzackZariDto>
  >({ key, init });
};

const zariFetcher = {
  createFindByIdFetcher: createFindByIdFetcher,
};

export default zariFetcher;

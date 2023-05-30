import { API } from "@/const";
import { OkResponseDto } from "@/services/common/dto/ok.response.dto";
import { ConstellationEntity } from "@/services/constellation/entities/constellation.entity";
import fetcher from "@/services/common/fetcher";

const createFindByIAUFetcher = (IAU: string) => {
  const key = `${API.BASE_URL}/constellation/${IAU}`;
  const init = fetcher.createRequestOptions("GET");

  return fetcher.create<OkResponseDto<ConstellationEntity>>({ key, init });
};

const constellation = {
  createFindByIAUFetcher,
};

export default constellation;

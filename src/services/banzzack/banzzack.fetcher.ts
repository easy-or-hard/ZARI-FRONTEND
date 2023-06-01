import { API } from "@/const";
import { OkResponseDto } from "@/services/common/dto/ok.response.dto";
import { ConstellationEntity } from "@/services/constellation/entities/constellation.entity";
import fetcher from "@/services/common/fetcher";
import { CreateBanzzackDto } from "@/services/banzzack/dto/reuqest/create-banzzack.dto";

const createBanzzack = (createBanzzack: CreateBanzzackDto) => {
  const key = `${API.BASE_URL}/banzzack`;
  const init = fetcher.createRequestOptions("POST");
  init.headers = { "Content-Type": "application/json" };
  init.body = JSON.stringify(createBanzzack);

  return fetcher.create<OkResponseDto<ConstellationEntity>>({ key, init });
};

const banzzackFetcher = {
  createBanzzack,
};

export default banzzackFetcher;

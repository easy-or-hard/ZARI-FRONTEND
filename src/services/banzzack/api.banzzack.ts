import { API } from "@/const";
import generateUrl from "@/services/common/generate-url";

const defaultUrl = API.BASE_URL + "/banzzack";

const url = (param?: Record<string, any> | string | number) => {
  return param ? generateUrl(defaultUrl, param) : undefined;
};

const apiBanzzack = {
  defaultUrl,
  url,
};

export default apiBanzzack;

import { API } from "@/const";
import generateUrl from "@/services/common/generate-url";

const defaultUrl = `${API.BASE_URL}/byeol`;

const url = (param?: Record<string, any> | string | number) => {
  return param ? generateUrl(defaultUrl, param) : undefined;
};

const apiByeol = {
  defaultUrl,
  url,
};

export default apiByeol;

import { API } from "@/const";
import generateUrl from "@/services/common/generate-url";

const defaultUrl = `${API.BASE_URL}/zari`;

const url = (param?: Record<string, any> | string | number) => {
  return param ? generateUrl(defaultUrl, param) : undefined;
};

const apiZari = {
  defaultUrl,
  url,
};

export default apiZari;

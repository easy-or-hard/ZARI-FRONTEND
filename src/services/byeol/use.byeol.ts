import useSWRMutation, {
  MutationFetcher,
  SWRMutationConfiguration,
} from "swr/mutation";
import {
  getByeolUrl,
  getMyByeolUrl,
  urlIsNameAvailable,
} from "@/services/byeol/api.byeol";
import { ByeolEntity } from "@/services/byeol/entities/byeol.entity";
import useSWR, { mutate } from "swr";
import {
  baseFetcher,
  baseFetcherOptions,
  ZariError,
} from "@/services/common/fetcher";
import { PatchByeolDto } from "@/services/byeol/dto/reuqest/patch-byeol.dto";

const keyMe = ["me"];

export function useMyByeol(isContinue: Boolean = true) {
  return useSWR(
    isContinue ? keyMe : null,
    () => baseFetcher<ByeolEntity>(getMyByeolUrl()),
    {
      onSuccess: (data) => {
        mutate(getByeolUrl([data.name]), data, false);
      },
    }
  );
}

export function useByeol(key?: [string]) {
  return useSWR(key ? key : null, (innerKey) =>
    baseFetcher<ByeolEntity>(getByeolUrl(innerKey), baseFetcherOptions("GET"))
  );
}

export function usePatchByeol() {
  const { data } = useMyByeol();
  const url = data ? getByeolUrl([data.name]) : undefined;
  const fetcher: MutationFetcher<ByeolEntity, PatchByeolDto> = (
    url: string,
    { arg }: { arg: PatchByeolDto }
  ) => {
    return fetch(url, {
      ...baseFetcherOptions("PATCH"),
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(arg),
    }).then(async (res) => {
      if (!res.ok) {
        throw new ZariError(await res.json());
      }
      return res.json();
    });
  };

  const options: SWRMutationConfiguration<
    ByeolEntity,
    ZariError,
    any,
    any,
    ByeolEntity
  > = {
    rollbackOnError: true,
    onSuccess: (data) => {
      mutate(getMyByeolUrl(), data, false);
      mutate(getByeolUrl([data.name]), data, false);
    },
  };

  const { trigger } = useSWRMutation(url, fetcher, options);
  const changeName = (name: string) => trigger({ name });
  return { changeName };
}

export function useGetIsNameAvailableByeol(name?: string) {
  const url = name ? urlIsNameAvailable(name) : null;
  return useSWR<boolean>(url, baseFetcher);
}

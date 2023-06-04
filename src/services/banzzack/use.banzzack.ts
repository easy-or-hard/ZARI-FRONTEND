import useSWR, { mutate } from "swr";
import { baseFetcher, baseFetcherOptions } from "@/services/common/fetcher";
import apiBanzzack from "@/services/banzzack/api.banzzack";
import { BanzzackEntity } from "@/services/banzzack/entities/banzzack.entity";
import { PostPatchBanzzackDto } from "@/services/banzzack/dto/reuqest/post-patch-banzzack.dto";
import { MutatorOptions } from "swr/_internal";
import apiZari from "@/services/zari/api.zari";

type UniqueBanzzack = {
  zariId: number;
  starNumber: number;
};

export default function useBanzzack(uniqueBanzzack: UniqueBanzzack) {
  const url = apiBanzzack.url(uniqueBanzzack);

  const {
    data,
    isLoading,
    error,
    isValidating,
    mutate: mutateBanzzack,
  } = useSWR(url, (url: string) =>
    baseFetcher<BanzzackEntity>(url, baseFetcherOptions("GET"))
  );

  const banzzackFetcher = async (method: string, body?: any | undefined) => {
    if (!url) {
      throw new Error("url 이 없습니다.");
    }
    return baseFetcher<BanzzackEntity>(url, {
      ...baseFetcherOptions(method),
      body: body ? JSON.stringify(body) : undefined,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const post = async (postPatchBanzzackDto: PostPatchBanzzackDto) => {
    const fetcher = banzzackFetcher("POST", postPatchBanzzackDto);
    const options: MutatorOptions = {
      rollbackOnError: true,
      optimisticData: {
        ...uniqueBanzzack,
        ...postPatchBanzzackDto,
      },
    };

    try {
      await mutateBanzzack(fetcher, options);
      await mutate(apiZari.url(uniqueBanzzack.zariId));
    } catch (error) {
      // throw 되지 않기 위한 로직
      console.error(error);
    }
  };

  const patch = async (patchBanzzackDto: PostPatchBanzzackDto) => {
    if (!data) {
      throw new Error("데이터가 없습니다.");
    }

    const fetcher = banzzackFetcher("PATCH", patchBanzzackDto);
    const options: MutatorOptions = {
      rollbackOnError: true,
      optimisticData: {
        ...data,
        ...patchBanzzackDto,
      },
    };

    try {
      await mutateBanzzack(fetcher, options);
      await mutate(apiZari.url(uniqueBanzzack.zariId));
    } catch (error) {
      // throw 되지 않기 위한 로직
      console.error(error);
    }
  };

  const remove = async () => {
    if (!data) {
      throw new Error("데이터가 없습니다.");
    }
    const fetcher = banzzackFetcher("DELETE");
    const options: MutatorOptions = {
      optimisticData: undefined,
    };

    try {
      await mutateBanzzack(fetcher, options);
      await mutate(apiZari.url(uniqueBanzzack.zariId));
    } catch (error) {
      // throw 되지 않기 위한 로직
      console.error(error);
    }
  };

  return {
    data,
    isLoading,
    error,
    isValidating,
    mutate: mutateBanzzack,
    post,
    patch,
    remove,
  };
}

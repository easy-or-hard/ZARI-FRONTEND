import apiByeol from "@/services/byeol/api.byeol";
import useSWR from "swr";
import { baseFetcher, baseFetcherOptions } from "@/services/common/fetcher";
import { ByeolEntity } from "@/services/byeol/entities/byeol.entity";
import { PostByeolDto } from "@/services/byeol/dto/reuqest/post-byeol.dto";
import { MutatorOptions } from "swr/_internal";
import { PatchByeolDto } from "@/services/byeol/dto/reuqest/patch-byeol.dto";

export type UniqueByeol = {
  name: string;
};

export default function useByeol(uniqueByeol?: UniqueByeol | undefined) {
  const url = apiByeol.url(uniqueByeol);

  const { data, isLoading, error, isValidating, mutate } = useSWR(
    url,
    (url: string) => baseFetcher<ByeolEntity>(url, baseFetcherOptions("GET"))
  );

  const byeolFetcher = async (method: string, body?: any | undefined) => {
    if (!url) {
      throw new Error("url 이 없습니다.");
    }
    return baseFetcher<ByeolEntity>(url, {
      ...baseFetcherOptions(method),
      body: body ? JSON.stringify(body) : undefined,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const post = async (postByeolDto: PostByeolDto) => {
    // TODO, throw 하지말고 다른 방식 고민하기
    if (!url) {
      return new Error("생성할 별의 이름이 없습니다");
    } else if (isLoading) {
      return new Error("데이터 수신중 입니다.");
    } else if (isValidating) {
      return new Error("데이터 재 수신중 입니다.");
    } else if (data) {
      throw new Error("데이터가 이미 있습니다.");
    }

    const fetcher = byeolFetcher("POST", postByeolDto);
    const options: MutatorOptions = {
      rollbackOnError: true,
      optimisticData: {
        ...postByeolDto,
      },
    };

    try {
      await mutate(fetcher, options);
    } catch (error) {
      // throw 되지 않기 위한 로직
      console.error(error);
    }
  };
  const patch = async (patchByeolDto: PatchByeolDto) => {
    if (!data) {
      throw new Error("데이터가 없습니다.");
    }

    const fetcher = byeolFetcher("PATCH", patchByeolDto);
    const options: MutatorOptions = {
      rollbackOnError: true,
      optimisticData: {
        ...data,
        ...patchByeolDto,
      },
    };

    try {
      await mutate(fetcher, options);
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
    mutate,
    post,
    patch,
    // remove,
  };
}

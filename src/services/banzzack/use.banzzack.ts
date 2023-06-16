import useSWRSubscription, {
  SWRSubscription,
  SWRSubscriptionOptions,
} from "swr/subscription";
import {
  BanzzackUniqueKey,
  getBanzzackUrl,
  getEventBanzzacksUrl,
  getZariUrl,
} from "@/services/byeol/api.byeol";
import useSWRMutation, { MutationFetcher } from "swr/mutation";
import {
  baseFetcher,
  baseFetcherOptions,
  ZariError,
} from "@/services/common/fetcher";
import { useRef, useState } from "react";
import useSWR, { mutate } from "swr";
import { BanzzackEntity } from "@/services/banzzack/entities/banzzack.entity";

type LockAndUnlockEventBanzzackDto = {
  starNumber: number;
  lock: boolean;
};

type EventLockAndUnlockBanzzackDto = {
  name: string;
  constellationIAU: string;
  starNumber: number;
  locked: boolean;
};

export function useBanzzack(key: BanzzackUniqueKey) {
  return useSWR(key, (key: BanzzackUniqueKey) => {
    const url = getBanzzackUrl(key);
    return baseFetcher<BanzzackEntity>(url);
  });
}

export function usePostBanzzack(key: BanzzackUniqueKey) {
  return useSWRMutation(
    key,
    (key: BanzzackUniqueKey, { arg }: { arg: { content: string } }) => {
      const url = getBanzzackUrl(key);

      return baseFetcher<BanzzackEntity>(url, {
        ...baseFetcherOptions("POST"),
        body: JSON.stringify(arg),
      });
    },
    {
      onSuccess: (data) => {
        mutate([key[0], key[1]]);
      },
    }
  );
}

export function useEventBanzzacks(name: string, constellationIAU: string) {
  const [locks, setLocks] = useState<number[]>([]);
  const myLock = useRef<number>(0);
  const url = getEventBanzzacksUrl(name, constellationIAU);
  const subscribe: SWRSubscription = (
    key: string,
    { next }: SWRSubscriptionOptions<EventLockAndUnlockBanzzackDto>
  ) => {
    const eventSource = new EventSource(key);
    eventSource.onmessage = (event) => {
      const data: EventLockAndUnlockBanzzackDto = JSON.parse(event.data);
      if (data.locked) {
        setLocks((prevLocks) => [...prevLocks, data.starNumber]);
      } else {
        mutate(getZariUrl([name, constellationIAU]));
        setLocks((prevLocks) => {
          const updatedLocks = prevLocks.filter(
            (starNumber) => starNumber !== data.starNumber
          );
          return updatedLocks;
        });
      }
      next(undefined, data);
    };

    return () => {
      if (myLock.current !== 0) {
        unlock(myLock.current).then(() => eventSource.close());
      } else {
        eventSource.close();
      }
    };
  };

  const fetcher: MutationFetcher<void, LockAndUnlockEventBanzzackDto> = (
    url: string,
    { arg }: { arg: LockAndUnlockEventBanzzackDto }
  ) => {
    const body = JSON.stringify(arg);
    return fetch(url, {
      ...baseFetcherOptions("PATCH"),
      headers: {
        "Content-Type": "application/json",
      },
      body,
    }).then(async (res) => {
      if (!res.ok) throw new ZariError(await res.json());
    });
  };

  const eventSubscribe = useSWRSubscription(url, subscribe);
  const { trigger } = useSWRMutation(url, fetcher);
  const lock = async (starNumber: number) =>
    lockToggle(starNumber, true).then(() => (myLock.current = starNumber));
  const unlock = async (starNumber: number) =>
    lockToggle(starNumber, false).then(() => (myLock.current = 0));

  const lockToggle = async (starNumber: number, lock: boolean) =>
    trigger({ starNumber, lock });

  return { ...eventSubscribe, locks, lock, unlock };
}

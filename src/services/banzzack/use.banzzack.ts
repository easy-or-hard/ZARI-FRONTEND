import useSWRSubscription, {
  SWRSubscription,
  SWRSubscriptionOptions,
} from "swr/subscription";
import {
  getBanzzackUrl,
  getEventBanzzacksUrl,
} from "@/services/byeol/api.byeol";
import useSWRMutation from "swr/mutation";
import { baseFetcher, baseFetcherOptions } from "@/services/common/fetcher";
import { useRef, useState } from "react";
import useSWR, { mutate } from "swr";
import {
  BanzzackEntity,
  BanzzackTreeUniqueKey,
} from "@/services/banzzack/entities/banzzack.entity";
import { ZariTreeUniqueKey } from "@/services/zari/entities/zari.entity";

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

export function useBanzzack(key: BanzzackTreeUniqueKey) {
  return useSWR(key, (key: BanzzackTreeUniqueKey) => {
    const url = getBanzzackUrl(key);
    return baseFetcher<BanzzackEntity>(url);
  });
}

export function usePostBanzzack(key: BanzzackTreeUniqueKey) {
  return useSWRMutation(
    key,
    (key: BanzzackTreeUniqueKey, { arg }: { arg: { content: string } }) => {
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

export function useEventBanzzacks([name, constellationIAU]: ZariTreeUniqueKey) {
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
        mutate([name, constellationIAU]);
        setLocks((prevLocks) => {
          const updatedLocks = prevLocks.filter(
            (starNumber) => starNumber !== data.starNumber
          );
          return updatedLocks;
        });
      }

      next(null, data);
    };

    return () => {
      if (myLock.current !== 0) {
        unlock(myLock.current).then(() => eventSource.close());
      } else {
        eventSource.close();
      }
    };
  };

  const eventSubscribe = useSWRSubscription(url, subscribe);
  const { trigger } = useSWRMutation(
    url,
    (url: string, { arg }: { arg: LockAndUnlockEventBanzzackDto }) => {
      baseFetcher(url, {
        ...baseFetcherOptions("PATCH"),
        body: JSON.stringify(arg),
      });
    }
  );
  const lock = async (starNumber: number) =>
    lockToggle(starNumber, true).then(() => (myLock.current = starNumber));
  const unlock = async (starNumber: number) =>
    lockToggle(starNumber, false).then(() => (myLock.current = 0));

  const lockToggle = async (starNumber: number, lock: boolean) =>
    trigger({ starNumber, lock });

  return { ...eventSubscribe, locks, lock, unlock };
}

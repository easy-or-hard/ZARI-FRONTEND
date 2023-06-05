import apiZari from "@/services/zari/api.zari";
import { baseFetcher, baseFetcherOptions } from "@/services/common/fetcher";
import { useCallback, useEffect, useRef, useState } from "react";
import { API } from "@/const";
import useZari from "@/services/zari/use.zari";

type EventSourceProps = {
  starNumber: number;
  locked: boolean;
};

export default function useZariLockBanzzack(id: number) {
  const { mutate } = useZari(id);
  const baseUrl = apiZari.url(id) + "/banzzack";
  const url = (starNumber: number, method: "lock" | "release") =>
    `${baseUrl}/${starNumber}/${method}`;
  const [locks, setLocks] = useState<Record<number, boolean>>({});
  const myLock = useRef<number>();
  const [createBanzzackTimeOut, setCreateBanzzackTimeOut] = useState(false);
  const handlerLock = useCallback((starNumber: number, locked: boolean) => {
    if (locked) {
      setLocks((prevLocks) => ({ ...prevLocks, [starNumber]: true }));
    } else {
      setLocks((prevLocks) => {
        if (myLock.current === starNumber) {
          setCreateBanzzackTimeOut(true);
        }
        myLock.current = undefined;
        const updatedLocks = { ...prevLocks };
        delete updatedLocks[starNumber];
        return updatedLocks;
      });
    }
  }, []);

  useEffect(() => {
    const eventSource = new EventSource(`${API.BASE_URL}/zari/${id}/event`);

    eventSource.onmessage = (event) => {
      const data: EventSourceProps = JSON.parse(event.data);
      handlerLock(data.starNumber, data.locked);
      mutate();
    };

    return () => {
      eventSource.close();
    };
  }, [mutate]);

  // 락 후에 브라우저 종료시 로직
  useEffect(() => {
    // This function will be called when the window is about to be closed
    const handleBeforeUnload = () => {
      myLock.current &&
        baseFetcher(
          `${API.BASE_URL}/zari/${id}/banzzack/${myLock.current}/release`,
          baseFetcherOptions("DELETE")
        );
    };

    // Add the event listener when the component mounts
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Remove the event listener when the component unmounts
    return () => {
      handleBeforeUnload();
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [myLock]);

  const lock = (starNumber: number) => {
    return baseFetcher(url(starNumber, "lock"), {
      ...baseFetcherOptions("POST"),
    }).then(() => {
      myLock.current = starNumber;
      handlerLock(starNumber, true);
      mutate();
    });
  };

  const release = (starNumber: number) => {
    baseFetcher(url(starNumber, "release"), {
      ...baseFetcherOptions("DELETE"),
    }).then(() => {
      handlerLock(starNumber, false);
      mutate();
    });
  };

  const timeOutInit = () => {
    setCreateBanzzackTimeOut(false);
  };

  return { timeOutInit, createBanzzackTimeOut, locks, lock, release };
}

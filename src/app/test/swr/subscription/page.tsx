"use client";

import { useEventBanzzacks } from "@/services/banzzack/use.banzzack";
import { useZari } from "@/services/zari/use.zari";
import { useRouter } from "next/navigation";

export default function SubscriptionTestPage() {
  const router = useRouter();
  const { data, lock, unlock } = useEventBanzzacks("사스케", "Tau");
  const { data: test } = useZari("사스케", "Tau");

  return (
    <>
      <h1>Subscription Test Page</h1>
      <div>{data && JSON.stringify(data)}</div>
      <hr />
      <div>{test && JSON.stringify(test)}</div>
      <button onClick={() => lock(7)}>lock</button>
      <button onClick={() => unlock(7)}>unlock</button>
      <button onClick={() => router.push("/byeol/me")}>홈으로</button>
    </>
  );
}

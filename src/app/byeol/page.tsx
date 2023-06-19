"use client";

import Zari from "@/component/zari/zari";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useMyByeol } from "@/services/byeol/use.byeol";
import { useIsByeol } from "@/services/auth/use.auth";

/**
 * @description 별자리를 볼 수 있는 페이지
 * @constructor
 */
export default function MyPage() {
  const router = useRouter();
  const { data: isByeol } = useIsByeol();
  const { data: myByeol } = useMyByeol(isByeol);

  useEffect(() => {
    if (!isByeol || !myByeol) {
      return;
    }

    if (myByeol.zaris.length === 0) {
      router.push("/zari/create");
    }
  }, [isByeol, myByeol, router]);

  if (!myByeol) return;
  else if (myByeol.zaris.length === 0) return;

  return (
    <>
      <Zari
        name={myByeol.name}
        constellationIAU={myByeol.zaris[0].constellationIAU}
      />
      {/* {byeol.zaris.map((zari) => (*/}
      {/*  <Zari*/}
      {/*    key={zari.constellationIAU}*/}
      {/*    name={byeol.name}*/}
      {/*    constellationIAU={zari.constellationIAU}*/}
      {/*  />*/}
      {/* ))}*/}
    </>
  );
}

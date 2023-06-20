"use client";

import Zari from "@/component/zari/zari";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useMemo } from "react";
import { useMyByeol } from "@/services/byeol/use.byeol";
import { useIsByeol } from "@/services/auth/use.auth";
import { ModalContext } from "@/component/ui/popup/modal/modal.provider";

/**
 * @description 별자리를 볼 수 있는 페이지
 * @constructor
 */
export default function MyPage() {
  const modalContext = useContext(ModalContext);
  if (!modalContext) {
    throw new Error("ModalContext is null");
  }
  const { showReadBanzzackModal } = useMemo(() => modalContext, [modalContext]);

  const router = useRouter();
  const { data: isByeol } = useIsByeol();
  const { data: myByeol } = useMyByeol(isByeol);

  useEffect(() => {
    if (!isByeol || !myByeol) {
      return;
    }

    if (myByeol.zaris.length === 0) {
      router.push("/zari/create");
    } else if (!myByeol.zaris[0].constellationIAU) {
      showReadBanzzackModal({
        banzzackTreeUniqueKey: ["0", "0", 0],
      });
    }
  }, [isByeol, myByeol, router, showReadBanzzackModal]);

  if (!myByeol) return;
  else if (myByeol.zaris.length === 0) return;

  return (
    <>
      <Zari
        name={myByeol.name}
        constellationIAU={myByeol.zaris[0].constellationIAU}
      />
    </>
  );
}

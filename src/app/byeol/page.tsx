"use client";

import Zari from "@/component/zari/zari";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useMemo } from "react";
import { ModalContext } from "@/component/ui/popup/modal/modal.provider";
import { useMyByeol } from "@/services/byeol/use.byeol";
import { ConfirmModalProps } from "@/component/ui/popup/modal/confirm.modal";

/**
 * @description 별자리를 볼 수 있는 페이지
 * @constructor
 */
export default function MyPage() {
  const modalContext = useContext(ModalContext);
  if (!modalContext) {
    throw new Error("ModalContext is null");
  }
  const { showConfirmModal } = useMemo(() => modalContext, [modalContext]);

  const router = useRouter();
  const { data: byeol } = useMyByeol();

  useEffect(() => {
    if (byeol?.zaris.length === 0) {
      const options: ConfirmModalProps = {
        title: "자리가 없습니다.",
        description: "자리를 생성하시겠어요?",
        onAccept: () => {
          router.push("/zari/create");
        },
      };
      showConfirmModal(options);
    }
  }, [byeol, router, showConfirmModal]);

  if (!byeol) return <>로딩중</>;

  return (
    <>
      {byeol.zaris.map((zari) => (
        <Zari
          key={zari.constellationIAU}
          name={byeol.name}
          constellationIAU={zari.constellationIAU}
        />
      ))}
    </>
  );
}

"use client";

import WriteIcon from "@/app/component/ui/icon/size24/write";
import SpeedDial from "@/app/component/ui/menu/speed-dial";
import { useCallback } from "react";
import { useIsByeol } from "@/services/auth/auth.use";

type Props = {
  onClickWrite: () => void;
};

export default function ZariHeader({ onClickWrite }: Props) {
  const { data: isByeol } = useIsByeol();
  const handlerClickWrite = useCallback(() => {
    onClickWrite();
  }, [onClickWrite]);

  return (
    <header className="absolute w-full px-4 mt-5 flex justify-between items-start">
      <SpeedDial />
      <button disabled={!isByeol} onClick={handlerClickWrite}>
        <WriteIcon />
      </button>
    </header>
  );
}

"use client";

import SpeedDial from "@/component/ui/menu/speed-dial";
import WriteIcon from "@/component/ui/icon/size24/write";

type Props = {
  onClickWrite: () => void;
};

export default function ZariHeader({ onClickWrite }: Props) {
  return (
    <header className="absolute w-full px-4 mt-5 flex justify-between items-start">
      <SpeedDial />
      <button onClick={onClickWrite}>
        <WriteIcon />
      </button>
    </header>
  );
}

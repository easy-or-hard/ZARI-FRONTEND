import WriteIcon from "@/app/component/ui/icon/size24/write";
import SpeedDial from "@/app/component/ui/menu/speed-dial";

export default function ZariHeader() {
  return (
    <header className="absolute top-400 w-full h-16 p-4 flex justify-between">
      <SpeedDial />
      <WriteIcon />
    </header>
  );
}

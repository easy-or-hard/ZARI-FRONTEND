import WriteIcon from "@/components/ui/icon/size24/write";
import SpeedDial from "@/components/ui/menu/speed-dial";

export default function Header() {
    return (
        <header className='absolute top-400 w-full h-16 p-4 flex justify-between'>
            <SpeedDial/>
            <WriteIcon/>
        </header>
    )
}
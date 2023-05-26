import WriteIcon from "@/components/ui/icon/size24/write";
import Menu from "@/components/ui/menu/menu";

export default function Header() {
    return (
        <header className='absolute top-400 w-full h-16 p-4 flex justify-between'>
            <Menu/>
            <WriteIcon/>
        </header>
    )
}
import HomeIcon from "@/components/ui/icon/size24/home";
import SignOutIcon from "@/components/ui/icon/size24/sign-out";

export default function SubMenu() {
    return (
        <span
            className={'bg-zari_default_white rounded-full inline-flex flex-col items-center justify-center'}
        >
            <button
                className={'bg-zari_default_white w-11 h-11 rounded-full flex items-center justify-center'}
            >
                <HomeIcon color={'#161616'}/>
            </button>
            <button
                className={'bg-zari_default_white w-11 h-11 rounded-full flex items-center justify-center'}
            >
                <SignOutIcon color={'#161616'}/>
            </button>
        </span>
    )
}
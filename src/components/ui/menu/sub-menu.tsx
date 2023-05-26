import HomeIcon from "@/components/ui/icon/size24/home";
import SignOutIcon from "@/components/ui/icon/size24/sign-out";
import SettingIcon from "@/components/ui/icon/size24/setting";

export default function SubMenu() {
    return (
        <span
            className={`px-3 py-4 bg-zari_default_white rounded-full inline-grid gap-4`}
        >
            <button>
                <HomeIcon color={'#161616'}/>
            </button>
            <button>
                <SettingIcon color={'#161616'}/>
            </button>
            <button>
                <SignOutIcon color={'#161616'}/>
            </button>
        </span>
    )
}
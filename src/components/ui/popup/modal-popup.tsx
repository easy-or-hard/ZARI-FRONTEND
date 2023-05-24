import CloseIcon from "@/components/ui/icon/size24/close";
import {ReactNode} from "react";

type Props = {
    children: ReactNode;
    title: string;
}
export default function ModalPopup({children, title}: Props) {
    return (
        <div
            className={'p-4 gap-2 rounded-2xl w-full bg-zari_default_black opacity-80 flex flex-col justify-center items-center'}>
            <div className={'w-full flex justify-between'}>
                {title}
                <button>
                    <CloseIcon/>
                </button>
            </div>
            <div className={'p-4 rounded-2xl w-full bg-zari_btn_disabled'}>
                {children}
            </div>
            <button
                className="py-3 w-full bg-zari_primary rounded-2xl">
                버튼
            </button>
        </div>
    )
}
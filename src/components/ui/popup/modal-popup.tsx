import CloseIcon from "@/components/ui/icon/size24/close";
import {ReactNode} from "react";
import Dim from "@/components/ui/popup/dim";

type Props = {
    children: ReactNode;
    title: string;
    setToggle: (toggle: boolean) => void;
}
export default function ModalPopup({children, title, setToggle}: Props) {
    return (
        <>
            <div className={'absolute z-20 top-0 left-0 p-10 w-full h-full flex flex-col justify-center items-center'}>
                <div
                    className={'p-4 gap-2 rounded-2xl w-full bg-zari_default_black flex flex-col justify-center items-center'}>
                    <div className={'w-full flex justify-between'}>
                        {title}
                        <button onClick={() =>setToggle(false)}>
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
            </div>
            <Dim/>
        </>
    )
}
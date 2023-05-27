import ModalPopup from "@/components/ui/popup/modal-popup";
import {EnableButton} from "@/components/button/enableButton";

type Props = {
    byeolName: string;
    setVisible: (toggle: boolean) => void;
    onClick: () => void;
}
export default function WriteBanzzack({byeolName, setVisible, onClick}: Props) {
    return (
        <ModalPopup setVisible={setVisible}>
            <div className={'flex flex-col gap-2'}>
                <div className={'font-bold px-1'}>
                    <span className={'text-zari_txt_primary'}>{byeolName}</span> 에게 남기는 반짝이
                </div>
                <div className={'bg-zari_default_white bg-opacity-20 rounded-lg px-2 py-4'}>
                    <input className={'bg-transparent opacity-50 min-h-min-30 max-h-60 overflow-y-auto'}>
                    </input>
                </div>
                <EnableButton onClick={onClick}><span className={'font-bold'}>나도 반짝이 붙이기</span></EnableButton>
            </div>
        </ModalPopup>
    )
}
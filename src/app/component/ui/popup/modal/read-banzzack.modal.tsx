import {EnableButton} from "@/app/component/button/enableButton";
import {BanzzackEntity} from "@/services/banzzack/entities/banzzack.entity";
import {useContext} from "react";
import {BaseModalContext} from "@/app/component/ui/popup/modal.provider";
import CloseIcon from "@/app/component/ui/icon/size24/close";

export default function ReadBanzzackModal({banzzack}: { banzzack: BanzzackEntity }) {
    const baseModalContext = useContext(BaseModalContext);
    if (!baseModalContext) {
        throw new Error('ModalContext is null');
    }
    const {closeModal} = baseModalContext;

    return (
        <div>
            <div className={'flex flex-col gap-2'}>
                <div className={'font-bold px-1'}>
                    <span className={'text-zari_txt_primary'}>{banzzack.byeolName}</span> 의 반짝이
                    <button onClick={closeModal} className={'absolute top-3 right-3'}><CloseIcon/></button>
                </div>
                <div className={'bg-zari_default_white bg-opacity-20 rounded-lg px-2 py-4'}>
                    <div className={'h-32 max-h-60'}>
                        {banzzack.content}
                    </div>
                </div>
                <EnableButton onClick={() => alert('아직 이벤트를 안 넣었음')}><span className={'font-bold'}>나도 반짝이 붙이기</span></EnableButton>
            </div>
        </div>
    )
}
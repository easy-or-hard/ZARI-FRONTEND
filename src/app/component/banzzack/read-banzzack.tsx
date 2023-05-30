import ModalPopup from "@/app/component/ui/popup/modal-popup";
import {EnableButton} from "@/app/component/button/enableButton";
import {BanzzackEntity} from "@/services/banzzack/entities/banzzack.entity";

type Props = {
    banzzack: BanzzackEntity;
    setVisible: (toggle: boolean) => void;
    onClick: () => void;
}
export default function ReadBanzzack({banzzack, setVisible, onClick}: Props) {
    return (
        <ModalPopup setVisible={setVisible}>
            <div className={'flex flex-col gap-2'}>
                <div className={'font-bold px-1'}>
                    <span className={'text-zari_txt_primary'}>{banzzack.byeolName}</span> 의 반짝이
                </div>
                <div className={'bg-zari_default_white bg-opacity-20 rounded-lg px-2 py-4'}>
                    {/* TODO, 마크다운 태그도 인식할 수 있게 컴포넌트 변경하기, 현재는 보안적으로 스크립트가 실행 안 되게 pre 로 바꿈 */}
                    <pre className={'max-h-60 overflow-y-auto'}>
                        {banzzack.content}
                    </pre>
                </div>
                <EnableButton onClick={onClick}><span className={'font-bold'}>나도 반짝이 붙이기</span></EnableButton>
            </div>
        </ModalPopup>
    )
}
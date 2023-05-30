import {EnableButton} from "@/app/component/button/enableButton";
import {BanzzackEntity} from "@/services/banzzack/entities/banzzack.entity";

export default function ReadBanzzackModal({banzzack}: {banzzack: BanzzackEntity}) {
    return (
        <div>
            <div className={'flex flex-col gap-2'}>
                <div className={'font-bold px-1'}>
                    <span className={'text-zari_txt_primary'}>{banzzack.byeolName}</span> 의 반짝이
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
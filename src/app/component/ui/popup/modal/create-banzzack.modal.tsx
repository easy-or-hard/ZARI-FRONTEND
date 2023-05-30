'use client'

import {EnableButton} from "@/app/component/button/enableButton";
import {useState} from "react";
import {
    IncludeConstellationByeolBanzzackZariDto
} from "@/services/zari/dto/include-constellation-byeol-banzzack-zari.dto";

const MAX_LENGTH = 150;

export default function CreateBanzzackModal({includeConstellationByeolBanzzackZariDto}: {
    includeConstellationByeolBanzzackZariDto: IncludeConstellationByeolBanzzackZariDto
}) {
    const [textLength, setTextLength] = useState(0); // 글자 수를 저장하는 상태

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextLength(event.target.value.length); // 입력한 문자열의 길이를 상태에 저장
    }

    return (
        <div>
            <div className={'flex flex-col gap-2'}>
                <div className={'font-bold px-1'}>
                    <span
                        className={'text-zari_txt_primary'}>{includeConstellationByeolBanzzackZariDto.byeol.name}</span> 에게
                    남기는 반짝이
                </div>
                <div className={'bg-zari_default_white bg-opacity-20 rounded-lg px-2 py-4'}>
                    <textarea className={'w-full bg-transparent h-32 max-h-60 outline-none'}
                              placeholder={'여기에 이야기를 적어보세요'}
                              maxLength={MAX_LENGTH}
                              onChange={handleChange}
                    />
                </div>
                <div className={'text-right'}>{textLength} / {MAX_LENGTH}</div>
                <EnableButton onClick={() => alert('아직 이벤트를 안 넣었음')}>
                    <span className={'font-bold'}>
                        반짝이 붙이기
                    </span>
                </EnableButton>
            </div>
        </div>
    )
}
'use client'

import ByeolNameInput from "@/components/byeol/byeolNameInput";
import React, {useRef, useState} from "react";
import BirthdaySelect from "@/components/byeol/birthday.select";
import {Button} from "@/components/confirm/button";
import {useRouter} from "next/navigation";
import ByeolService from "@/service/byeol/byeol.service";
import {NotOkResponseDto} from "@/service/common/dto/not-ok.response.dto";
import {BaseResponseDto} from "@/service/common/dto/base.response.dto";

export default function Form() {
    const router = useRouter();
    // 최초 진입시 이름 인풋에 포커스까지 생각했지만 적용 안 했습니다.
    // 모바일에서 화면 진입시 화상 키보드가 바로 나오면 화면이 너무 답답할듯
    const ref = useRef(null);
    const [isNameAvailable, setIsNameAvailable] = useState(false);
    const [isSelectedBirthday, setIsSelectedBirthday] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // form submit 의 기본 동작인 화면 리로드를 막습니다.

        const formData = new FormData(e.currentTarget);
        const {key, fetcher} = ByeolService.createFetcher(formData);
        const data = await fetcher(key);

        statusCase(data);
    };

    // 이 경로로 최초 진입할 경우에 대하여 라우팅 처리 하려고 라우팅 메소드 따로 뺐습니다.
    const statusCase = (data: NotOkResponseDto | BaseResponseDto) => {
        switch (data.statusCode) {
            case 200: // 현재 화면 진행 가능, 화면 최초 진입시 체크용도의 분기, 사용 안 할 수도 있음
                break;
            case 201: // 생성 완료
                router.replace('/byeol/me');
                break;
            case 400: // 이미 별을 소유중 또는 잘못된 값을 서버에 전송
                router.replace('/byeol/me');
                break;
            case 409: // 별 이름 중복
                break;
            case 401: // 비 인가된 사용자
                router.replace('/sign-in');
                break;
        }
    }

    return (
        <form
            className="flex flex-col justify-between h-full"
            onSubmit={handleSubmit}
        >
            <div>
                <ByeolNameInput setIsNameAvailable={setIsNameAvailable} ref={ref}/>
                <BirthdaySelect setIsSelectedBirthday={setIsSelectedBirthday}/>
            </div>
            <Button activate={!isNameAvailable || !isSelectedBirthday}/>
        </form>
    )
}
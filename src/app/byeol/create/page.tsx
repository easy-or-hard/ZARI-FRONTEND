'use client'

import byeolFetcher from "@/services/byeol/byeol.fetcher";
import {useRouter} from "next/navigation";
import ByeolNameInput from "@/components/byeol/byeolNameInput";
import BirthdaySelect from "@/components/byeol/birthday.select";
import React, {useCallback, useState} from "react";
import {EnableButton} from "@/components/button/enableButton";
import {ZariError} from "@/services/common/fetcher";

export default function CreatePage() {
    const router = useRouter();
    const [isNameAvailable, setIsNameAvailable] = useState(false);
    const [isSelectedBirthday, setIsSelectedBirthday] = useState(false);

    const join = useCallback(async (form: FormData) => {
        const {key, fetcher} = byeolFetcher.createFetcher(form);
        try {
            // 가입 성공시에는 반환 데이터가 없기 때문에 메소드 실행만 합니다.
            await fetcher(key);
            router.replace(`/byeol/me`);
        } catch (error) {
            // 가입 실패
            if (error instanceof ZariError) {
                switch (error.statusCode) {
                    case 400: // 이미 별이 있는 유저
                        router.replace('/byeol/me');
                        break;
                    case 401: // 인증되지 않은 유저
                        router.replace('/auth/sign-in');
                        break;
                    case 409: // 중복된 이름
                        // TODO, 이름이 중복되었을 때 어떻게 처리할까? 이름이 중복 되었습니다. 토스트를 띄울까?
                        break;
                    default:
                        console.error(error);
                        throw error;
                }
            }
        }
    }, [router]);

    return (
        <form
            className="h-full p-4 flex flex-col justify-between"
            action={join}
        >
            <div>
                <ByeolNameInput setIsNameAvailable={setIsNameAvailable}/>
                <BirthdaySelect setIsSelectedBirthday={setIsSelectedBirthday}/>
            </div>
            <EnableButton enabled={isNameAvailable && isSelectedBirthday} type='submit'>자리 만들기!</EnableButton>
        </form>
    );
}
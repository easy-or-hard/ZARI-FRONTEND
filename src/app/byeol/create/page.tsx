'use client'

import ByeolService from "@/services/byeol/byeol.service";
import {useRouter} from "next/navigation";
import ByeolNameInput from "@/components/byeol/byeolNameInput";
import BirthdaySelect from "@/components/byeol/birthday.select";
import React, {useCallback, useState} from "react";
import {EnableButton} from "@/components/button/enableButton";

export default function CreatePage() {
    const router = useRouter();
    const [isNameAvailable, setIsNameAvailable] = useState(false);
    const [isSelectedBirthday, setIsSelectedBirthday] = useState(false);

    const join = useCallback(async (form: FormData) => {
        const {response, responseJson} = await ByeolService.createFetcher(form);

        if (!response.ok) {
            console.info('statusCode: ', responseJson.statusCode)
            console.info('message: ', responseJson.message)

            router.replace('/byeol/me');
            return;
        }

        router.replace('/byeol/me');
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
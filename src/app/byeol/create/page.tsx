'use client'

import ByeolService from "@/services/byeol/byeol.service";
import {useRouter} from "next/navigation";
import ByeolNameInput from "@/components/byeol/byeolNameInput";
import BirthdaySelect from "@/components/byeol/birthday.select";
import {Button} from "@/components/confirm/button";
import React, {useCallback, useState} from "react";

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
    }, []);

    return (
        <form
            className="h-full p-4 flex flex-col justify-between"
            action={join}
        >
            <div>
                <ByeolNameInput setIsNameAvailable={setIsNameAvailable}/>
                <BirthdaySelect setIsSelectedBirthday={setIsSelectedBirthday}/>
            </div>
            <Button activate={isNameAvailable && isSelectedBirthday}/>
        </form>
    );
}
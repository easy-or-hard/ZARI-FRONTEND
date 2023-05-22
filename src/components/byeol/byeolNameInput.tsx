'use client'

import React, {useCallback, useEffect, useState} from "react";
import ByeolService from "@/services/byeol/byeol.service";

type ByeolNameInputProps = {
    setIsNameAvailable: (isAvailable: boolean) => void;
}

export default function ByeolNameInput({setIsNameAvailable}: ByeolNameInputProps) {
    const [name, setName] = useState('');
    const [namingGuide, setNamingGuide] = useState({
        message: '',
        color: '#FFFFFF'
    });

    const isNameAvailable = useCallback(async (_name: string) => {
        if (!_name) {
            setNamingGuide({
                message: '',
                color: '#FFFFFF'
            });
            return
        }

        const {response, responseJson} = await ByeolService.isNameAvailableFetcher(_name);

        if (!response.ok) {
            setNamingGuide({
                message: responseJson.message,
                color: '#FF416E'
            });
            setIsNameAvailable(false);
        } else {
            setNamingGuide({
                message: responseJson.message,
                color: '#00E577'
            });
            setIsNameAvailable(true);
        }
    }, []);

    useEffect(() => {
        isNameAvailable(name);
    }, [name])

    return (
        <div className={'flex flex-col mb-8'}>
            <div className={'text-center mb-8 text-suit text-2xl font-bold leading-relaxed'}>
                별님의 이름과 생일을 알려주세요
            </div>
            <input
                className={`bg-[#3A2B4D] p-4 rounded-xl block w-full`}
                type={'text'}
                name={'name'}
                value={name}
                placeholder={'별님의 이름은 무엇인가요?'}
                onChange={(e) =>
                    setName(e.target.value.replace(/\s/g, ''))}
                required
                maxLength={8}
                minLength={2}
            />
            <div className={'h-4 text-sm px-4 mt-1'}
                 style={{color: namingGuide.color}}
            >
                {namingGuide.message}
            </div>
        </div>
    )
}

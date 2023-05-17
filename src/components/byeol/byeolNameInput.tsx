'use client'

import React, {ForwardedRef, forwardRef, useEffect, useState} from "react";
import ByeolService from "@/service/byeol/byeol.service";

type ByeolNameInputProps = {
    setIsNameAvailable: (isAvailable: boolean) => void;
}

const ByeolNameInput =
    forwardRef(function ByeolNameInput({setIsNameAvailable}: ByeolNameInputProps, ref: ForwardedRef<HTMLInputElement>) {
        const [name, setName] = useState('');
        const [namingGuide, setNamingGuide] = useState('');
        const [namingGuideColor, setNamingGuideColor] = useState('#FFFFFF');

        useEffect(() => {
            let namingGuide: string = '';
            let namingGuideColor: string = '#FFFFFF';
            let isNameAvailable: boolean = false;
            const fetchNameAvailability = async () => {
                if (!name) {return}

                const {key, fetcher} = ByeolService.isNameAvailableFetcher(name);
                const response = await fetcher(key);

                switch (response?.statusCode) {
                    case 409:
                        namingGuide = response?.message;
                        namingGuideColor = '#FAB402';
                        break;
                    case 400:
                        namingGuide = response?.message;
                        namingGuideColor = '#FF416E';
                        break;
                    case 200:
                        isNameAvailable = true;
                        namingGuide = response?.message;
                        namingGuideColor = '#00E577';
                        break;
                }
            };

            fetchNameAvailability()
                .then(() => {
                    setIsNameAvailable(isNameAvailable);
                    setNamingGuide(namingGuide);
                    setNamingGuideColor(namingGuideColor);
                });
        }, [name, setIsNameAvailable]);

        return (
            <div className={'flex flex-col mb-8'}>
                <div className={'text-center mb-8 text-suit text-2xl font-bold leading-relaxed'}>
                    별님의 이름과 생일을 알려주세요
                </div>
                <input
                    className={`bg-[#3A2B4D] p-4 rounded-xl block w-full`}
                    type={'text'}
                    ref={ref}
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
                     style={{color: namingGuideColor}}
                >
                    {namingGuide}
                </div>
            </div>
        )
    });

export default ByeolNameInput;
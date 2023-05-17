'use client'

import {ForwardedRef, forwardRef, useEffect, useState} from "react";

type Props = {
    setIsSelectedBirthday: (value: boolean) => void;
}

const getLastDayInMonth = (month: number) => {
    switch (+month) {
        case 0:
            return 0;
        case 2:
            return 29;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        default:
            return 31;
    }
}

// TODO, ref는 포커스를 이동할 때 사용하려고 넣어뒀습니다.
const BirthdaySelect =
    forwardRef(function BirthdaySelect({setIsSelectedBirthday}: Props, ref: ForwardedRef<HTMLInputElement>) {
        const [birthMonth, setBirthMonth] = useState(0);
        const [birthDay, setBirthDay] = useState(0);

        useEffect(() => {
            if (birthMonth && birthDay) {
                setIsSelectedBirthday(true);
            }
        }, [birthMonth, birthDay, setIsSelectedBirthday]);

        return (
            <div className={'flex flex-col my-4'}>
                <div className={'mb-4 text-base font-medium leading-6'}>생일은 언제인가요?</div>
                <div className="flex flex-row justify-between mb-8">
                    <select className="w-full mr-2 bg-[#3A2B4D] p-4 rounded-xl border-4 border-[#3A2B4D]"
                            name={'birthMonth'}
                            value={birthMonth}
                            onChange={(e) => setBirthMonth(+e.target.value)}>
                        <option value='0' disabled>월</option>
                        {Array.from({length: 12}, (_, i) => i + 1).map(month => (
                            <option key={month} value={month}>{month}</option>
                        ))}
                    </select>
                    <select className="w-full ml-2 bg-[#3A2B4D] p-4 rounded-xl border-4 border-[#3A2B4D]"
                            name={'birthDay'}
                            value={birthDay}
                            onChange={(e) => setBirthDay(+e.target.value)}>
                        <option value='0' disabled>일</option>
                        {Array.from({length: getLastDayInMonth(birthMonth)},
                            (_, i) => i + 1)
                            .map(day => (
                                <option key={day} value={day}>{day}</option>
                            ))}
                    </select>
                </div>
            </div>
        )
    });

export default BirthdaySelect;
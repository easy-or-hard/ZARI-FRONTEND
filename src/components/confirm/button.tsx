'use client'

type Props = {
    activate: boolean;
}

export function Button({activate}: Props) {
    return (
        <button
            className={`w-full p-4 rounded-xl 
                ${activate
                ? 'bg-buttonActivated'
                : 'bg-buttonDisabled'}`}
            type='submit'
            disabled={!activate}
        >확인
        </button>
    )
}

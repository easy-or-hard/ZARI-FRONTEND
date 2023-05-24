import React from 'react';

type Props = {
    children: React.ReactNode;
    enabled?: boolean;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

export function EnableButton({children, onClick, type= 'button', enabled = true}: Props) {
    return (
        <button className={
            `px-10 py-3 rounded-2xl 
        ${enabled ? 'bg-zari_primary' : 'bg-zari_btn_disabled'}`
        }
                type={type}
                onClick={onClick}
                disabled={!enabled}
        >
            {children}
        </button>
    )
}
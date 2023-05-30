import React from 'react';

type Props = {
    children: React.ReactNode;
    className?: string;
    enabled?: boolean;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

export function EnableButton({children, className, onClick, type= 'button', enabled = true}: Props) {
    return (
        <button className={
            `px-10 py-3 rounded-lg w-full
        ${enabled ? 'bg-zari_primary' : 'bg-zari_btn_disabled'}
        ${className}`
        }
                type={type}
                onClick={onClick}
                disabled={!enabled}
        >
            {children}
        </button>
    )
}

import React from "react";

type Props = {
    children: React.ReactNode;
    onClick?: () => void;
}

export function DangerButton({children, onClick}: Props) {
    return (
        <button className="px-10 py-3 rounded-2xl bg-zari_danger"
        onClick={onClick}>
            {children}
        </button>
    )
}
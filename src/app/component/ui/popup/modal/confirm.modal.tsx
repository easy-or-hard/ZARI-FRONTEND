'use client'

import {BaseModalContext} from "@/app/component/ui/popup/modal.provider";
import {ReactNode, useCallback, useContext, useMemo} from "react";
import {CancelButton} from "@/app/component/button/cancel.button";
import {EnableButton} from "@/app/component/button/enableButton";

type Props = {
    children: ReactNode;
    onConfirm: () => void;
    cancel?: string;
    confirm?: string;
}
export default function ConfirmModal({ children, onConfirm, cancel = '취소', confirm = '확인' }: Props) {
    const baseModalContext = useContext(BaseModalContext);
    if (!baseModalContext) {
        throw new Error('BaseModalContext is null');
    }
    const {closeModal} = useMemo(() => baseModalContext, [baseModalContext]);

    const handleConfirm = useCallback(() => {
        onConfirm();
        closeModal();
    }, [closeModal, onConfirm]);

    return (
        <div>
            <div className='mb-4'>
            {children}
            </div>
            <div className='grid grid-cols-2 gap-2'>
                <CancelButton onClick={closeModal}>{cancel}</CancelButton>
                <EnableButton onClick={handleConfirm}>{confirm}</EnableButton>
            </div>
        </div>
    )
}
"use client";
import { LoadingSvg } from '@/@svg/loading';
import React from 'react';

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    childrend?: string | React.ReactNode;
    isLoading?: boolean
}


const PrimaryButton = (props: PrimaryButtonProps) => {
    const { children, className, isLoading, ...att } = props;
    return (
        <button disabled={isLoading} type="button" className={`text-white hover:opacity-90 rounded-lg text-xs md:text-sm cursor-pointer ${className ?? ''}`} {...att}>
            {
                isLoading ? <LoadingSvg /> : children
            }
        </button>
    )
}

export default PrimaryButton;
"use client";
import { useState } from "react";

interface FavoriteIconProps{
    id: string | number;
    initialStatus?: boolean;
    className?: string
}

export const FavoriteIcon = (props: FavoriteIconProps) => {
    const { id, initialStatus, className } = props;
    const [status, setStatus] = useState(initialStatus ?? false);

    return <button onClick={() => setStatus(!status)} type="button" className={`inline-flex items-center text-sm font-medium text-gray-500 hover:underline hover:scale-125 ${className}`}>
        <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path className={`${status ? 'text-red-700' : 'text-gray-700'}`} stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
        </svg>
    </button>
}
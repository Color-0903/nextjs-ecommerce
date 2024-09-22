"use client";
import React from 'react';

interface CustomTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string | React.ReactNode;
    error?: string | React.ReactNode;
}

const CustomTextArea = (props: CustomTextareaProps) => {
    const { className, label, error, rows, ...att } = props;

    return (
        <>
            {!!label && <label htmlFor={att.placeholder} className="block mb-2 text-sm font-bold text-gray-700">{label}</label>}
            {
                <div className="relative">
                    <textarea id="message" rows={rows ?? 3} className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-purple-500  ${className ?? ''}`} placeholder="Write your thoughts here..." {...att}></textarea>
                </div>
            }
            {
                !!error && <span className="text-sm text-orange-500">{error}</span>
            }

        </>

    )
}

export default CustomTextArea;
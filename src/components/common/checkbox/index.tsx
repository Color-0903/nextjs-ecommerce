"use client";
import React, { useState } from 'react';

interface CustomCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    isPassword?: boolean;
    label?: string | React.ReactNode;
}

const CustomCheckbox = () => {
    return (
        <div className="flex items-start">
            <div className="flex items-center h-5">
                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50" />
            </div>
            <div className="ml-3 text-sm">
                <label htmlFor="remember" className="text-gray-500">Ghi nhớ</label>
            </div>
        </div>
    )
}
export default CustomCheckbox;
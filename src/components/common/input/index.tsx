"use client";
import React, { useState } from 'react';

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    isPassword?: boolean;
    label?: string | React.ReactNode;
    error?: string | React.ReactNode;
}

const CustomInput = (props: CustomInputProps) => {
    const { isPassword, className, label, error, ...att } = props;
    const [togglePass, setTogglePass] = useState(false);

    return (
        <>
            {!!label && <label htmlFor={att.placeholder} className="block mb-2 text-sm font-bold text-gray-700">{label}</label>}
            {
                !isPassword ?
                    <input className={`bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm rounded-md focus:border-purple-500 block w-full p-2.5 ${className ?? ''}`} placeholder={att.placeholder} {...att} />
                    :
                    <div className="relative">
                        <input type={togglePass ? 'text' : 'password'} security="false" placeholder="••••••••" className={`bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm rounded-md focus:border-purple-500 block w-full p-2.5 ${className ?? ''}`} {...att} />
                        <span className="absolute inset-y-0 right-0 flex items-center cursor-pointer pr-2" onClick={() => setTogglePass(!togglePass)}>
                            {
                                !togglePass ?
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                    </svg> :
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                            }
                        </span>
                    </div>
            }
            {
                !!error && <span className="text-sm text-orange-500">{error}</span>
            }

        </>

    )
}

export default CustomInput;
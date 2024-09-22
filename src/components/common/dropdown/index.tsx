"use client";
import React, { useState } from 'react';
import CustomInput from '../input';

interface ItemSelect {
    id: number | string;
    label: number | string
}

interface CustomDropdownProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string | React.ReactNode;
    error?: string | React.ReactNode;
    handleChange: (value: string | number) => void;
}

const CustomDropdown = (props: CustomDropdownProps) => {
    const { className, label, error, handleChange, ...att } = props;
    const [dropdow, setDropdow] = useState<{ hidden: boolean, select: ItemSelect | undefined }>({ hidden: true, select: undefined });

    const handleSelectDropdown = () => {
        setDropdow((prev) => { return { ...prev, hidden: !prev.hidden } });
    }

    const handleSelectItem = (item: ItemSelect | any) => {
        setDropdow({ hidden: true, select: item });
        handleChange(item);
    };

    return (
        <>
            {!!label && <label htmlFor={att.placeholder} className="block mb-2 text-sm font-bold text-gray-700">{label}</label>}
            <CustomInput value={dropdow.select?.label} type="text" id="province" onClick={handleSelectDropdown} />
            <div id="dropdownUsers" className="z-10 bg-white rounded-lg shadow w-full" hidden={!!dropdow.hidden}>
                <ul className="h-48 py-2 overflow-y-auto text-gray-700  scrollbar-custom mt-4" aria-labelledby="dropdownUsersButton">
                    <li onClick={() => handleSelectItem({ id: 1, label: 'Tan hihi' })}>
                        <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 ">
                            <img className="w-6 h-6 me-2 rounded-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="Jese image" />
                            Jese Leos
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 ">
                            <img className="w-6 h-6 me-2 rounded-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="Jese image" />
                            Robert Gough
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 ">
                            <img className="w-6 h-6 me-2 rounded-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="Jese image" />
                            Bonnie Green
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 ">
                            <img className="w-6 h-6 me-2 rounded-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="Jese image" />
                            Leslie Livingston
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 ">
                            <img className="w-6 h-6 me-2 rounded-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="Jese image" />
                            Leslie Livingston
                        </a>
                    </li>
                </ul>
            </div>
            {
                !!error && <span className="text-sm text-orange-500">{error}</span>
            }

        </>

    )
}

export default CustomDropdown;
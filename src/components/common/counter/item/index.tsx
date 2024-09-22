"use client";
import { useState } from "react";

interface CounterItemProps {
    id: string | number;
    initialValue?: number;
}
enum Status {
    increase = 'increase',
    decrease = 'decrease',
    custom = 'custom'
}

export const CounterItem = (props: CounterItemProps) => {
    const { id } = props;
    const [value, setValue] = useState<number | string>(props?.initialValue ?? 1);

    const handlechange = (status: Status, _value?: number | string) => {
        switch (status) {
            case Status.decrease:
                setValue((prev) => (+prev - 1) > 1 ? (+prev - 1) : 1);
                break;
            case Status.increase:
                setValue((prev) => +prev + 1);
                break;
            default:
                console.log(_value)
                if (_value && typeof +_value === 'number' && +_value > 0) {
                    setValue(_value);
                }
                break;
        }
    }

    return <div className="flex items-center">
        <button onClick={() => handlechange(Status.decrease)} type="button" id="decrement-button" data-input-counter-decrement="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <svg className="h-2.5 w-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
            </svg>
        </button>
        <input onChange={(e) => handlechange(Status.custom, e?.target?.value)} type="text" id="counter-input" data-input-counter className="w-14 shrink-0 border-0 bg-transparent text-center text-sm font-bold font-medium text-gray-900 focus:outline-none focus:ring-0 color-primary" placeholder="" value={value} required />
        <button onClick={() => handlechange(Status.increase)} type="button" id="increment-button" data-input-counter-increment="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <svg className="h-2.5 w-2.5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
            </svg>
        </button>
    </div>
}
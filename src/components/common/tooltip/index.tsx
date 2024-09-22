import React from "react";

export interface TooltipInterface {
    title: string;
    pattern: React.ReactNode;
}

const CustomTooltip = (props: TooltipInterface) => {
    const { title, pattern } = props;

    return <div>
        <div className="group flex relative">
            <div className="group-hover:opacity-100 opacity-0 transition-opacity bg-gray-50 px-2 pb-1 mb-3 text-sm text-gray-700 shadow-sm border rounded-md absolute left-1/2 -translate-x-1/2 -translate-y-full mx-auto w-max max-w-48">{title}</div>
            <span className="mt-2">{pattern}</span>
        </div>
    </div>
}

export default CustomTooltip;
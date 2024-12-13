import React, { useState } from "react";

export interface TooltipInterface {
    title: string;
    pattern: React.ReactNode;
    className?: string;
}

const CustomTooltip = (props: TooltipInterface) => {
    const { title, pattern, className } = props;
    const [tooltip, setTooltip] = useState<{ status: boolean }>({ status: false });


    const handleHover = (type: string) => {
        if (type == "mouseover") {
            setTooltip({ status: true });

        } else {
            setTooltip({ status: false });

        }
    }

    return <div>
        <div className={`group flex relative ${ className }`}>
            <div className="transition-opacity bg-gray-50 px-2 pb-1 mb-3 text-sm text-gray-700 shadow-sm border rounded-md absolute left-1/2 -translate-x-1/2 -translate-y-full mx-auto w-max max-w-48" hidden={!tooltip.status}>{title}</div>
            <span className="mt-2" onMouseOver={(e) => handleHover(e?.type)} onMouseOut={(e) => handleHover(e?.type)}>{pattern}</span>
        </div>
    </div>
}

export default CustomTooltip;
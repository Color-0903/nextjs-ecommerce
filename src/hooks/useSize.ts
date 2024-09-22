"use client"
import { useEffect, useState } from "react";
import { WINDOW_SIZE } from "../constants/ThemeSetting";

export type Size = {
    width: number;
    height: number;
};

const useSize = () => {
    const [windowSize, setWindowSize] = useState<Size>({
        width: (typeof window !== 'undefined') ? window?.innerWidth : WINDOW_SIZE.PC_SMALL,
        height: (typeof window !== 'undefined') ? window?.innerHeight : WINDOW_SIZE.PC_SMALL,
    });

    useEffect(() => {
        const windowSizeHandler = () => {
            setWindowSize({
                width: window?.innerWidth,
                height: window?.innerHeight,
            });
        };
        window?.addEventListener("resize", windowSizeHandler);
        window?.addEventListener("load", windowSizeHandler);

        return () => {
            window?.removeEventListener("resize", windowSizeHandler);
            window?.removeEventListener("load", windowSizeHandler);
        };
    }, []);
    return windowSize;
};

export default useSize;

"use client"

import { initFlowbite } from 'flowbite';
import React, { useEffect } from "react";
import HomeFooter from "./footer";
import HomeHeader from "./header";

export default function HomeLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    useEffect(() => {
        initFlowbite();
    }, []);

    return (
        <>
            <HomeHeader></HomeHeader>
            {children}
            <HomeFooter></HomeFooter>
        </>
    )
}
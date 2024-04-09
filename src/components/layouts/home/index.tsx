import React from "react";
import '../../../styles/globals.css';
import HomeFooter from "./footer";
import HomeHeader from "./header";

export default function HomeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <HomeHeader></HomeHeader>
            {children}
            <HomeFooter></HomeFooter>
        </>
    )
}
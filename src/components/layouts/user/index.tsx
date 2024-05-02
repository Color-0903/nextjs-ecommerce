"use client"

import React from "react";
import UserHeader from "./header";
import UserFooter from "./footer";

export default function UserLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <>
            <UserHeader></UserHeader>
            <div className="mt-24 md:mt-28">
            {children}
            </div>
            <UserFooter></UserFooter>
        </>
    )
}
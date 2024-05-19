"use client"

import React from "react";
import Layout from "..";
import HomeFooter from "./footer";
import HomeHeader from "./header";

export default function HomeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <Layout>
                <HomeHeader></HomeHeader>
                <div className="mt-48">
                    {children}
                </div>
                <HomeFooter></HomeFooter>
            </Layout>
        </>
    )
}
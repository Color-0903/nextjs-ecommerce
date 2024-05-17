"use client"

import { initFlowbite } from 'flowbite';
import { usePathname } from 'next/navigation';
import React, { useEffect } from "react";
import { ConfirmModal } from '../modal/confirmModel';
import Nofification from '../notification';
import NofificationWrap from '../notification/notification-wrap';
import HomeLayout from './home';
import UserLayout from './user';

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    const pathname = usePathname();
    useEffect(() => {
        initFlowbite();
    }, []);

    return (
        <>
            {
                pathname.includes('dashboard') ? <UserLayout> {children} </UserLayout> : <HomeLayout> {children} </HomeLayout>
            }
            <ConfirmModal />
          
        </>
    )
}
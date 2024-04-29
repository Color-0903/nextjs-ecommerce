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
            {/* <Spinner isLoading={true} children={<div>ok</div>} /> */}
            <NofificationWrap >
                <Nofification type='toast-success' content='Phạm Trường Tân' />
                <Nofification type='toast-danger' content='Phạm Trường Tân danger' />
                <Nofification type='toast-warning' content='Phạm Trường Tân warning' />
            </NofificationWrap>
        </>
    )
}
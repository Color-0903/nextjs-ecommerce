"use client"
import { authUserApi } from '@/apis';
import { AuthRecoil, CartRecoli } from '@/storage/authRecoil';
import { setToken } from '@/utils/localStorage';
import { useMutation } from '@tanstack/react-query';
import { initFlowbite } from 'flowbite';
import React, { useEffect } from "react";
import { useRecoilState } from 'recoil';

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    const [auth, setAuth] = useRecoilState(AuthRecoil);
    const [cart, setCart] = useRecoilState(CartRecoli);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!!token && !auth) {
            setToken(token)
            AuthMe();
        }
        let carts = localStorage?.getItem('carts') ? JSON.parse(localStorage?.getItem('carts') || "") : [];
        setCart(carts);
        initFlowbite();
    }, []);

    const { mutate: AuthMe, isPending: isAuthMe } = useMutation({
        mutationFn: () => authUserApi.authUserControllerMe(),
        onSuccess: (data: any) => {
            setAuth(data?.data);
        },
        onError: (error: any) => {
            console.log(error);
        },
    })

    return (
        <>
            {children}
        </>
    )
}

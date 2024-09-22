"use client";
import '@/styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { initFlowbite } from 'flowbite';
import { useEffect } from 'react';
import { RecoilRoot } from 'recoil';

export default function AppProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const queryClient = new QueryClient();


    return (
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </RecoilRoot>
    );
}

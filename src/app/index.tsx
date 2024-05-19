"use client";
import '@/styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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

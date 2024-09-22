
"use client";
import { useQueryMeApi } from '@/hooks/useAuth';
import { AuthRecoil } from '@/storage/authRecoil';
import { Fragment } from 'react';
import { useRecoilState } from 'recoil';

const AuthComponent = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [auth, setAuth] = useRecoilState<any>(AuthRecoil);
    if (typeof window !== "undefined" && localStorage.getItem('token')) {
        const authMe = useQueryMeApi();

        if (authMe) {
            setAuth(authMe);
        }
    }

    return (
        <Fragment>
            {children}
        </Fragment>
    )
}
export default AuthComponent;
"use client";
import { USER_ROUTER } from '@/constants/router';
import { AuthSelector } from '@/storage/authRecoil';
import { Helper } from '@/utils/helper';
import { useRouter } from 'next/navigation';
import { Fragment, useState } from 'react';
import { useRecoilValue } from 'recoil';

const LoginStatus = () => {
    const { push } = useRouter();
    const authSelector = useRecoilValue(AuthSelector);
    const [showDropdow, setShowDropdow] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("token");
        push(USER_ROUTER.SIGNIN);
    }
    return (
        <Fragment>
            {
                !authSelector ?
                    <>
                        <div className="divide-x flex justify-end">
                            <a href={USER_ROUTER.SIGNIN} className="color-primary font-bold text-right rounded-lg text-sm pe-2">Đăng nhập</a>
                            <a href={USER_ROUTER.SIGNUP} className="color-primary font-bold text-right rounded-lg text-sm ps-2">Đăng ký</a>
                        </div>
                    </>
                    :
                    <div className="flex items-center lg:order-2">
                        <div className="hidden md:block">
                            <span className="mr-2">{authSelector?.displayName ?? authSelector?.identifier}</span>
                        </div>
                        <div className="relative">
                            <img id="avatarButton" onClick={() => setShowDropdow(!showDropdow)} data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" className="w-8 h-8 rounded-full cursor-pointer" src={Helper.ViewSource(authSelector?.asset?.source)} alt=".." />
                            {
                                showDropdow &&
                                <div id="userDropdown" className="z-10 absolute mt-10 right-0 top-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                                        <li>
                                            <a href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Tài khoản</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Đổi mật khẩu</a>
                                        </li>
                                    </ul>
                                    <div className="py-1" onClick={handleLogout}>
                                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <svg className="flex-shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                                            </svg>
                                            <span className="flex-1 text-sm ms-3 whitespace-nowrap">Đăng xuất</span>
                                        </a>
                                    </div>
                                </div>
                            }

                        </div>
                    </div>
            }
        </Fragment>
    )
}
export default LoginStatus;
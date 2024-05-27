"use client";

import { CardIcon } from "@/components/@icon/card";
import Breadcrum from "@/components/breadcrumb";
import { LisCart } from "@/components/cart/list-cart";
import { AuthRecoil } from "@/storage/authRecoil";
import { Helper } from "@/utils/helper";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useRecoilState } from "recoil";

export default function HomeHeader() {
    const { push } = useRouter();
    const [isShowCart, setIsShowCart] = useState(false);
    const [auth, setAuth] = useRecoilState<any>(AuthRecoil);

    const handleLogout = () => {
        setAuth('');
        localStorage.removeItem("token");
        push('auth/login');
    }


    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <nav className="bg-gray-50 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className=" mx-auto max-w-screen-xl">
                    <div className="flex items-center justify-between mt-5">
                        <div>
                            <Breadcrum />
                        </div>
                        <div className="flex items-center lg:order-2">
                            {
                                !auth ?
                                    <>
                                        <div className=" hidden md:grid grid-cols-2 divide-x">
                                            <a href="/auth/login" className="text-orange-500 dark:text-white hover:text-orange-400 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-1 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Đăng nhập</a>
                                            <a href="/auth/register" className="text-orange-500 dark:text-white hover:text-orange-400 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-1 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Đăng ký</a>
                                        </div>
                                        <a href="/auth/login" className="block md:hidden text-orange-500 dark:text-white hover:text-orange-400 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm ">Đăng nhập</a>
                                    </>
                                    :
                                    <div className="flex items-center lg:order-2">
                                        <div className="hidden md:block">
                                            <span className="mr-2">{auth?.displayName ?? auth?.identifier}</span>
                                        </div>
                                        <div>
                                            <img id="avatarButton" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" className="w-10 h-10 rounded-full cursor-pointer" src={Helper.ViewSource(auth?.asset?.source)} alt="User dropdown" />
                                            <div id="userDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                                    <div className="font-medium truncate">{auth?.displayName ?? auth?.identifier}</div>
                                                </div>
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
                                        </div>
                                    </div>
                            }
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between items-center mt-5">
                        <a href="#" className="hidden sm:flex items-center pr-2">
                            <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Color Logo" />
                            <span className="self-center text-xl whitespace-nowrap font-extrabold text-orange-500 dark:text-white">Color-Ecommerce</span>
                        </a>

                        <form className="max-w-4xl mx-auto flex-1">
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="Search Mockups, Logos..." required />
                                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-orange-500 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-orange-500 dark:hover:bg-orange-500 dark:focus:ring-orange-500">Search</button>
                            </div>
                        </form>
                        <div className="hidden md:block pl-2" onClick={() => setIsShowCart(true)}>
                            <CardIcon />
                        </div>

                        <button onClick={() => setIsShowCart(true)} type="button" className="md:hidden fixed bottom-20 right-2 rounded-full  shadow-xl text-white bg-orange-500 hover:bg-orange-400 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium text-sm text-center mb-2 dark:bg-orange-500 dark:hover:bg-orange-500 dark:focus:ring-purple-900">
                            <CardIcon />
                        </button>
                    </div>

                </div>
            </nav>

            {isShowCart && <LisCart isShowCart={isShowCart} setIsShowCart={setIsShowCart} />}
        </header>
    )
}

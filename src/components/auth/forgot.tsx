import { useState } from "react";

export const ForgotForm = () => {

    const [submitCode, setSubmitCode] = useState(false);

    return <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg border shadow-xl dark:border md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8  ">
                    <a className="flex items-center justify-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-32 h-32 mr-2" src="http://localhost:3000/images/logo/logo.png" alt="logo" />
                    </a>
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-orange-700 md:text-2xl dark:text-white">
                        Quên mật khẩu
                    </h1>
                    <form className="space-y-4 md:space-y-6 pt-3" action="#">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-orange-700 dark:text-white">Email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email " />
                        </div>
                        <div className="text-right pt-2">
                            <button onClick={() => setSubmitCode(true)} data-modal-hide="popup-modal" type="button" className="w-full py-3 text-sm font-medium text-white bg-orange-500 focus:outline-none rounded-lg border border-gray-200 hover:bg-orange-400 focus:z-10 focus:ring-4 focus:ring-gray-100">
                                Xác nhận
                            </button>
                        </div>
                        {
                            submitCode &&
                            <div id="popup-modal" className="flex bg-white overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                                <div className="relative m-auto p-4 w-full max-w-md max-h-full">
                                    <div className="relative bg-white rounded-lg shadow-xl border dark:bg-gray-700">
                                        <button onClick={() => setSubmitCode(false)} type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                            </svg>
                                            <span className="sr-only">Close modal</span>
                                        </button>
                                        <div className="p-4 md:p-5 text-center">
                                            <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>
                                            <div>
                                                <label htmlFor="otp" className="block mb-2 text-sm font-medium text-orange-700 dark:text-white text-left">Nhập mã OTP</label>
                                                <input type="email" name="otp" id="otp" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="OTP Code" />
                                            </div>
                                            <div className="mt-3 text-right">
                                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                                    Chưa nhận được mã OTP? <a href="/auth/forgot" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 text-orange-700">Gửi lại?</a>
                                                </p>
                                            </div>
                                            <div className="mt-5">
                                                <button data-modal-hide="popup-modal" type="button" className="w-full py-3 text-sm font-medium text-white bg-orange-500 focus:outline-none rounded-lg border border-gray-200 hover:bg-orange-400 focus:z-10 focus:ring-4 focus:ring-gray-100">
                                                    Xác nhận
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }

                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Quay lại đăng nhập? <a href="/auth/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Đăng nhập</a>
                        </p>
                    </form>
                </div>
            </div>
        </div >


    </section >
}
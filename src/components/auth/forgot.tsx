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
                        {/* <OtpConfirm submitCode={submitCode} setSubmitCode={setSubmitCode} /> */}
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Quay lại đăng nhập? <a href="/auth/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Đăng nhập</a>
                        </p>
                    </form>
                </div>
            </div>
        </div >


    </section >
}
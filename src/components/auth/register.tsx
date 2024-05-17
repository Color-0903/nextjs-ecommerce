import { authUserApi, otpApi } from "@/apis";
import { CreateOtpDto } from "@/apis/client-axios";
import { Validates } from "@/utils/validate";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useState } from "react";
import Nofification from "../notification";
import Spinner from "../spinner";
import { OtpConfirm } from "./otp-confirm";
export const RegisterForm = () => {
    const [toggle, setToggle] = useState({ password: false, confirm: false });
    const [submitCode, setSubmitCode] = useState(false);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfirm: ''
        },
        validate: (values) => {
            const errors: any = {};
            if (!Validates.isEmail(values?.email)) {
                errors.email = 'Trường này phải là email!';
            }
            else if (!Validates.isPassword(values?.password)) {
                errors.password = 'Mật khẩu bao gồm ít nhất 8 kí tự và tối thiểu 1 kí tự đặc biệt!';
            }
            else if (!Validates.isPassword(values?.passwordConfirm)) {
                errors.passwordConfirm = 'Mật khẩu bao gồm ít nhất 8 kí tự và tối thiểu 1 kí tự đặc biệt!';
            }
            else if (values.password !== values.passwordConfirm) {
                errors.passwordConfirm = 'Mật khẩu nhập lại không chính xác!';
            }
            return errors;
        },
        onSubmit: (values) => {
            mutate({ identifier: values?.email });
            setSubmitCode(true);
        },
    });


    const { mutate, isPending } = useMutation({
        mutationFn: (dto: CreateOtpDto) => otpApi.otpControllerSendOtp(dto),
        onSuccess: (data: any) => {
            return <Nofification type='toast-success' content='Đăng ký tài khoản thành công!' />
        },
        onError: (error: any) => {
            console.log(error);
        },
    })
    const { mutate: RegisterMutate, isPending: isPendingRegister } = useMutation({
        mutationFn: (dto: CreateOtpDto) => authUserApi.authUserControllerUserRegister(),
        onSuccess: (data: any) => {
            console.log(data);
            return <Nofification type='toast-success' content='Đăng ký tài khoản thành công!' />
        },
        onError: (error: any) => {
            console.log(error);
        },
    })

    const onFinish = () => {
        console.log('onFinish')
    }

    return <Spinner isLoading={isPending}>
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg border shadow-xl dark:border md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8  ">
                        <a className="flex items-center justify-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                            <img className="w-32 h-32 mr-2" src="http://localhost:3000/images/logo/logo.png" alt="logo" />
                        </a>
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-orange-700 md:text-2xl dark:text-white">
                            Đăng ký tài khoản
                        </h1>
                        <form className="space-y-4 md:space-y-6 pt-3" action="#" onSubmit={formik.handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-orange-700 dark:text-white">Email</label>
                                <input onChange={formik.handleChange} value={formik.values.email} type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" />
                            </div>
                            <span className="text-sm text-orange-500">{formik?.errors?.email}</span>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-orange-700 dark:text-white">Mật khẩu</label>
                                <div className="relative">
                                    <input onChange={formik.handleChange} value={formik.values.password} type={toggle?.password ? 'text' : 'password'} security="false" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                                    <span className="absolute inset-y-0 right-0 flex items-center cursor-pointer pr-2" onClick={() => setToggle({ ...toggle, password: !toggle.password })}>
                                        {
                                            !toggle?.password ?
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                                </svg> :
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                </svg>
                                        }
                                    </span>
                                </div>
                                <span className="text-sm text-orange-500">{formik?.errors?.password}</span>
                            </div>
                            <div>
                                <label htmlFor="passwordConfirm" className="block mb-2 text-sm font-medium text-orange-700 dark:text-white">Nhập lại khẩu</label>
                                <div className="relative">
                                    <input onChange={formik.handleChange} value={formik.values.passwordConfirm} type={toggle?.confirm ? 'text' : 'password'} security="false" name="passwordConfirm" id="passwordConfirm" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    <span className="absolute inset-y-0 right-0 flex items-center cursor-pointer pr-2" onClick={() => setToggle({ ...toggle, confirm: !toggle.confirm })}>
                                        {
                                            !toggle?.confirm ?
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                                </svg> :
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                </svg>
                                        }
                                    </span>
                                </div>
                            </div>
                            <span className="text-sm text-orange-500">{formik?.errors?.passwordConfirm}</span>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <a href="/auth/forgot" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 text-orange-700">Forgot password?</a>
                            </div>
                            <div className="text-right pt-2">
                                <button data-modal-hide="popup-modal" type="submit" className="w-full py-3 text-sm font-medium text-white bg-orange-500 focus:outline-none rounded-lg border border-gray-200 hover:bg-orange-400 focus:z-10 focus:ring-4 focus:ring-gray-100">
                                    Xác nhận
                                </button>
                            </div>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Đã có tài khoản? <a href="/auth/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            <OtpConfirm submitCode={submitCode} setSubmitCode={setSubmitCode} onFinish={onFinish} identifier={formik.values.email} />
        </section>
    </Spinner>
}
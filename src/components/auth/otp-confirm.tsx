'use client'
import { otpApi } from "@/apis";
import { FilterOtpDto } from "@/apis/client-axios";
import { Validates } from "@/utils/validate";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import Notification from "../notification";
import OTPResendTimer from "../otp/countdow";
import Spinner from "../spinner";
export interface OtpConfirmInterface {
    identifier: string;
    type: 'forgot' | 'register';
    onFinish: () => void;
    submitCode: boolean;
    setSubmitCode: (value: boolean) => void
}

export const OtpConfirm = (props: OtpConfirmInterface) => {
    const { identifier, onFinish, submitCode, setSubmitCode, type } = props;
    const [canResend, setCanResend] = useState(false);

    const formik = useFormik({
        initialValues: {
            otpCode: ''
        },
        validate: (values) => {
            const errors: any = {};
            if (!Validates.isRequired(values?.otpCode)) {
                errors.otpCode = 'Trường này không được bỏ trống!';
            } else if (values?.otpCode?.length != 6) {
                errors.otpCode = 'Mã OTP bao gồm 6 ký tự!';
            }
            return errors;
        },
        onSubmit: (values) => {
            mutate({ code: values.otpCode, identifier: identifier });
        },
    });

    useEffect(() => {
        formik.resetForm();
    }, [])

    const { mutate, isPending } = useMutation({
        mutationFn: (dto: FilterOtpDto) => otpApi.otpControllerVerifyOtp(dto),
        onSuccess: (data: any) => {
            onFinish();
        },
        onError: (error: any) => {
            Notification('Xác nhận OTP thất bại. Vui lòng kiểm tra lại!', 'error')
        },
    });

    const { mutate: ResendOtp, isPending: isPendingResend } = useMutation({
        mutationFn: () => otpApi.otpControllerSendOtp({ identifier: identifier, type: 'register' }),
        onSuccess: (data: any) => {
            Notification('Mã OTP đã được gửi lại tới gmail của bạn!', 'success')
            setCanResend(false);
        },
        onError: (error: any) => {
            Notification('Gửi lại mã OTP thất bại. Vui lòng kiểm tra lại!', 'error')
        },
    });

    return <Spinner isLoading={isPending || isPendingResend}>
        {
            submitCode && <div id="popup-modal" className="flex bg-white overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-40 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative m-auto p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow-xl border dark:bg-gray-700">
                        <button onClick={() => setSubmitCode(false)} type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <form action="#" onSubmit={formik.handleSubmit}>
                            <div className="p-4 md:p-5 text-center">
                                <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <div>
                                    <label htmlFor="otpCode" className="block mb-2 text-sm font-medium text-orange-700 dark:text-white text-left">Nhập mã OTP</label>
                                    <div className="my-2 text-left">
                                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">Vui lòng kiểm tra gmail của bạn!</p>
                                    </div>

                                    <input onChange={formik.handleChange} value={formik.values.otpCode} type="text" name="otpCode" id="otpCode" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="OTP Code" />
                                </div>
                                <div className="text-left">
                                    <span className="text-sm text-orange-500">{formik?.errors?.otpCode}</span>
                                </div>
                                <div className="mt-3 text-right">
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Chưa nhận được mã OTP? <a className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 text-orange-700">
                                            {!canResend ? (
                                                <OTPResendTimer initialSeconds={10} onComplete={() => setCanResend(true)} />
                                            ) : (
                                                <span onClick={() => ResendOtp()}>Gửi lại</span>
                                            )}
                                        </a>
                                    </p>

                                </div>
                                <div className="mt-5">
                                    <button data-modal-hide="popup-modal" type="submit" className="w-full py-3 text-sm font-medium text-white bg-orange-500 focus:outline-none rounded-lg border border-gray-200 hover:bg-orange-400 focus:z-10 focus:ring-4 focus:ring-gray-100">
                                        Xác nhận
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        }
    </Spinner>
}
'use client'
import { otpApi } from "@/apis";
import { CreateOtpDtoTypeEnum, FilterOtpDto } from "@/apis/client-axios";
import { Validates } from "@/utils/validate";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { Fragment, useEffect, useState } from "react";
import OtpInput from 'react-otp-input';
import PrimaryButton from "../common/buttons/primary";
import OTPResendTimer from "./countDown";
import { useRouter } from "next/navigation";
export interface OtpConfirmInterface {
    identifier: string;
    type: string;
    onFinish: () => void;
    submitCode: { status: boolean, value: string, isLoading?: boolean };
    setSubmitCode: (arg: { status: boolean, value: string, isLoading?: boolean }) => void
}

export const OtpConfirm = (props: OtpConfirmInterface) => {
    const { identifier, onFinish, submitCode, setSubmitCode, type } = props;
    const router = useRouter();
    const [canResend, setCanResend] = useState(false);
    const formik = useFormik({
        initialValues: {
            otpCode: ''
        },
        validate: (values) => {
            const errors: any = {};
            if (!Validates.isRequired.validate(submitCode?.value)) {
                errors.otpCode = Validates.isRequired.message;
            } else if (submitCode?.value?.length != 6) {
                errors.otpCode = 'Mã OTP bao gồm 6 ký tự!';
            }
            return errors;
        },
        onSubmit: (values) => {
            VerifyOtp({ identifier: identifier, code: submitCode?.value });
            // setSubmitCode({ ...submitCode, isLoading: true });
            
        },
    });

    useEffect(() => {
        formik.resetForm();
    }, []);

    const { mutate: ResendOtp, isPending: isPendingResend } = useMutation({
        mutationFn: () => otpApi.otpControllerSendOtp({ identifier: identifier, type: props.type as CreateOtpDtoTypeEnum }),
        onSuccess: (data: any) => {
            setCanResend(false);
        },
        onError: (error: any) => { },
    });

    const { mutate: VerifyOtp, isPending: isPendingVerifyOtp } = useMutation({
        mutationFn: (dto: FilterOtpDto) => otpApi.otpControllerVerifyOtp(dto),
        onSuccess: (data: any) => {
            onFinish();
        },
        onError: (error: any) => { },
    });

    return <Fragment>
        {
            submitCode?.status && <div id="popup-modal" className="flex bg-quaternary overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-40 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative m-auto p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-gray-50 border shadow-2xl rounded-md ">
                        <button onClick={() => setSubmitCode({ status: false, value: '' })} type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="popup-modal">
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
                                    <label htmlFor="otpCode" className="block text-lg font-extrabold leading-tight tracking-tight color-primary md:text-xl text-left">Nhập mã OTP</label>
                                    <div className="mb-4 text-left">
                                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">Vui lòng kiểm tra gmail  ({identifier}) của bạn!</p>
                                    </div>

                                    <OtpInput
                                        value={submitCode?.value}
                                        onChange={(value) => {
                                            setSubmitCode({...submitCode, value: value })
                                        }}
                                        numInputs={6}
                                        containerStyle={
                                            {
                                                display: 'flex',
                                                justifyContent: 'space-around',
                                                marginTop: '5px'
                                            }
                                        }
                                        inputType="text"
                                        renderSeparator={<span>-</span>}
                                        renderInput={(props) => <input {...props} placeholder="*" className="bg-gray-50 border border-gray-300 text-sm rounded-md focus:border-purple-500 font-bold text-black min-w-10" />}
                                    />
                                </div>
                                <div className="text-left">
                                    <span className="text-sm text-orange-500">{formik?.errors?.otpCode}</span>
                                </div>
                                <div className="mt-3 text-right">
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Chưa nhận được mã OTP? <a className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 text-orange-700">
                                            {!canResend ? (
                                                <OTPResendTimer initialSeconds={60} onComplete={() => setCanResend(true)} />
                                            ) : (
                                                <span onClick={() => {
                                                    setCanResend(false);
                                                    ResendOtp();
                                                }}>Gửi lại</span>
                                            )}
                                        </a>
                                    </p>

                                </div>
                                <div className="mt-5">
                                    <PrimaryButton isLoading={isPendingResend || submitCode.isLoading || isPendingVerifyOtp} type="submit" className="bg-primary py-3 w-full">Xác nhận</PrimaryButton>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        }
    </Fragment>
}
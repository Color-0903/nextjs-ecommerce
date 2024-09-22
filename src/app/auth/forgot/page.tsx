"use client";
import { otpApi } from "@/apis";
import { CreateOtpDto, CreateOtpDtoTypeEnum } from "@/apis/client-axios";
import { OtpConfirm } from "@/components/auth/otpForm";
import { PasswordForm, SubmitPasswordIdentifier } from "@/components/auth/passwordForm";
import PrimaryButton from "@/components/common/buttons/primary";
import CustomInput from "@/components/common/input";
import { USER_ROUTER } from "@/constants/router";
import { CHANGE_PASSWORD_TYPE } from "@/utils/constant";
import { Validates } from "@/utils/validate";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Forgot = () => {
    // const [submitCode, setSubmitCode] = useState(false);
    const [submitOtp, setSubmitOtp] = useState<{ status: boolean, value: string, isLoading?: boolean }>({ status: false, value: '' });
    const router = useRouter();
    const [submitPassword, setSubmitPassword] = useState<SubmitPasswordIdentifier>({ status: false, value: '' });
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validate: (values) => {
            const errors: any = {};
            if (!values?.email) {
                errors.email = Validates.isRequired.message;
            } else if (!Validates.isEmail.validate(values?.email)) {
                errors.email = Validates.isEmail.message;
            }

            return errors;
        },
        onSubmit: (values) => {
            SendOtpMutation.mutate({ identifier: formik.values.email, type: CreateOtpDtoTypeEnum.Forgot })
        },
    });

    const SendOtpMutation = useMutation({
        mutationFn: (dto: CreateOtpDto) => otpApi.otpControllerSendOtp(dto),
        onSuccess: (data: any) => {
            setSubmitOtp({ ...submitOtp, status: true, isLoading: false });
        },
        onError: (error: any) => {
            setSubmitOtp({ ...submitOtp, status: false, isLoading: false });
        },
    });

    const onCloseForgot = () => {
        setSubmitOtp({ value: '', status: false, isLoading: false });
        setSubmitPassword({ status: false, value: '' });
        router.push(USER_ROUTER.SIGNIN);
    }

    const onFinish = () => {
        setSubmitPassword({ status: true, value: submitOtp.value });
    }
    return <section className="bg-quaternary dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
            <div className="w-full bg-gray-50 rounded-lg border shadow-xl dark:border md:mt-0 sm:max-w-lg xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8  ">
                    <a className="flex items-center justify-center mb-6 text-2xl font-semibold text-gray-900">
                        <img className="w-32 h-32 mr-2" src="http://localhost:3000/images/logo/logo.png" alt="logo" />
                    </a>
                    <h1 className="block font-extrabold leading-tight tracking-tight color-primary text-2xl ">
                        Quên mật khẩu
                    </h1>
                    <form className="space-y-4 md:space-y-6 pt-3" onSubmit={formik.handleSubmit}>
                        {/* <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-orange-700 dark:text-white">Email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email " />
                        </div> */}
                        <div>
                            <CustomInput onChange={formik.handleChange} id="email" isPassword={false} label="Email" placeholder="email" error={formik?.errors?.email} />
                        </div>
                        <div className="mt-5">
                            <PrimaryButton isLoading={SendOtpMutation.isPending} type="submit" className="bg-primary py-3 w-full">Xác nhận</PrimaryButton>
                        </div>
                        <p className="text-sm text-gray-500">
                            Quay lại đăng nhập? <a href={USER_ROUTER.SIGNIN} className="color-primary hover:underline">Sign In</a>
                        </p>
                    </form>
                </div>
            </div>
        </div >
        <OtpConfirm identifier={formik.values.email} onFinish={onFinish} submitCode={submitOtp} setSubmitCode={setSubmitOtp} type={CreateOtpDtoTypeEnum.Forgot} />
        <PasswordForm identifier={formik.values.email} onFinish={onFinish} onClose={onCloseForgot} submitPassword={submitPassword} setSubmitPassword={setSubmitPassword} type={CHANGE_PASSWORD_TYPE.forgot} />
    </section >
}
export default Forgot;
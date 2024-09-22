"use client";
import { authUserApi, otpApi } from "@/apis";
import { CreateOtpDto, CreateOtpDtoTypeEnum, RegisterUserDto } from "@/apis/client-axios";
import { OtpConfirm } from "@/components/auth/otpForm";
import PrimaryButton from "@/components/common/buttons/primary";
import CustomInput from "@/components/common/input";
import { USER_ROUTER } from "@/constants/router";
import { WINDOW_SIZE } from "@/constants/ThemeSetting";
import useSize from "@/hooks/useSize";
import { AuthRecoil } from "@/storage/authRecoil";
import { Validates } from "@/utils/validate";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useRecoilState } from "recoil";

const Register = () => {
    const screen = useSize();
    const router = useRouter();
    const [auth, setAuth] = useRecoilState(AuthRecoil);
    const [submitOtp, setSubmitOtp] = useState<{ status: boolean, value: string, isLoading?: boolean }>({ status: false, value: '' });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfirm: ''
        },
        validate: (values) => {
            const errors: any = {};
            if (!values?.email) {
                errors.email = Validates.isRequired.message;
            } else if (!Validates.isEmail.validate(values?.email)) {
                errors.email = Validates.isEmail.message;
            }
            else if (!values?.password) {
                errors.password = Validates.isRequired.message;
            } else if (!Validates.isPassword.validate(values?.password)) {
                errors.password = Validates.isPassword.message;
            }
            else if (!Validates.isPassword.validate(values?.passwordConfirm)) {
                errors.passwordConfirm = Validates.isPassword.message;
            }
            else if (values.password !== values.passwordConfirm) {
                errors.passwordConfirm = 'Mật khẩu nhập lại không chính xác!';
            }
            return errors;
        },
        onSubmit: (values) => {
            SendOtpMutation.mutate({ identifier: formik.values.email, type: CreateOtpDtoTypeEnum.Register })
        },
    });

    const RegisterMutation = useMutation({
        mutationFn: (dto: RegisterUserDto) => authUserApi.authUserControllerRegister(dto),
        onSuccess: (data: any) => {
            setSubmitOtp({ ...submitOtp, isLoading: false });
            setAuth(data?.data);
            router.push(USER_ROUTER.SIGNIN)
        },
        onError: (error: any) => {
            setSubmitOtp({ ...submitOtp, isLoading: false });
        },
    });

    const SendOtpMutation = useMutation({
        mutationFn: (dto: CreateOtpDto) => otpApi.otpControllerSendOtp(dto),
        onSuccess: (data: any) => {
            setSubmitOtp({ ...submitOtp, status: true });
        },
        onError: (error: any) => { },
    });

    const onFinish = () => {
        RegisterMutation.mutate({
            code: submitOtp.value,
            identifier: formik?.values.email,
            password: formik.values.password
        });
    }

    {/* <Spinner isLoading={isLogin || isAuthMe}> */ }
    return <section className="bg-quaternary h-screen flex items-center">
        <div className="flex flex-row items-center justify-between mx-auto bg-primary border shadow-2xl w-10/12 min-w-fit max-w-6xl h-fit rounded-md gap-3">
            <div className="p-6 md:mt-0 flex-1 bg-gray-50 w-full">
                <div className="space-y-4 md:space-y-6">
                    <a className="flex items-center justify-center mb-6 text-2xl font-semibold text-gray-900">
                        <img className="w-32 h-32 mr-2" src="http://localhost:3000/images/logo/logo.png" alt="logo" />
                    </a>
                    <h1 className="text-2xl font-extrabold leading-tight tracking-tight color-primary md:text-2xl text-center">
                        Đăng ký tài khoản
                    </h1>
                    <form className="space-y-4 md:space-y-6 pt-3" onSubmit={formik.handleSubmit}>
                        <div>
                            <CustomInput onChange={formik.handleChange} value={formik.values.email} type="text" id="email" placeholder="Email" label="Email" error={formik?.errors?.email} />
                        </div>
                        <div>
                            <CustomInput onChange={formik.handleChange} value={formik.values.password} id="password" isPassword={true} label="Mật khẩu" error={formik?.errors?.password} />
                        </div>
                        <div>
                            <CustomInput onChange={formik.handleChange} value={formik.values.passwordConfirm} id="passwordConfirm" isPassword={true} label="Nhập lại mật khẩu" error={formik?.errors?.passwordConfirm} />
                        </div>

                        <div className="text-right pt-2">
                            <PrimaryButton isLoading={RegisterMutation.isPending || SendOtpMutation.isPending} type="submit" className="bg-primary py-3 w-full">Xác nhận</PrimaryButton>
                        </div>
                        <p className="text-sm text-gray-500">
                            Đã có tài khoản? <a href={USER_ROUTER.SIGNIN} className="color-primary hover:underline">Sign In</a>
                        </p>
                    </form>
                </div>
            </div>
            {
                screen.width >= WINDOW_SIZE.TAB_SIZE &&
                <div className="w-7/12 px-6">
                    <h3 className="text-8xl text-white tracking-wide font-bold">Hello!</h3>
                    <h3 className="text-6xl text-white tracking-wide font-bold">Wellcome</h3>
                    <p className="mt-20 text-white text-xs">Hãy tạo tài khoản của bạn để trải nghiệm đầy đủ tính năng của trang web!</p>
                </div>
            }
        </div>
        <OtpConfirm identifier={formik.values.email} onFinish={onFinish} submitCode={submitOtp} setSubmitCode={setSubmitOtp} type={CreateOtpDtoTypeEnum.Register} />
    </section>
}
export default Register;
"use client";
import { authUserApi } from "@/apis";
import { LoginDto } from "@/apis/client-axios";
import PrimaryButton from "@/components/common/buttons/primary";
import CustomCheckbox from "@/components/common/checkbox";
import CustomInput from "@/components/common/input";
import { USER_ROUTER } from "@/constants/router";
import { WINDOW_SIZE } from "@/constants/ThemeSetting";
import useSize from "@/hooks/useSize";
import { Validates } from "@/utils/validate";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";

const Login = () => {
    const screen = useSize();
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
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
            return errors;
        },
        onSubmit: (values) => {
            LoginMutation.mutate({ identifier: values?.email, password: values?.password });
        },
    });

    const LoginMutation = useMutation({
        mutationFn: (dto: LoginDto) => authUserApi.authUserControllerLogin(dto),
        onSuccess: (data: any) => {
            localStorage.setItem('token', data?.data?.token);
            router.push(USER_ROUTER.DOASBOAD)
        },
        onError: (error: any) => { },
    });
    {/* <Spinner isLoading={isLogin || isAuthMe}> */ }
    return <section className="bg-quaternary h-screen flex items-center">
        <div className="flex flex-row items-center justify-between mx-auto bg-primary border shadow-2xl w-10/12 min-w-fit max-w-6xl h-fit rounded-md gap-3">
            {
                screen.width >= WINDOW_SIZE.TAB_SIZE &&
                <div className="w-7/12 px-6">
                    <h3 className="text-8xl text-white tracking-wide font-bold">Hello!</h3>
                    <h3 className="text-6xl text-white tracking-wide font-bold">Wellcome</h3>
                    <p className="mt-20 text-white text-xs">Hãy đăng nhập tài khoản của bạn để trải nghiệm đầy đủ tính năng của trang web!</p>
                </div>
            }
            <div className="p-6 md:mt-0 flex-1 bg-gray-50 w-full">
                <div className="space-y-4 md:space-y-6">
                    <a className="flex items-center justify-center mb-6 text-2xl font-semibold text-gray-900">
                        <img className="w-32 h-32 mr-2" src="http://localhost:3000/images/logo/logo.png" alt="logo" />
                    </a>
                    <h1 className="text-2xl font-extrabold leading-tight tracking-tight color-primary md:text-2xl text-center">
                        Đăng nhập tài khoản
                    </h1>
                    <form className="space-y-4 md:space-y-6 pt-3" onSubmit={formik.handleSubmit}>
                        <div>
                            <CustomInput   onChange={formik.handleChange} value={formik.values.email} type="text" id="email" placeholder="Email" label="Email" error={formik?.errors?.email} />
                        </div>
                        <div>
                            <CustomInput onChange={formik.handleChange} value={formik.values.password} id="password" isPassword={true} label="Mật khẩu" error={formik?.errors?.password} />
                        </div>
                        <div className="flex items-center justify-between">
                            <CustomCheckbox />
                            <a href={USER_ROUTER.FORGOT} className="text-sm font-medium text-primary-600 hover:underline text-gray-500">Quên mật khẩu?</a>
                        </div>
                        <div className="text-right pt-2">
                            <PrimaryButton isLoading={LoginMutation.isPending} type="submit" className="bg-primary py-3 w-full">Xác nhận</PrimaryButton>
                        </div>
                        <p className="text-sm text-gray-500">
                            Chưa có tài khoản? <a href={USER_ROUTER.SIGNUP} className="color-primary hover:underline">Sign Up</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
}
export default Login;
'use client'
import { authUserApi } from "@/apis";
import { RegisterUserDto } from "@/apis/client-axios";
import { USER_ROUTER } from "@/constants/router";
import { CHANGE_PASSWORD_TYPE } from "@/utils/constant";
import { Validates } from "@/utils/validate";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { Fragment, useEffect } from "react";
import PrimaryButton from "../common/buttons/primary";
import CustomInput from "../common/input";

export interface SubmitPasswordIdentifier {
    status: boolean;
    value: string;
}

export interface PasswordFormInterface {
    identifier: string;
    type: string;
    onFinish: () => void;
    onClose: () => void;
    submitPassword: SubmitPasswordIdentifier;
    setSubmitPassword: (value: SubmitPasswordIdentifier) => void
}

export const PasswordForm = (props: PasswordFormInterface) => {
    const router = useRouter();
    const { identifier, onFinish, onClose, submitPassword, setSubmitPassword, type } = props;

    const formik = useFormik({
        initialValues: {
            current: '',
            password: '',
            passwordConfirm: ''
        },
        validate: (values) => {
            const errors: any = {};
            if (type === CHANGE_PASSWORD_TYPE.update) {
                if (!values?.current) {
                    errors.current = Validates.isRequired.message;
                } else if (!Validates.isPassword.validate(values?.current)) {
                    errors.password = Validates.isPassword.message;
                }
            }
            if (!values?.password) {
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
            ChangePasswordMutation.mutate({ identifier: identifier, password: formik.values.password, code: submitPassword.value })
        },
    });

    useEffect(() => {
        formik.resetForm();
    }, [])

    const ChangePasswordMutation = useMutation({
        mutationFn: (dto: RegisterUserDto) => authUserApi.authUserControllerForgot(dto),
        onSuccess: (data: any) => {
            router.push(USER_ROUTER.SIGNIN)
        },
        onError: (error: any) => { },
    });

    return <Fragment>
        {
            submitPassword?.status && <div id="popup-modal" className="flex bg-quaternary overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-40 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative m-auto p-4 w-full max-w-2xl max-h-full">
                    <div className="relative bg-gray-50 border shadow-2xl rounded-md dark:bg-gray-700">
                        <button onClick={() => onClose()} type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <form action="#" onSubmit={formik.handleSubmit}>
                            <div className="p-4 md:p-5">
                                <h1 className="text-2xl font-extrabold leading-tight tracking-tight color-primary md:text-2xl text-center">
                                    Thay đổi mật khẩu
                                </h1>
                                {
                                    type === CHANGE_PASSWORD_TYPE.update &&
                                    <div className="mt-4" >
                                        <CustomInput onChange={formik.handleChange} value={formik.values.current} id="password" isPassword={true} label="Mật khẩu hiện tại" error={formik?.errors?.current} />
                                    </div>
                                }
                                <div className="mt-4" >
                                    <CustomInput onChange={formik.handleChange} value={formik.values.password} id="password" isPassword={true} label="Mật khẩu mới" error={formik?.errors?.password} />
                                </div>
                                <div className="mt-4">
                                    <CustomInput onChange={formik.handleChange} value={formik.values.passwordConfirm} id="passwordConfirm" isPassword={true} label="Nhập lại mật khẩu" error={formik?.errors?.passwordConfirm} />
                                </div>
                                <div className="mt-8">
                                    <PrimaryButton isLoading={ChangePasswordMutation.isPending} type="submit" className="bg-primary py-3 w-full">Xác nhận</PrimaryButton>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        }
    </Fragment>
}
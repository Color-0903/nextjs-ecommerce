"use client";
import PrimaryButton from "@/components/common/buttons/primary";
import CustomDropdown from "@/components/common/dropdown";
import RecommendGrip from "@/components/common/grids/recommend";
import CustomInput from "@/components/common/input";
import Stepper from "@/components/common/stepper";
import { OrderStepper } from "@/components/common/stepper/stepper.constant";
import CustomTextArea from "@/components/common/textarea";
import MainFooter from "@/components/layouts/footer/mainFooter";
import SecondHeader from "@/components/layouts/header/secondHeader";
import { USER_ROUTER } from "@/constants/router";
import { Validates } from "@/utils/validate";
import { useFormik } from "formik";
import Link from "next/link";
import { Fragment } from "react";

const Checkout = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            province: '',
            country: '',
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
            console.log(values)

        },
    });


    console.log(formik.values)
    return <Fragment >
        <SecondHeader />
        <section className="antialiased bg-gray-50 mt-20">
            <div className="mx-auto">
                <h2 className="bg-white text-xl font-semibold text-gray-900 sm:text-2xl md:min-h-4"></h2>
                <div className="bg-gray-100">
                    <div className="bg-white mx-auto p-3 pt-0 max-w-screen-xl">
                        <div className="block text-center md:flex justify-center border shadow-sm p-2 md:p-4 md:space-x-4 w-full rounded-lg md:divide-x">
                            <h3 className="font-bold text-gray-700 text-lg md:text-2xl">Kiểm tra thông tin</h3>
                            <ol className="flex items-center justify-center md:justify-start space-x-2 md:space-x-4 text-sm font-medium text-center text-gray-500 md:pl-4 mt-4 md:mt-0">
                                <Stepper current={2} steps={OrderStepper} />
                            </ol>
                        </div>
                        <div className="md:gap-6 lg:flex lg:items-start xl:gap-8 mt-6">
                            <div className=" mx-auto w-full flex-none lg:max-w-lg xl:max-w-xl ">
                                <h3 className="font-normal text-gray-600 text-lg md:text-2xl">Thông tin giao hàng</h3>
                                <form className="space-y-4 md:space-y-6 border-t pt-4 mt-4" onSubmit={formik.handleSubmit}>
                                    <div>
                                        <CustomInput onChange={formik.handleChange} value={formik.values.email} type="text" id="fullName" placeholder="Họ tên" label="Họ tên" error={formik?.errors?.email} />
                                    </div>
                                    <div>
                                        <CustomInput onChange={formik.handleChange} value={formik.values.email} type="text" id="phone" placeholder="Số điện thoại" label="Số điện thoại" error={formik?.errors?.email} />
                                    </div>
                                    <div>
                                        <CustomInput onChange={formik.handleChange} value={formik.values.email} type="text" id="address" placeholder="Địa chỉ" label="Địa chỉ" error={formik?.errors?.email} />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 overflow-hidden">
                                        <div>
                                            <CustomDropdown
                                                handleChange={(value: string | number) => console.log('change: ', value)}
                                                value={formik.values.province}
                                                error={formik?.errors?.province}
                                                placeholder="Tỉnh/TP"
                                                label="Tỉnh/TP"
                                                id="province"
                                            />
                                        </div>
                                        <div>
                                            {/* <CustomInput onChange={formik.handleChange} value={formik.values.email} type="text" id="country" placeholder="Quốc gia" label="Quốc gia" error={formik?.errors?.email} /> */}
                                            <CustomDropdown
                                                handleChange={(value: string | number) => console.log('change: ', value)}
                                                error={formik?.errors?.country}
                                                placeholder="Quốc gia"
                                                label="Quốc gia"
                                                id="country"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <CustomTextArea placeholder="Ghi chú" label="Ghi chú" />
                                    </div>
                                    <div className="space-y-4 border-t">
                                        <h3 className="font-normal text-gray-600 text-lg md:text-2xl mt-4">Phương thức thanh toán</h3>

                                        <div className="grid gap-4 grid-cols-2">
                                            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4">
                                                <div className="flex items-start">
                                                    <div className="flex h-5 items-center">
                                                        <input id="payment-online" aria-describedby="payment-online-text" type="radio" name="payment-method" value="" className="h-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600" checked />
                                                    </div>

                                                    <div className="ms-4 text-sm">
                                                        <label htmlFor="payment-online" className="font-medium leading-none text-gray-900"> Thanh toán Online </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4">
                                                <div className="flex items-start">
                                                    <div className="flex h-5 items-center">
                                                        <input id="payment-offline" aria-describedby="payment-offline-text" type="radio" name="payment-method" value="" className="h-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600" checked />
                                                    </div>
                                                    <div className="ms-4 text-sm">
                                                        <label htmlFor="payment-offline" className="font-medium leading-none text-gray-900"> Thanh toán khi nhận được hàng </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="fixed lg:static bottom-0 left-0 right-0 mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full z-50">
                                <div className="space-y-2 md:space-y-4 rounded-lg border border-gray-200 bg-white  shadow-sm dark:border-gray-700 dark:bg-gray-800 p-2 md:p-6">
                                    <div>
                                        <p className="text-xl font-semibold text-gray-900 border-b">Đơn hàng</p>
                                        <div className="space-y-1 md:space-y-4 mt-4">
                                            <div className="flex-1 flex items-start justify-between gap-2">
                                                <img className="h-12 w-12 " src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="imac image" />
                                                <div className="flex-1">
                                                    <div className="w-full">
                                                        <a href="#" className="text-xs md:text-sm font-medium text-gray-900 hover:underline text-two-line">PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple M3, 24" Retina 4.5K, 8GB, SSD 256GB, 10-core GPU, Keyboard layout INT</a>
                                                    </div>
                                                    <div className="flex justify-between items-center mt-2">
                                                        <dd className="text-base font-normal text-gray-900">$7,592.00</dd>
                                                        <dd className="text-xs font-normal color-primary">x1</dd>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="space-y-1 md:space-y-4">
                                            <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 mt-6">
                                                <dt className="text-base font-bold text-gray-900">Thành tiền:</dt>
                                                <dd className="text-base font-bold text-gray-900">$8,191.00</dd>
                                            </dl>
                                        </div>

                                        <div className="mt-4">
                                            <Link href={USER_ROUTER.CHECKOUT} className="text-right pt-1 md:pt-2">
                                                <PrimaryButton type="submit" className="bg-primary py-3 w-full">Thanh toán</PrimaryButton>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <RecommendGrip />
                    </div>
                </div>
            </div>
        </section>
        <MainFooter />
    </Fragment>

}

export default Checkout;
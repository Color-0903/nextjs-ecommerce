import { CartItem } from "@/components/cart/item";
import PrimaryButton from "@/components/common/buttons/primary";
import RecommendGrip from "@/components/common/grids/recommend";
import Stepper from "@/components/common/stepper";
import { OrderStepper } from "@/components/common/stepper/stepper.constant";
import MainFooter from "@/components/layouts/footer/mainFooter";
import SecondHeader from "@/components/layouts/header/secondHeader";
import { USER_ROUTER } from "@/constants/router";
import Link from "next/link";
import { Fragment } from "react";

const Cart = () => {

    return <Fragment >
        <SecondHeader />
        <section className="antialiased bg-gray-50 mt-20">
            <div className="mx-auto">
                <h2 className="bg-white text-xl font-semibold text-gray-900 sm:text-2xl md:min-h-4"></h2>
                <div className="bg-gray-100">
                    <div className="bg-white mx-auto p-3 pt-0 max-w-screen-xl">
                        <div className="block text-center md:flex justify-center border shadow-sm p-2 md:p-4 md:space-x-4 w-full rounded-lg md:divide-x">
                            <h3 className="font-bold text-gray-700 text-lg md:text-2xl">Giỏ hàng</h3>
                            <ol className="flex items-center justify-center md:justify-start space-x-2 md:space-x-4 text-sm font-medium text-center text-gray-500 md:pl-4 mt-4 md:mt-0">
                                <Stepper current={1} steps={OrderStepper} />
                            </ol>
                        </div>
                        <div className="md:gap-6 lg:flex lg:items-start xl:gap-8 mt-4">
                            <div className=" mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                                <div className="space-y-6 order-height overflow-y-auto pb-2 scrollbar-custom">
                                    <CartItem />
                                </div>
                            </div>
                            <div className="fixed lg:static bottom-0 left-0 right-0 mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full z-50">
                                <div className="space-y-2 md:space-y-4 rounded-lg border border-gray-200 bg-white  shadow-sm dark:border-gray-700 dark:bg-gray-800 p-2 md:p-6">
                                    <p className="text-xl font-semibold text-gray-900 dark:text-white">Thanh toán</p>
                                    <div className="space-y-1 md:space-y-4">
                                        <div className="space-y-1 md:space-y-2">
                                            <dl className="flex items-center justify-between gap-4">
                                                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Giá gốc</dt>
                                                <dd className="text-base font-medium text-gray-900 dark:text-white">$7,592.00</dd>
                                            </dl>

                                            <dl className="flex items-center justify-between gap-4">
                                                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Tiết kiệm</dt>
                                                <dd className="text-base font-medium text-green-600">-$299.00</dd>
                                            </dl>

                                            <dl className="flex items-center justify-between gap-4">
                                                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Vận chuyển</dt>
                                                <dd className="text-base font-medium text-gray-900 dark:text-white">$99</dd>
                                            </dl>

                                            <dl className="flex items-center justify-between gap-4">
                                                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Thuế</dt>
                                                <dd className="text-base font-medium text-gray-900 dark:text-white">$799</dd>
                                            </dl>
                                        </div>

                                        <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                                            <dt className="text-base font-bold text-gray-900 dark:text-white">Thành tiền:</dt>
                                            <dd className="text-base font-bold text-gray-900 dark:text-white">$8,191.00</dd>
                                        </dl>
                                    </div>

                                    <div>
                                        <Link href={USER_ROUTER.CHECKOUT} className="text-right pt-1 md:pt-2">
                                            <PrimaryButton type="submit" className="bg-primary py-3 w-full">Thanh toán</PrimaryButton>
                                        </Link>
                                    </div>

                                    <div className="flex items-center justify-center gap-2">
                                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
                                        <a href={USER_ROUTER.DOASBOAD} title="" className="inline-flex items-center gap-2 text-sm font-medium color-primary no-underline hover:underline">
                                            Tiếp tục mua sắm
                                            <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                                            </svg>
                                        </a>
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

export default Cart;
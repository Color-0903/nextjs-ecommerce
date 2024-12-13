import { USER_ROUTER } from "@/constants/router";
import React, { useState } from "react";
import PrimaryButton from "../buttons/primary";
import CustomInput from "../input";
import CustomTooltip from "../tooltip";

export interface TooltipInterface {
    title: string;
    pattern: React.ReactNode;
}

const PaymentComponent = () => {
    // const { title, pattern } = props;
    const [tooltip, setTooltip] = useState<{ status: boolean }>({ status: false });


    const handleHover = (type: string) => {
        if (type == "mouseover") {
            setTooltip({ status: true });

        } else {
            setTooltip({ status: false });

        }
    }

    return <div className="fixed inset-0 z-50 h-full w-full bg-gray-200">
        <div className="relative p-4 mx-auto">
            <section className="py-8 antialiased md:py-16">
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <div className="mx-auto max-w-5xl">
                        <div className="mt-6 flex justify-center mx-auto">
                            <form action="#" className="w-full rounded-lg border bg-white border-gray-200 shadow-lg p-4 sm:p-6 lg:max-w-xl lg:p-8">
                                <h3 className="font-bold text-gray-700 text-lg md:text-2xl">Thêm thông tin thanh toán</h3>
                                <div className="mb-6 grid grid-cols-2 gap-5 mt-4 border-t pt-4">
                                    <div className="col-span-2 sm:col-span-1">
                                        <CustomInput type="text" id="fullName" placeholder="Tên chủ thẻ" label={<>Tên chủ thẻ (<span className="text-red-500">*</span>)</>} />
                                    </div>
                                    <div className="col-span-2 sm:col-span-1">
                                        <CustomInput type="text" id="cardNumber" placeholder="Số thẻ" label={<>Số thẻ (<span className="text-red-500">*</span>)</>} />
                                    </div>

                                    <div>
                                        <div className="relative">
                                            <CustomInput type="text" id="expriedTime" placeholder="30/01" label={<>Ngày hết hạn (<span className="text-red-500">*</span>)</>} />
                                        </div>
                                    </div>
                                    <div>
                                        <CustomInput type="text" id="expriedTime" placeholder="***" label={
                                            <>
                                                CVV (<span className="text-red-500 ">*</span>)
                                            </>
                                        } />
                                    </div>
                                </div>
                                <div className="text-xs text-gray-400 text-center">
                                    (Số CVV: Số CVV của thẻ là 3 số cuối ở mặt sau thẻ)
                                </div>
                                <div>
                                    <PrimaryButton type="submit" className="bg-primary py-3 w-full mt-2">Thanh toán</PrimaryButton>
                                    <div className="flex items-center justify-center gap-2 mt-3">
                                        <a href={USER_ROUTER.DOASBOAD} title="" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 no-underline hover:underline">
                                            Quay lại
                                        </a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>



}

export default PaymentComponent;
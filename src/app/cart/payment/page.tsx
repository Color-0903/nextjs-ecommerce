"use client";
import PrimaryButton from "@/components/common/buttons/primary";
import CustomDropdown from "@/components/common/dropdown";
import RecommendGrip from "@/components/common/grids/recommend";
import CustomInput from "@/components/common/input";
import PaymentComponent from "@/components/common/payment";
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

const Payment = () => {
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
                            <h3 className="font-bold text-gray-700 text-lg md:text-2xl">Thanh toán</h3>
                            <ol className="flex items-center justify-center md:justify-start space-x-2 md:space-x-4 text-sm font-medium text-center text-gray-500 md:pl-4 mt-4 md:mt-0">
                                <Stepper current={2} steps={OrderStepper} />
                            </ol>
                        </div>
                        <div className="md:gap-6 lg:flex lg:items-start xl:gap-8 mt-6">
                            <PaymentComponent />
                        </div>
                        <RecommendGrip />
                    </div>
                </div>
            </div>
        </section>
        <MainFooter />
    </Fragment>

}

export default Payment;
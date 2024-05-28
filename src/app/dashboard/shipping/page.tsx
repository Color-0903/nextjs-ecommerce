import HomeLayout from "@/components/layouts/home";
import UserSideBar from "@/components/sideBar/user-sidebar";
import Spinner from "@/components/spinner";
import OrderStepper from "@/components/steppers/order-stepper";
import { StepperTable } from "@/components/tables/stepper-table";

function Shipping() {
    return <Spinner>
        <HomeLayout>
            <div>
                <UserSideBar />
                <div className="p-4 md:ml-64 h-full">
                    <div className="p-4 border border-gray-200 shadow-md rounded-lg dark:border-gray-700">
                        <div className="w-64 flex items-center gap-3 mt-4">
                            <span className="font-bold text-2xl text-orange-500">Đơn hàng</span>
                        </div>
                        <OrderStepper />
                        <div className="inline-flex items-center justify-center w-full mt-2 mb-4">
                            <hr className="w-6/12 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                            <span className="absolute px-3 font-medium text-orange-500 bg-white dark:text-white dark:bg-gray-900">Danh sách sản phẩm</span>
                        </div>
                        <div className="h-80 overflow-x-hidden overflow-y-scroll">
                            {/* <div className="inline-flex items-center justify-center w-full mt-6">
                            <span className="absolute px-3 font-medium text-gray-500 bg-white dark:text-white dark:bg-gray-900">Dánh sách sản phẩm trống!</span>
                        </div> */}
                            <StepperTable />
                            <StepperTable />
                            <StepperTable />
                            <StepperTable />
                        </div>

                    </div>
                </div>
            </div>
        </HomeLayout>
    </Spinner>
}

export default Shipping;
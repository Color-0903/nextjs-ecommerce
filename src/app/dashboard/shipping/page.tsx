import Layout from "@/components/layouts";
import UserSideBar from "@/components/sideBar/user-sidebar";
import OrderStepper from "@/components/steppers/order-stepper";
import { StepperTable } from "@/components/tables/stepper-table";

function Shipping() {
    return <Layout >
        <div>
            <UserSideBar />
            <div className="p-4 md:ml-64">
                <div className="p-4 border border-gray-200 shadow-md rounded-lg dark:border-gray-700">
                    <div className="w-64 flex items-center gap-3 mt-4">
                        <span className="font-bold text-2xl text-orange-500">Lịch sử mua hàng</span>
                    </div>
                    <OrderStepper />
                    <StepperTable />
                </div>
            </div>
        </div>
    </Layout>
}

export default Shipping;
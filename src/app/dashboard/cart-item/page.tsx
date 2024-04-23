import { ProductTable } from "@/components/tables/product";
import Layout from "@/components/layouts";
import UserSideBar from "@/components/sideBar/user-sidebar";

const CartItem = () => {
    return <Layout >
        <div>
            <UserSideBar />
            <div className="p-4 md:ml-64">
                <div className="p-4 border border-gray-200 shadow-md rounded-lg dark:border-gray-700">
                    <ProductTable />
                </div>
            </div>
        </div>
    </Layout>
}

export default CartItem;

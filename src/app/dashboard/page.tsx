import Layout from "@/components/layouts";
import UserSideBar from "@/components/sideBar/user-sidebar";

function Dashboard() {
    return <Layout >
        <div>
            <UserSideBar />
            <div className="p-4 md:ml-64">
                <div className="p-4 border border-gray-200 shadow-md rounded-lg dark:border-gray-700">
                    <div>Dashboard</div>
                </div>
            </div>
        </div>
    </Layout>
}

export default Dashboard;
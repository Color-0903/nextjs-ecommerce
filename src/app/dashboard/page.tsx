import UserLayout from "@/components/layouts/user";
import UserSideBar from "@/components/sideBar/user-sidebar";
import Spinner from "@/components/spinner";

function Dashboard() {
    return <Spinner>
        <UserLayout>
            <div>
                <UserSideBar />
                <div className="p-4 md:ml-64">
                    <div className="p-4 border border-gray-200 shadow-md rounded-lg dark:border-gray-700">
                        <div>Dashboard</div>
                    </div>
                </div>
            </div>
        </UserLayout>
    </Spinner>
}

export default Dashboard;
import HomeLayout from "@/components/layouts/home";
import UserSideBar from "@/components/sideBar/user-sidebar";
import Spinner from "@/components/spinner";

function Dashboard() {
    return <Spinner>
        <HomeLayout>
            <div>
                <UserSideBar />
                <div className="p-4 md:ml-64">
                    <div className="p-4 border border-gray-200 shadow-md rounded-lg dark:border-gray-700">
                        <div>Dashboard</div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    </Spinner>
}

export default Dashboard;
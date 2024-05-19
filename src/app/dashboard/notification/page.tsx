import UserLayout from "@/components/layouts/user";
import UserSideBar from "@/components/sideBar/user-sidebar";
import Spinner from "@/components/spinner";

function Notification() {
    return <Spinner>
        <UserLayout>
            <div>
                <UserSideBar />
                <div className="p-4 md:ml-64">
                    <div className="p-4 border border-gray-200 shadow-md rounded-lg dark:border-gray-700">
                        <div>Notification</div>
                    </div>
                </div>
            </div>
        </UserLayout>
    </Spinner>
}

export default Notification;
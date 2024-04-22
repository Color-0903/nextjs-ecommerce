import Breadcrum from "@/components/breadcrumb";


export default function UserHeader() {

    return (
        <header className="fixed top-0 left-0 right-0 z-50 shadow-md">
            <nav className="bg-gray-50 border-gray-200 px-5 py-2.5 dark:bg-gray-800">
                <div className="py-4">
                    <div className="flex items-center">
                        <div className="w-64 hidden sm:flex items-center gap-3">
                            <img src="	https://flowbite.com/docs/images/logo.svg" alt="logo"></img>
                            <span className="font-bold">Color-Ecommerce</span>
                        </div>
                        <div className="flex flex-1 items-center justify-between">
                            <Breadcrum />
                            <div className="flex items-center lg:order-2">
                                <div className="hidden md:block">
                                    <span className="mr-2">name@flowbite.com</span>
                                </div>
                                <div>
                                    <img id="avatarButton" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" className="w-10 h-10 rounded-full cursor-pointer" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" alt="User dropdown" />
                                    <div id="userDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                            <div>Bonnie Green</div>
                                            <div className="font-medium truncate">name@flowbite.com</div>
                                        </div>
                                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                                            <li>
                                                <a href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                            </li>
                                        </ul>
                                        <div className="py-1">
                                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                                                </svg>
                                                <span className="flex-1 ms-3 whitespace-nowrap">Sign out</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>
        </header>
    )
}

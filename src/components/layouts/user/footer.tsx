"use client";
export default function UserFooter() {
    return <footer className="hidden md:block bg-gray-50 shadow dark:bg-gray-900 dark:border-gray-700 border-t-2 mt-7">
        <div className="w-full max-w-screen-sm mx-auto p-4 md:py-8 mt-1">
            <div >
                <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse justify-center mx-auto">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Color Logo" />
                    <span className="self-center text-2xl whitespace-nowrap dark:text-white font-extrabold text-orange-500">Color</span>
                </a>
            </div>

            <div className="hidden lg:block mt-6">
                <ul className="flex flex-wrap items-center justify-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-orange-500 text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">Color-Ecommerce</a>. All Rights Reserved.</span>
        </div>
    </footer>


}
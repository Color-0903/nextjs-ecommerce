import Breadcrum from "@/components/common/breadcrumb";
import CustomInput from "@/components/common/input";
export default function SecondHeader() {

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <nav className="bg-quaternary border-gray-200 px-4 lg:px-6 py-2.5">
                <div className=" mx-auto max-w-screen-xl">
                    <div className="flex items-center justify-between">
                        <div>
                            <Breadcrum />
                        </div>
                        <div className="flex flex-wrap justify-between items-center w-1/5 md:w-2/6">
                            <form className="w-full">
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <CustomInput id="default-search" type="search" placeholder="Tìm kiếm.." className="block p-1 ps-10" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </nav>

        </header>
    )
}

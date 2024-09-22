import CustomInput from "@/components/common/input";
import { useQueryMeApi } from "@/hooks/useAuth";
import LoginStatus from "../loginStatus";
import Breadcrum from "@/components/common/breadcrumb";
import { CardIcon } from "@/@svg/cart";
// import { LisCart } from "@/components/cart/list-cart";

export default function MainHeader() {
    // const [isShowCart, setIsShowCart] = useState(false);
    // const [auth, setAuth] = useRecoilState<any>(AuthRecoil);
    // const [showDropdow, setShowDropdow] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <nav className="bg-quaternary border-gray-200 px-4 lg:px-6 py-2.5">
                <div className=" mx-auto max-w-screen-xl">
                    <div className="flex items-center justify-between mt-5">
                        <div>
                            <Breadcrum />
                        </div>
                        <div className="flex items-center lg:order-2">
                            <LoginStatus />
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between items-center mt-5">
                        <a href="#" className="hidden sm:flex items-center pr-2">
                            <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Color Logo" />
                            {/* <span className="self-center text-xl whitespace-nowrap font-extrabold text-orange-500 dark:text-white">Color-Ecommerce</span> */}
                        </a>

                        <form className="max-w-4xl mx-auto flex-1">
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <div>
                                    <CustomInput id="default-search" type="search" placeholder="Tìm kiếm.." className="block p-4 ps-10 " />
                                </div>
                            </div>
                        </form>
                        <div className="hidden md:block pl-2" >
                            <CardIcon />
                        </div>
                        <div className="md:hidden fixed bottom-20 right-2 shadow-xl rounded-full ">
                            <CardIcon />
                        </div>
                    </div>

                </div>
            </nav>

            {/* {isShowCart && <LisCart isShowCart={isShowCart} setIsShowCart={setIsShowCart} />} */}
        </header>
    )
}

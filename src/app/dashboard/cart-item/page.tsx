import { ProductTable } from "@/components/tables/product";
import Layout from "@/components/layouts";
import UserSideBar from "@/components/sideBar/user-sidebar";
import { StepperTable } from "@/components/tables/stepper-table";

const CartItem = () => {
    return <Layout >
        <div>
            <UserSideBar />
            <div className="p-4 md:ml-64">
                <div className="p-4 border border-gray-200 shadow-md rounded-lg dark:border-gray-700">
                    <div className="w-64 flex items-center gap-3 mt-4">
                        <span className="font-bold text-2xl text-orange-500">Giỏ hàng</span>
                    </div>
                    <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-end justify-between gap-3 mt-6">
                        <label htmlFor="table-search" className="sr-only">Search</label>
                        <div className="m-0 flex-1 max-w-3xl">
                            <input type="text" id="table-search" className="ps-5 w-full p-2 h-12 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-orange-400 focus:border-orange-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="Tìm kiếm .." />
                        </div>
                        <div className="flex items-end">
                            <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio" className="inline-flex items-center h-12 text-gray-500 bg-white border border-gray-300 focus:outline-none hover:border-orange-500 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-xs md:text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                <svg className="w-3 h-3 text-gray-500 dark:text-gray-400 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                                </svg>
                                Last 30 days
                                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                            <div id="dropdownRadio" className="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top" style={{ position: 'absolute', inset: 'auto auto 0px 0px', margin: '0px', transform: 'translate3d(522.5px, 3847.5px, 0px)' }}>
                                <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioButton">
                                    <li>
                                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                            <input id="filter-radio-example-1" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="filter-radio-example-1" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last day</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                            <input id="filter-radio-example-2" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="filter-radio-example-2" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last day</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="h-96 pb-8 mt-4 overflow-x-hidden overflow-y-scroll">
                        {/* <div className="inline-flex items-center justify-center w-full mt-6">
                            <span className="absolute px-3 font-medium text-gray-500 bg-white dark:text-white dark:bg-gray-900">Dánh sách sản phẩm trống!</span>
                        </div> */}
                        <StepperTable />
                        <StepperTable />
                        <StepperTable />
                        <StepperTable />
                    </div>
                    <div className="mt-6 flex  justify-center md:justify-end gap-2">
                        <button data-modal-hide="popup-modal" type="button" className="py-2.5 w-32 ms-3 text-sm font-medium text-white focus:outline-none rounded-lg border border-gray-400 bg-gray-500 hover:bg-gray-400 focus:z-10 focus:ring-4 focus:ring-gray-100">
                            Hủy tất cả
                        </button>
                        <button data-modal-hide="popup-modal" type="button" className="py-2.5 w-32 ms-3 text-sm font-medium text-white bg-orange-500 focus:outline-none rounded-lg border border-gray-200 hover:bg-orange-400 focus:z-10 focus:ring-4 focus:ring-gray-100">
                            Đặt tất cả
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
}

export default CartItem;

export const OrderStepper = () => {
    return <ol className="flex items-center w-full mt-6 pb-6 overflow-x-scroll overflow-y-hidden px-4">
        <li className="flex min-w-32 relative w-full items-center  dark:text-orange-500 after:content-[''] after:w-full after:border-b after:border-orange-500 after:border-4 after:inline-block dark:after:border-orange-500">
            <span className="flex items-center justify-center md:w-16 md:h-16 w-12 h-12 cursor-pointer hover:scale-105 hover:opacity-90 bg-orange-500 rounded-full lg:h-18 lg:w-18 dark:bg-orange-500 shrink-0">
                <svg className="w-4 h-4 text-white md:w-6 md:h-6 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                </svg>
                <span className="absolute font-bold text-orange-500 text-nowrap" style={{ bottom: '-25px' }}>Đặt hàng</span>
            </span>
        </li>
        <li className="flex min-w-32 relative w-full items-center text-white dark:text-orange-500 after:content-[''] after:w-full after:border-b after:border-orange-500 after:border-4 after:inline-block dark:after:border-orange-500">
            <span className="flex items-center justify-center md:w-16 md:h-16 w-12 h-12 cursor-pointer hover:scale-105 hover:opacity-90 bg-orange-500 rounded-full lg:h-18 lg:w-18 dark:bg-gray-700 shrink-0">
                <svg className="w-4 h-4 text-white md:w-6 md:h-6 dark:text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3.546l3.2 3.659a1 1 0 0 0 1.506 0L13.454 14H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-8 10H5a1 1 0 0 1 0-2h5a1 1 0 1 1 0 2Zm5-4H5a1 1 0 0 1 0-2h10a1 1 0 1 1 0 2Z" />
                </svg>
                <span className="absolute font-bold text-orange-500 text-nowrap" style={{ bottom: '-25px' }}>Xác nhận</span>
            </span>
        </li>
        <li className="flex min-w-32 relative w-full items-center text-white dark:text-orange-500 after:content-[''] after:w-full after:border-b after:border-orange-500 after:border-4 after:inline-block dark:after:border-orange-500">
            <span className="flex items-center justify-center md:w-16 md:h-16 w-12 h-12 cursor-pointer hover:scale-105 hover:opacity-90 bg-orange-500 rounded-full lg:h-18 lg:w-18 dark:bg-gray-700 shrink-0">
                <svg className="w-4 h-4 text-white md:w-6 md:h-6 dark:text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 14 3-3m-3 3 3 3m-3-3h16v-3m2-7-3 3m3-3-3-3m3 3H3v3" />
                </svg>
                <span className="absolute font-bold text-orange-500 text-nowrap" style={{ bottom: '-25px' }}>Giao hàng</span>
            </span>
        </li>
        <li className="flex min-w-32 relative w-full items-center text-white dark:text-orange-500 after:content-[''] after:w-full after:border-b after:border-orange-500 after:border-4 after:inline-block dark:after:border-orange-500">
            <span className="flex items-center justify-center md:w-16 md:h-16 w-12 h-12 cursor-pointer hover:scale-105 hover:opacity-90 bg-orange-500 rounded-full lg:h-18 lg:w-18 dark:bg-gray-700 shrink-0">
                <svg className="w-4 h-4 text-white lg:w-6 lg:h-6 sm:w-2 sm:h-2 dark:text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
                </svg>
                <span className="absolute font-bold text-orange-500 text-nowrap" style={{ bottom: '-25px' }}>Hoàn thành</span>
            </span>
        </li>
        <li className="flex min-w-32 relative items-center w-full">
            <span className="flex items-center justify-center md:w-16 md:h-16 w-12 h-12 cursor-pointer hover:scale-105 hover:opacity-90 bg-orange-500 rounded-full lg:h-18 lg:w-18 dark:bg-gray-700 shrink-0">
                <svg className="w-4 h-4 text-white md:w-6 md:h-6 dark:text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M15.133 10.632v-1.8a5.406 5.406 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C4.867 13.018 3 13.614 3 14.807 3 15.4 3 16 3.538 16h12.924C17 16 17 15.4 17 14.807c0-1.193-1.867-1.789-1.867-4.175ZM4 4a1 1 0 0 1-.707-.293l-1-1a1 1 0 0 1 1.414-1.414l1 1A1 1 0 0 1 4 4ZM2 8H1a1 1 0 0 1 0-2h1a1 1 0 1 1 0 2Zm14-4a1 1 0 0 1-.707-1.707l1-1a1 1 0 1 1 1.414 1.414l-1 1A1 1 0 0 1 16 4Zm3 4h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2ZM6.823 17a3.453 3.453 0 0 0 6.354 0H6.823Z" />
                </svg>
                <span className="absolute font-bold text-orange-500 text-nowrap" style={{ bottom: '-25px' }}>Đánh giá</span>
            </span>
        </li>

    </ol>

}

export default OrderStepper;
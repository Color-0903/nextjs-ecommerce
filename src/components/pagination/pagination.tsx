export const Pagination = () => {
    return <div className="flex flex-col items-end mt-8">
        <div className="flex flex-col">
            <span className="text-sm text-gray-700 dark:text-gray-400 text-center">
                Pages: <span className="font-semibold text-gray-900 dark:text-white">1</span> / <span className="font-semibold text-gray-900 dark:text-white">10</span>
            </span>
            <div className="inline-flex mt-2 xs:mt-0">
                <button className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-orange-500 rounded-s hover:bg-orange-400 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                    </svg>
                    Prev
                </button>
                <button className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-orange-500 border-0 border-s border-gray-300 rounded-e hover:bg-orange-400 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    Next
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </button>
            </div>
        </div>
    </div>

}
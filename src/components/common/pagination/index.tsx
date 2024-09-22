"use client";
import { useState } from "react";

const Pagination = () => {
    const [page, setPage] = useState(0);

    return <div className="flex flex-col items-end mt-8">
        <div className="flex flex-col">
            <span className="text-sm text-gray-700 dark:text-gray-400 text-center">
                Trang: <span className="font-semibold text-gray-900 dark:text-white">{page}</span>
            </span>
            <div className="inline-flex mt-2 xs:mt-0">
                <button onClick={() => setPage(page - 1)} disabled={page <= 1} className={`flex items-center justify-center bg-primary px-2 py-1 text-white mr-1 rounded-sm ${page == 1 && 'cursor-not-allowed'}`}>
                    <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                    </svg>
                </button>
                <button onClick={() => setPage(page + 1)} className="flex items-center justify-center px-2 py-1 bg-primary text-white rounded-sm ">
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </button>
            </div>
        </div>
    </div>

}

export default Pagination;
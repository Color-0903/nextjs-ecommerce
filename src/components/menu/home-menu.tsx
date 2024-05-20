"use client";

import { categoryApi } from "@/apis";
import { QUERY_KEY } from "@/utils/constant";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const HomeMenu = () => {
    const router = useRouter();
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(10);
    const [fullTextSearch, setFullTextSearch] = useState(undefined);

    const { data: categories, isPending: isPendingcate } = useQuery({
        queryKey: [QUERY_KEY.CATEGORY, { page, size, fullTextSearch }],
        queryFn: () => categoryApi.categoryControllerGetAll(page, size, undefined, fullTextSearch)
    });

    const categoriesItem = (cate: any) => {
        const toUpperCase = cate?.name.charAt(0).toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        return <div className="w-40 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  cursor-pointer">
            <div className="py-3 px-4">
                <button type="button" className="border-4 border-orange-500 text-white bg-gray-400 hover:bg-gray-400 focus:outline-none focus:ring-4 text-4xl  rounded-full h-32 w-32">{toUpperCase}</button>
            </div>
            <div className="px-2">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">{cate?.name}</p>
            </div>
        </div>
    }
    return <div className="border mt-8">
        <div className="mt-4 text-left pl-3">
            <p className="overflow-x-auto py-3 p text-2xl font-medium text-gray-900 dark:text-white tracking-wide  border-b-4 border-orange-500 w-fit">Danh mục sản phẩm</p>
        </div>
        <div className="overflow-x-auto px-5 pb-2 mt-4">
            <div className="w-fit grid grid-flow-col gap-3 overflow-x-auto">
                {
                    categories?.data?.content?.map(cate => categoriesItem(cate))
                }
            </div>
        </div>
    </div>
}
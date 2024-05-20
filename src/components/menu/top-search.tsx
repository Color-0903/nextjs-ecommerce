"use client"
import { productApi } from "@/apis";
import { QUERY_KEY } from "@/utils/constant";
import { Helper } from "@/utils/helper";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Spinner from "../spinner";

export const TopSearch = () => {
    const router = useRouter();
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(15);

    const { data: products, isPending: isPendingProduct } = useQuery({
        queryKey: [QUERY_KEY.TOP_SEARCH, { page, size }],
        queryFn: () => productApi.productControllerGetAll(page, size, 'view-ascend', undefined)
    });

    const productItem = (product: any) => {
        return <div onClick={() => router.push(`/product/${product.id}`)} className="w-40 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  cursor-pointer">
            <div className="py-3 px-4">
                <img className="rounded-full mx-auto h-32" src={Helper?.ViewProduct(product?.assets[0]?.source)} alt="" />
            </div>
            <div className="px-2">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">{product?.name}</p>
            </div>
        </div>
    }
    return <Spinner isLoading={isPendingProduct}>
        <div className="border mt-8">
            <div className="mt-4 text-left pl-3">
                <p className="py-3 p text-2xl font-medium text-gray-900 dark:text-white tracking-wide  border-b-4 border-orange-500 w-fit">Top tìm kiếm</p>
            </div>
            <div className="overflow-x-auto px-5 pb-2 mt-4">
                <div className="w-fit grid grid-flow-col gap-3 overflow-x-auto">
                    {products?.data?.content?.map(product => productItem(product))}
                </div>
            </div>
        </div>
    </Spinner>
}
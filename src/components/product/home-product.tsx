"use client"
import { productApi } from "@/apis";
import { Pagination } from "@/components/pagination/pagination";
import { QUERY_KEY } from "@/utils/constant";
import { Helper } from "@/utils/helper";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Spinner from "../spinner";
import { useRouter } from "next/navigation";

export const HomeProduct = () => {
    const router = useRouter();

    const [page, setPage] = useState(1);
    const [size, setSize] = useState(10);
    const [fullTextSearch, setFullTextSearch] = useState(undefined);

    const { data: products, isPending: isPendingProduct } = useQuery({
        queryKey: [QUERY_KEY.PRODUCT, { page, size, fullTextSearch }],
        queryFn: () => productApi.productControllerGetAll(page, size, undefined, fullTextSearch)
    })

    const productItem = (product: any) => <div onClick={() => router.push(`/product/${product.id}`)} className="bg-white border border-gray-200 pb-4 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110duration-300 ... overflow-hidden">
        <div className="pb-3 relative">
            <img className="mx-auto w-full h-60 rounded-t-lg" src={Helper.ViewProduct(product?.assets[0]?.source)} alt="" />
            <span className="absolute rotate-45 bg-white text-orange-500 text-xs font-medium px-8 py-0.5 dark:bg-red-900 dark:text-red-300" style={{ top: '12px', right: '-20px' }}>{product?.sale_off}%</span>
        </div>
        <div className="px-2">
            <p className="font-normal text-gray-700 dark:text-gray-400 text-left truncate ...">{product?.name}</p>
            <p className="font-normal text-gray-500 dark:text-gray-400 text-left truncate ...">{product?.description}</p>
            <div className="hidden md:flex justify-between mt-6">
                <span className="bg-red-100 text-orange-500 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">{product?.status ? 'Còn hàng' : 'Hết hàng'}</span>
                <span className="text-orange-500">{Helper.showVnd(product?.price_view)}</span>
            </div>

            <div className="md:hidden">
                <div className="mt-1">
                    <span className="bg-red-100 text-orange-500 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">{product?.status ? 'Còn hàng' : 'Hết hàng'}</span>
                </div>
                <div className="flex justify-end mt-3">
                    <span className="text-orange-500">{Helper.showVnd(product?.price_view)}</span>
                </div>
            </div>

        </div>
    </div>

    return <Spinner isLoading={isPendingProduct}>
        <div className="mt-8">
            <div className="border text-center">
                <p className="py-3 text-2xl font-medium text-gray-900 dark:text-white tracking-wide border-b-4 border-orange-500">Sản phẩm</p>
            </div>
            {
                !!products?.data?.content?.length ?
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4 ">
                        {products?.data?.content?.map(product => productItem(product))}
                    </div>
                    :
                    <div className="text-center w-full mt-6">
                        <span className="pt-2 px-3 font-medium text-gray-500 bg-white dark:text-white dark:bg-gray-900">Dánh sách sản phẩm trống!</span>
                    </div>
            }
            <Pagination page={page} setPage={setPage} />
        </div>
    </Spinner>

}
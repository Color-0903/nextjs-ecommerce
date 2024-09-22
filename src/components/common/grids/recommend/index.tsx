
"use client";

import { FavoriteIcon } from "@/@svg/favorite";
import { USER_ROUTER } from "@/constants/router";
import CustomTooltip from "../../tooltip";

const RecommendGrip = () => {

    return <div className="border-t mt-8">
        <div className="my-4 flex justify-between items-center">
            <h3 className="font-normal text-gray-600 text-lg md:text-2xl">Có thể bạn cũng thích</h3>
            <a href={USER_ROUTER.DOASBOAD} title="" className="hidden md:inline-flex items-center gap-2 text-sm font-bold color-primary no-underline hover:underline">
                Xem thêm
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                </svg>
            </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4 overflow-hidden">
            <div className="hover:-translate-y-2">
                <a href="#">
                    <img className="rounded-t-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="product image" />
                </a>
                <div className="px-2 md:px-5 pb-5 border-x border-b border-gray-200 rounded-b-lg">
                    <a href="#">
                        <CustomTooltip
                            pattern={<h5 className="mt-2 md:text-lg font-semibold tracking-tight text-two-line no-underline hover:underline">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>}
                            title="Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport" />

                    </a>
                    <div className="flex items-center justify-end mt-2">
                        <span className="text-xl md:text-2xl font-bold">$599 </span><span className="text-sm md:text-lg font-medium ml-1 text-red-700"> (-20%)</span>
                    </div>
                    <div className="md:flex text-center items-center justify-between mt-4">
                        <div className="flex justify-end md:items-center gap-2">
                            <CustomTooltip pattern={<FavoriteIcon id={"1"} />} title="Yêu thích" />
                            |
                            <CustomTooltip
                                pattern={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 hover:scale-125 hover:cursor-pointer hover:animate-none animate-bounce color-primary">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>}
                                title="Thêm vào giỏ hàng" />
                        </div>
                        <a href={USER_ROUTER.DOASBOAD} title="" className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold color-primary no-underline hover:underline">
                            Xem chi tiết
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="md:hidden my-4 flex justify-center items-center">
            <a href={USER_ROUTER.DOASBOAD} title="" className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 no-underline hover:underline">
                Xem thêm
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                </svg>
            </a>
        </div>
    </div>

}
export default RecommendGrip;
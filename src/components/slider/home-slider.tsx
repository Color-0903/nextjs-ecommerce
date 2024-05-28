"use client";
import { bannerApi } from "@/apis";
import { QUERY_KEY } from "@/utils/constant";
import { Helper } from "@/utils/helper";
import { useQuery } from "@tanstack/react-query";
import { Carousel } from "flowbite-react";

export default function HomeSlider() {
    const { data, isPending } = useQuery({
        queryKey: [QUERY_KEY.BANNER],
        queryFn: () => bannerApi.bannerControllerGetAll(),
    }) as any;

    return <>
        {
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {
                    !!data?.data?.length &&
                    <Carousel >
                        {
                            Array.isArray(data?.data) && (data?.data as any)?.map((asset: any) => {
                                console.log(asset);
                                return <img className="h-full" src={Helper.ViewProduct(asset?.asset?.source)} alt="..." />
                            })
                        }
                    </Carousel>
                }
            </div>
        }
    </>
}
"use client";

import { bannerApi } from "@/apis";
import HomeLayout from "@/components/layouts/home";
import { HomeMenu } from "@/components/menu/home-menu";
import { TopSearch } from "@/components/menu/top-search";
import { HomeProduct } from "@/components/product/home-product";
import HomeSlider from "@/components/slider/home-slider";
import Spinner from "@/components/spinner";
import { QUERY_KEY } from "@/utils/constant";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

function Home() {
  const [assets, setAssets] = useState<any>(undefined);
  const { data, isPending } = useQuery({
    queryKey: [QUERY_KEY.BANNER],
    queryFn: () => bannerApi.bannerControllerGetAll(),
  });
  console.log(data?.data);

  useEffect(() => {
    if (Array.isArray(data?.data)) {
      setAssets((data.data as any).map((item: any) => item.asset));
    }
  }, [data])

  return <Spinner isLoading={isPending}>
    <HomeLayout>
      <div className="container mx-auto px-4">
        {
          !!assets && <HomeSlider assets={(assets as any)} />
        }

        <HomeMenu />
        <TopSearch />
        <HomeProduct />
      </div>
    </HomeLayout>
  </Spinner>
}

export default Home;
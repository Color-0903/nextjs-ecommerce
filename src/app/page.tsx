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
 

  return <Spinner>
    <HomeLayout>
      <div className="container mx-auto px-4">
        <HomeSlider />
        <HomeMenu />
        <TopSearch />
        <HomeProduct />
      </div>
    </HomeLayout>
  </Spinner>
}

export default Home;
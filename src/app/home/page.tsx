import HomeLayout from "@/components/layouts/home";
import { HomeProduct } from "@/components/product/home-product";
import HomeSlider from "@/components/slider/home-slider";
import { HomeMenu } from "@/components/menu/home-menu";
import { TopSearch } from "@/components/menu/top-search";

function Home() {
    return <HomeLayout>
        <div className="container mx-auto px-4">
            <HomeSlider />
            <HomeMenu />
            <TopSearch />
            <HomeProduct />
        </div>
    </HomeLayout>;
}

export default Home;
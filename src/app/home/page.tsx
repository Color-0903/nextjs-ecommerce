import HomeLayout from "@/components/layouts/home";
import { HomeProduct } from "@/components/layouts/product/home-product";
import HomeSlider from "@/components/layouts/slider/home-slider";
import { HomeMenu } from "@/components/menu/home-menu";

function Home() {
    return <HomeLayout>
        <div className="container mx-auto px-4">
            <HomeSlider />
            <HomeMenu />
            <HomeProduct />
        </div>
    </HomeLayout>;
}

export default Home;
import HomeLayout from "@/components/layouts/home";
import { HomeMenu } from "@/components/menu/home-menu";
import { TopSearch } from "@/components/menu/top-search";
import { HomeProduct } from "@/components/product/home-product";
import HomeSlider from "@/components/slider/home-slider";
import Spinner from "@/components/spinner";

function ListProduct() {
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

export default ListProduct;
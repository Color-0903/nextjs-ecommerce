import Layout from "@/components/layouts";
import { HomeMenu } from "@/components/menu/home-menu";
import { TopSearch } from "@/components/menu/top-search";
import { HomeProduct } from "@/components/product/home-product";
import HomeSlider from "@/components/slider/home-slider";

function Profile() {
  return <Layout>
    <div className="container mx-auto px-4">
      <HomeSlider />
      <HomeMenu />
      <TopSearch />
      <HomeProduct />
    </div>
  </Layout>;
}

export default Profile;
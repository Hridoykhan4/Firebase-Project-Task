import BannerSlider from "../components/BannerSlider";
import BrandLogoMarquee from "../components/BrandLogoMarquee";
import BrandsOnSale from "../components/BrandsOnSale";

const Home = () => {
    return (
        <div>
            {/* Banner slider */}
            <BannerSlider></BannerSlider>  

            {/*  Marquee */}
            <section className="py-16">
            <BrandLogoMarquee></BrandLogoMarquee>
            </section>

            {/* Brand On Sell */}
         
                <BrandsOnSale></BrandsOnSale>
           

        </div>
    );
};

export default Home;
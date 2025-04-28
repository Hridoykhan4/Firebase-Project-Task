import BrandLogoMarquee from "../components/BrandLogoMarquee";
import Product from "../components/Product";
import useGetWatch from "../hooks/useGetWatch";

const Brands = () => {
  const { watches } = useGetWatch();

  return (
    <div className="mt-10">
      <BrandLogoMarquee></BrandLogoMarquee>
      {/* All Brands Container */}
      <div className="grid overflow-hidden gap-6 pb-10 mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {watches?.map((watch) => (
          <Product
            key={watch._id}
            rating={watch.rating}
            isSaleOn={watch.isSaleOn}
            watches={watch}
          ></Product>
        ))}
      </div>
    </div>
  );
};

export default Brands;

import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import StarRatings from "react-star-ratings";

const Product = ({ watches, rating, isSaleOn }) => {
  console.log(rating);
  const { image, brand_name, coupons, category, description } = watches;

  const animations = ["fade-up", "zoom-in", "flip-left", "fade-right"];
  const randomAnimation =
    animations[Math.floor(Math.random() * animations.length)];

  useEffect(() => {
    Aos.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
      mirror: false,
      offset: 100,
    });
  }, []);

  return (
    <div
      className="card relative bg-base-100 shadow-sm hover:scale-102 overflow-hidden ease-in-out transition-transform duration-300"
      data-aos={randomAnimation}
      data-aos-offset="150"
      data-aos-delay="100"
      data-aos-easing="ease-in-out"
      data-aos-duration="1200"
    >
      {isSaleOn && (
        <div className="absolute top-4 right-4 bg-[#FF6D3F] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          Brands On Sale
        </div>
      )}

      <figure className="px-10 pt-10">
        <img
          src={image}
          alt={brand_name}
          className="rounded-xl h-52 object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Brand: {brand_name}</h2>
        <p className="font-medium">Total Coupons: {coupons.length}</p>
        <p className="w-9/12 mx-auto">{description}</p>
        <p className="font-medium">Category: {category}</p>
        {rating && (
          <>
            <p className="font-medium">Rating: {rating}</p>
            <StarRatings
              rating={rating}
              starRatedColor="gold"
              numberOfStars={5}
              name="rating"
              starDimension="20px"
              starSpacing="2px"
            />
          </>
        )}

        <button className="btn bg-[#FF6D3F] hover:bg-[#FF5722] text-white border-none">
          View Coupons
        </button>
      </div>
    </div>
  );
};

export default Product;

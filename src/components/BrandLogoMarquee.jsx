import Marquee from "react-fast-marquee";
import useGetWatch from "../hooks/useGetWatch";
import { Link } from "react-router-dom";
const BrandLogoMarquee = () => {
  const { watches } = useGetWatch();

  return (
    <div className="flex items-center gap-5 bg-base-200 p-2">
      <p className="bg-[#FF6D3F] text-white px-4 py-2 rounded-md">Brands</p>

      <Marquee pauseOnHover={true} className="">
        {watches.map((watch, index) => (
          <>
            <Link to={`/brand/detail/${watch._id}`}>
              <img
                key={index}
                className="h-10 mx-5"
                src={watch.brand_logo || `https://i.ibb.co.com/GRkxfny/download-9.jpg`}
                alt={`Logo of ${watch.brand_name || "Brand"}`}
              />
            </Link>
          </>
        ))}
      </Marquee>
    </div>
  );
};

export default BrandLogoMarquee;

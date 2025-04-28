import { Link } from "react-router-dom";
import useGetWatch from "../hooks/useGetWatch";
import Product from "./Product";

const BrandsOnSale = () => {
  const { watches } = useGetWatch();

  return (
    <>
      <section>
        <h2 className="text-center font-bold text-2xl md:text-4xl text-gray-800 pb-6 underline decoration-wavy decoration-primary underline-offset-8">
          Watch On Sale
        </h2>

        <div className="grid overflow-hidden grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {watches?.map(
            (watch) =>
              watch.isSaleOn && (
                <Product key={watch._id} watches={watch}></Product>
              )
          )}
        </div>

        <div className="flex justify-center my-5">
          <button className="relative inline-block px-6 py-3 font-semibold tracking-wide text-white transition-all duration-300 ease-in-out bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg shadow-md hover:from-blue-600 hover:to-cyan-500 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <Link to="/brands" className="relative z-10">
              View All Brands Coupon
            </Link>
            <span className="absolute inset-0 rounded-lg opacity-0 hover:opacity-10 bg-white transition-opacity duration-300"></span>
          </button>
        </div>
      </section>
    </>
  );
};

export default BrandsOnSale;

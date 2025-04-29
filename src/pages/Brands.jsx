import { useEffect, useState } from "react";
import BrandLogoMarquee from "../components/BrandLogoMarquee";
import Product from "../components/Product";
import useGetWatch from "../hooks/useGetWatch";

const Brands = () => {
  const { watches } = useGetWatch();
  const [tempWatches, setTempWatches] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query) {
      setTempWatches(watches);
    }
  }, [watches, query]);

  const handleSearch = () => {
    const target = query.toLowerCase().trim();

    if (target) {
      const searchedWatch = watches.filter((watch) =>
        watch.brand_name.toLowerCase().includes(target)
      );
      setTempWatches(searchedWatch);
    } else {
      setTempWatches(watches);
    }
  };
  return (
    <div className="mt-10">
      <BrandLogoMarquee></BrandLogoMarquee>
      <div className="max-w-2xl mx-auto pt-5 w-full px-4">
        <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 transition">
          <input
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search Brands name..."
            className="flex-1 px-4 py-2 text-sm text-gray-800 placeholder-gray-400 bg-transparent outline-none"
          />
          <button
            onClick={handleSearch}
            className="flex btn items-center px-4 py-2 bg-indigo-600 text-white rounded-full rounded-l-none hover:bg-indigo-700 transition duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
            <span className="ml-2 text-sm font-medium hidden sm:inline">
              Search
            </span>
          </button>
        </div>
      </div>

      {/* All Brands Container */}
      <div className="grid overflow-hidden gap-6 pb-10 mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {tempWatches?.map((watch) => (
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

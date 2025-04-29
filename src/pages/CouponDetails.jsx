import { useEffect, useState } from "react";
import useGetWatch from "../hooks/useGetWatch";
import { useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import toast from "react-hot-toast";

const CouponDetails = () => {
  const { watches } = useGetWatch();
  const { couponId } = useParams();
  const [watch, setWatch] = useState({});

  const { brand_name, rating, brand_logo, image, name, coupons } = watch || {};

  useEffect(() => {
    const matchedItem = watches.find((watch) => watch._id === couponId);
    setWatch(matchedItem || {});
  }, [couponId, watches]);

  return (
    <div className="container mx-auto p-6">
      <div className="bg-base-200 shadow-xl rounded-lg p-8 mb-10">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <img
            src={image || brand_logo}
            alt={brand_name}
            className="w-40 sm:w-60 h-40 sm:h-60 object-cover rounded-lg shadow-lg"
          />
          <div className="text-center lg:text-left space-y-4">
            <h1 className="text-3xl font-bold text-primary">
              Brand: {brand_name}
            </h1>
            <p className="text-xl font-semibold">{name}</p>
            {rating && (
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <p className="font-medium">Rating: {rating}</p>
                <StarRatings
                  rating={rating}
                  starRatedColor="gold"
                  numberOfStars={5}
                  name="rating"
                  starDimension="20px"
                  starSpacing="3px"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-center text-primary">
        Available Coupons
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {coupons?.length > 0 ? (
          coupons.map((coupon, i) => (
            <div
              key={i}
              className="card bg-base-100 shadow-md rounded-lg ease-in-out duration-300 transition-transform hover:scale-105"
            >
              <div className="card-body space-y-3">
                <h3 className="card-title text-lg font-bold text-primary">
                  Discount: {coupon?.discount}
                </h3>
                <p className="font-medium">
                  Code:{" "}
                  <span className="text-success font-bold">{coupon?.code}</span>
                </p>
                <div className="justify-end card-actions">
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => {
                      navigator.clipboard.writeText(coupon?.code);
                      toast.success("Successfully Copied", {
                        duration: 4000,
                        position: "bottom-right",

                        style: {
                          background: "#0f766e",
                          color: "#ffffff",
                          border: "2px solid #14b8a6",
                          padding: "16px",
                          borderRadius: "12px",
                          fontWeight: "bold",
                          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                        },
                        className: "",

                        ariaProps: {
                          role: "status",
                          "aria-live": "polite",
                        },

                        removeDelay: 1000,
                      });
                    }}
                  >
                    Copy Code
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No coupons available.
          </p>
        )}
      </div>
    </div>
  );
};

export default CouponDetails;

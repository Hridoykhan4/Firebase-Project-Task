import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import useAuth from "../hooks/useAuth";

const BannerSlider = () => {
  const { user } = useAuth();
  const images = [
    {
      original:
        "https://i.ibb.co.com/drr9mfX/Casio-MTP-VD01-2-EVUDFWatch-4-800x.webp",
    },
    {
      original:
        "https://i.ibb.co/3MZbNb8/bvlgari-bvlgari-aluminium-white-automatic-103964.webp",
    },
    {
      original:
        "https://i.ibb.co/Ttt6D39/rolex-explorer-ii-watch-m226570-0001-75.jpg",
    },
  ];

  return (
    <section style={{ padding: "40px 20px", backgroundColor: "#f9f9f9" }}>
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        {user && user?.displayName && (
          <h2 className="text-center font-semibold text-lg text-primary underline">
            Welcome, {user?.displayName || user?.email}
          </h2>
        )}

        <h2 style={{ fontSize: "32px", marginBottom: "10px", color: "#333" }}>
          Featured Brands
        </h2>
        <p style={{ fontSize: "16px", color: "#666" }}>
          Explore our top luxury watches from world-renowned brands.
        </p>
      </div>

      <div className="w-full" style={{ maxWidth: "900px", margin: "0 auto" }}>
        <ImageGallery
          items={images}
          showThumbnails={false}
          showBullets={true}
          autoPlay={true}
          slideInterval={5000}
          showPlayButton={false}
          showFullscreenButton={false}
        />
      </div>
    </section>
  );
};

export default BannerSlider;

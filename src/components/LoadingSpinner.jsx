import logo from "../assets/watchLogo.png";

const LoadingSpinner = () => {
  return (
    <div className="relative flex justify-center min-h-[calc(100vh-249px)] items-center">
      <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
      <img src={logo} className="rounded-full h-28 w-28" />
    </div>
  );
};

export default LoadingSpinner;

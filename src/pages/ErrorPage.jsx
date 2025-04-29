import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-9xl font-extrabold text-gray-400">404</h1>
      <p className="text-2xl font-semibold text-gray-700 mt-4">
        Oops! Page not found.
      </p>
      <p className="text-gray-500 mt-2 mb-6 text-center px-4">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;

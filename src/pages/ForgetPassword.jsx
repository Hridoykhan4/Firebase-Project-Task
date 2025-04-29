import { Link, useLocation } from "react-router-dom";

const ForgetPassword = () => {
  const location = useLocation();
  const email = location.state?.email;

  return (
    <div className="w-full max-w-sm mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">
        Login your account
      </h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-1">
            Email address
          </label>
          <input
            type="email"
            value={email}
            readOnly
            placeholder="Enter your email address"
            className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>

        <button
          onClick={() => window.open("https://mail.google.com", "_blank")}
          type="submit"
          className="w-full bg-neutral text-white py-3 rounded-md font-semibold hover:bg-black transition"
        >
          Reset Password
        </button>

        <Link to="/login" className="btn btn-success text-white">If reset, go to Login</Link>

      </div>
    </div>
  );
};

export default ForgetPassword;

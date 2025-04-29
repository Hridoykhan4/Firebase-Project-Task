import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { useState } from "react";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [passValidation, setPassValidation] = useState("");
  const { createNewUser, setUser, updateUserProfile, logInWithGoogle } =
    useAuth();
  const nav = useNavigate();

  const navTo = "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleGoogleLogin = () => {
    logInWithGoogle().then((result) => {
      setUser(result.user);
      nav(navTo);
    });
  };

  const onSubmit = (data) => {
    const password = data.password;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isMinLength = password.length >= 6;

    if (!hasUppercase) {
      return setPassValidation(
        "Password must have at least one uppercase letter."
      );
    } else if (!hasLowercase) {
      console.log("Password must have at least one lowercase letter.");
    } else if (!isMinLength) {
      return setPassValidation("Password must be at least 6 characters long.");
    } else {
       setPassValidation("Password is valid. Proceed with registration.");
    }

    const name = data.name;
    const photo = data.photo;

    createNewUser(data.email, data.password)
      .then((result) => {
        updateUserProfile(name, photo).then(() => {
          setUser(result.user);
          nav(navTo);
        });
      })
      .catch((err) => setPassValidation(err.code));
  };

  return (
    <div className="min-h-[calc(100vh-57px)] flex justify-center items-center px-4 ">
      <div className="w-full max-w-lg p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Register your account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-1">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              defaultValue="Bray Wyatt"
              {...register("name", { required: true })}
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            {errors.name && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div>
            <label htmlFor="photo" className="block text-sm font-semibold mb-1">
              Photo URL
            </label>
            <input
              id="photo"
              type="text"
              {...register("photo", { required: true })}
              placeholder="Enter Photo"
              className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            {errors.photo && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-semibold mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type={showPass ? "text" : "password"}
              {...register("password", { required: true })}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            />

            <div
              onClick={() => setShowPass(!showPass)}
              className="absolute top-9 text-lg cursor-pointer right-6"
            >
              {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </div>

            <p className="pt-4 text-red-500">{passValidation}</p>

            {errors.password && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <input
              id="terms"
              {...register("terms", { required: true })}
              type="checkbox"
              className="checkbox checkbox-sm"
            />
            <label htmlFor="terms" className="text-sm">
              Accept Terms & Conditions
            </label>
          </div>
          {errors.terms && (
            <span className="text-red-500">This field is required</span>
          )}

          <button
            type="submit"
            className="w-full bg-neutral text-white py-3 rounded-md font-semibold hover:bg-black transition"
          >
            Register
          </button>
        </form>

        <p className="pt-3 ">
          Already have an account?{" "}
          <Link to="/login" className="link text-blue-900 font-semibold">
            Login
          </Link>
        </p>
        <button
          onClick={handleGoogleLogin}
          className="btn w-full rounded-full mt-4 border border-gray-300"
        >
          <FaGoogle className="text-[#4285F4]" />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Register;

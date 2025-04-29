import LoadingSpinner from "../components/LoadingSpinner";
import useAuth from "../hooks/useAuth";

const MyProfile = () => {
  const { user, loading } = useAuth();
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center h-40 text-red-500">
        No user data available.
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">
        My Profile
      </h2>
      <div className="text-gray-700 space-y-2">
        <p>
          <span className="font-medium">Name:</span>{" "}
          {user?.displayName || "N/A"}
        </p>
        <p>
          <span className="font-medium">Email:</span> {user?.email}
        </p>
        {user.photoURL && (
          <div className="mt-4 text-center">
            <img
              src={user?.photoURL}
              alt="User Avatar"
              className="w-24 h-24 rounded-full mx-auto object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfile;

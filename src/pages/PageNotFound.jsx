import React from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); // Redirect to home page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Oops! Page not found.</p>
        <p className="text-gray-500 mb-4">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={handleGoHome}
          className="mt-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-200"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;

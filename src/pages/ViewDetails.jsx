import React, { useState } from "react";

const ViewProductDetails = () => {
  const [productId, setProductId] = useState("");
  const [productDetails, setProductDetails] = useState(null);
  const [error, setError] = useState("");

  const handleViewDetails = (e) => {
    e.preventDefault();

    // Mock data - Replace this with API call or database query
    const mockData = {
      101: {
        type: "Electronics",
        length: "10 cm",
        colour: "Black",
        date: "2024-01-10",
      },
      102: {
        type: "Furniture",
        length: "1.5 m",
        colour: "Brown",
        date: "2023-12-20",
      },
      103: {
        type: "Clothing",
        length: "Medium",
        colour: "Red",
        date: "2024-03-15",
      },
    };

    if (mockData[productId]) {
      setProductDetails(mockData[productId]);
      setError("");
    } else {
      setProductDetails(null);
      setError("Product not found. Please enter a valid Product ID.");
    }
  };

  return (
    <div className="h-full w-full bg-pink-100 flex flex-col">
      {/* Form Container */}
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
          <h2 className="text-pink-600 text-2xl font-bold mb-6 text-center">
            Enter Product ID to View Details
          </h2>

          {/* Form */}
          <form onSubmit={handleViewDetails}>
            {/* Product ID Field */}
            <div className="mb-6">
              <label
                htmlFor="productId"
                className="block text-pink-600 font-semibold mb-2"
              >
                Product ID
              </label>
              <input
                type="text"
                id="productId"
                name="productId"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
                className="w-full p-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="Enter product ID"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-pink-600 text-white p-3 rounded-lg font-semibold hover:bg-pink-500 transition duration-300"
            >
              View Details
            </button>
          </form>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 mt-4 text-center font-semibold">
              {error}
            </p>
          )}

          {/* Product Details */}
          {productDetails && (
            <div className="mt-6 bg-pink-50 p-4 rounded-lg shadow">
              <h3 className="text-pink-600 text-lg font-bold mb-4 text-center">
                Product Details
              </h3>
              <p className="text-pink-800">
                <strong>Type:</strong> {productDetails.type}
              </p>
              <p className="text-pink-800">
                <strong>Length:</strong> {productDetails.length}
              </p>
              <p className="text-pink-800">
                <strong>Colour:</strong> {productDetails.colour}
              </p>
              <p className="text-pink-800">
                <strong>Date:</strong> {productDetails.date}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewProductDetails;

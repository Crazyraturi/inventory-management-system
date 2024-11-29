import React, { useState } from "react";

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    type: "",
    length: "",
    colour: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Data:", formData);
    alert("Product added successfully!");
  };

  return (
    <div className=" w-full h-full bg-pink-100 flex flex-col">
      {/* Form Container */}
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
          <h2 className="text-pink-600 text-2xl font-bold  mb-6 text-center">
            Edit Product Details
          </h2>
          <form onSubmit={handleSubmit}>
            {/* ID Field */}
            <div className="mb-4">
              <label
                htmlFor="id"
                className="block text-pink-600 font-semibold mb-2"
              >
                Product ID
              </label>
              <input
                type="text"
                id="id"
                name="id"
                value={formData.id}
                onChange={handleChange}
                className="w-full p-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="Enter product ID"
                required
              />
            </div>

            {/* Type Field */}
            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-pink-600 font-semibold mb-2"
              >
                Type
              </label>
              <input
                type="text"
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full p-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="Enter product type"
                required
              />
            </div>

            {/* Length Field */}
            <div className="mb-4">
              <label
                htmlFor="length"
                className="block text-pink-600 font-semibold mb-2"
              >
                Length
              </label>
              <input
                type="text"
                id="length"
                name="length"
                value={formData.length}
                onChange={handleChange}
                className="w-full p-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="Enter product length"
                required
              />
            </div>

            {/* Colour Field */}
            <div className="mb-4">
              <label
                htmlFor="colour"
                className="block text-pink-600 font-semibold mb-2"
              >
                Colour
              </label>
              <input
                type="text"
                id="colour"
                name="colour"
                value={formData.colour}
                onChange={handleChange}
                className="w-full p-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="Enter product colour"
                required
              />
            </div>

            {/* Date Field */}
            <div className="mb-6">
              <label
                htmlFor="date"
                className="block text-pink-600 font-semibold mb-2"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-pink-600 text-white p-3 rounded-lg font-semibold hover:bg-pink-500 transition duration-300"
            >
              update Product details
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductForm;

import React, { useState } from "react";

const RemoveProductForm = () => {
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

  const handleRemove = (e) => {
    e.preventDefault();
    console.log("Removing Product Details:", formData);
    alert(
      `Product with the following details has been removed:\n\nID: ${formData.id}\nType: ${formData.type}\nLength: ${formData.length}\nColour: ${formData.colour}\nDate: ${formData.date}`
    );
    setFormData({ id: "", type: "", length: "", colour: "", date: "" }); // Clear the form after submission
  };

  return (
    <div className="h-full w-full bg-pink-100 flex flex-col">
      
      

      {/* Form Container */}
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
          <h2 className="text-pink-600 text-xl font-semibold mb-6 text-center">
            Enter Product Details to Remove
          </h2>
          <form onSubmit={handleRemove}>
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

            {/* Remove Button */}
            <button
              type="submit"
              className="w-full bg-pink-600 text-white p-3 rounded-lg font-semibold hover:bg-pink-500 transition duration-300"
            >
              Remove Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RemoveProductForm;

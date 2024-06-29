import React, { useState } from "react";


export const InsertPicForm = ({ setShowForm, setAllImages }) => {

  const [formData, setFormData] = useState({
    link: "",
    category: "",
  });

  const handleOnChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleCloseTick = () => {
    setShowForm(false);
  };

  const { link, category } = formData;

  const handleOnSubmit = (event) => {
    event.preventDefault();

    const newImage = {
      src: formData.link,
      category: formData.category,
    };

    setAllImages.push(newImage);

    console.log(setAllImages);
    setFormData({ link: "", category: "" });

    setShowForm(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-80 z-40">
      <span
        className="absolute top-10 right-10 text-white text-4xl cursor-pointer"
        onClick={handleCloseTick}
      >
        &times;
      </span>

      <div className="bg-gray-200 p-6 rounded-lg shadow-lg md:w-[30%]">
        <form onSubmit={handleOnSubmit} className="space-y-4">
          <label htmlFor="link" className="block text-start">
            Enter Image Link <sup className="text-sm text-red-700">*</sup>
          </label>
          <input
            type="text"
            name="link"
            value={link}
            onChange={handleOnChange}
            id="link"
            placeholder="https://images.Nature-image.com"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:shadow-outline bg-slate-100"
          />
          <label htmlFor="category" className="block text-start">
            Select Category <sup className="text-sm text-red-700">*</sup>
          </label>
          <select
            id="category"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:shadow-outline"
            name="category"
            value={category}
            onChange={handleOnChange}
          >
            <option value="All" selected>All</option>
            <option value="Nature">Nature</option>
            <option value="Food">Food</option>
            <option value="Sport">Sport</option>
            <option value="Travel">Travel</option>
            <option value="People">People</option>
            <option value="Animal">Animal</option>
            <option value="Technology">Technology</option>
          </select>
          <input
            type="submit"
            value="Submit"
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

import { useRouter } from "next/router";
import React, { useState } from "react";

const BookForm = ({ entry, onSubmit }) => {
  const router = useRouter();
  const [data, setData] = useState(entry);
  const [errors, setErrors] = useState({});

const validate = () => {
  const newErrors = {};
  const currentYear = new Date().getFullYear();

  if (!data.title.trim()) {
    newErrors.title = "Titlul este obligatoriu";
  }
  if (!data.author.trim()) {
    newErrors.author = "Autorul este obligatoriu";
  }
  if (!data.description.trim()) {
    newErrors.description = "Descrierea este obligatorie";
  }
  if (!/^\d{4}$/.test(data.year?.toString())) {
    newErrors.year = "Anul trebuie să fie din 4 cifre";
  } else if (data.year > currentYear) {
    newErrors.year = `Anul nu poate fi mai mare decât ${currentYear}`;
  }

  return newErrors;
};


  console.log(entry);

  const handleChange = (type, value) => {
    setData({ ...data, [type]: value });
  };

  const handleCancel = () => {
    router.push("/");
  };
  return (
    <div className="p-4">
      <div className="flex rounded flex-col gap-4 max-w-80 mx-auto border p-4 shadow-xl w-full">
        <div>
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Title
          </label>
          <input
            value={data.title}
            type="text"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter title"
            required
            onChange={(e) => handleChange("title", e.target.value)}
          />
        </div>
        {errors.title && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.title}
          </p>
        )}
        <div>
          <label
            htmlFor="author"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Author
          </label>
          <input
            value={data.author}
            type="text"
            id="author"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter author"
            required
            onChange={(e) => handleChange("author", e.target.value)}
          />
        </div>
        {errors.author && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.author}
          </p>
        )}
        <div>
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <textarea
            id="message"
            rows="4"
            value={data.description}
            onChange={(e) => handleChange("description", e.target.value)}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter description"
          ></textarea>
        </div>
        {errors.description && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.description}
          </p>
        )}
        <div>
          <label
            htmlFor="year"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Year
          </label>
          <input
            value={data.year}
            type="number"
            id="year"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter year"
            required
            onChange={(e) => handleChange("year", (e.target.value))}
          />
        </div>
        {errors.year && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.year}
          </p>
        )}
        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleCancel}
            className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
              const validationErrors = validate();
              if (Object.keys(validationErrors).length > 0) {
                setErrors(validationErrors);
                return;
              }
              onSubmit(data);
            }}
            className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
          >
            {entry?._id ? "Update" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookForm;

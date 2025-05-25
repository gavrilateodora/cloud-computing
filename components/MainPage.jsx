import { deleteBook, getBooks } from "@/utils/booksFunctions";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { useRouter } from "next/router";

const MainPage = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchBooks = async () => {
    try {
      const response = await getBooks();
      setData(response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      const response = await deleteBook(id);
      if (response?.acknowledged) {
        const newData = data.filter((el) => el._id !== id);
        setData(newData);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditBook = async (id) => {
    router.push(`/edit?id=${id}`);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <>
    <div className="p-4 flex justify-center text-4xl">BookShelf</div>
      <div className="p-4 flex flex-wrap gap-4">
        {data?.map((book) => (
          <div
            key={book._id}
            className="flex flex-col justify-between max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <div>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {book.title}
              </h5>

              <div className="flex justify-between items-center mb-1">
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  {book.author}
                </p>
                <p className="text-base font-medium text-emerald-600 dark:text-gray-300">
                  {book.year}
                </p>
              </div>

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {book.description}
              </p>
            </div>

            <div className="mt-auto">
              <button
                onClick={() => handleEditBook(book._id)}
                type="button"
                className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => handleDeleteBook(book._id)}
                className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button
          type="button"
          onClick={() => router.push("/create")}
          className="fixed bottom-6 right-6 z-50 text-white bg-black border border-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:text-white dark:bg-black dark:border-black dark:hover:bg-gray-900 dark:focus:ring-gray-700"
        >
          Add Book
        </button>
      </div>
    </>
  );
};

export default MainPage;

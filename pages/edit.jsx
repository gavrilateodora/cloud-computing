import BookForm from "@/components/BookForm";
import Spinner from "@/components/Spinner";
import { defaultBookValues } from "@/utils/constants";
import { getBook, updateBook } from "@/utils/booksFunctions";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Edit = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [entry, setEntry] = useState(defaultBookValues);

  const handleGetBook = async (id) => {
    try {
      const response = await getBook(id);
      if (response) {
        setEntry(response);
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  const onSubmit = async (data) => {
    try {
      const response = await updateBook(data);

      if (response) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);
    const id = searchParams.get("id");

    if (!id) {
      router.push("/");
    }

    handleGetBook(id);
  }, []);

  if (isLoading) return <Spinner />;

  return <BookForm entry={entry} onSubmit={onSubmit} />;
};

export default Edit;

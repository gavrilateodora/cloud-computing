export const getBooks = async () => {
  try {
    const response = await fetch("/api/books", {
      method: "GET",
    });

    const data = await response.json();

    if (!data) {
      return [];
    }

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getBook = async (id) => {
  try {
    const response = await fetch(`/api/books?id=${id}`, {
      method: "GET",
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createBook = async (entry) => {
  try {
    const response = await fetch("/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entry),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateBook = async (entry) => {
    try {
        const response = await fetch('/api/books', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(entry)
        });

        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error)
    }
}

export const deleteBook = async (id) => {
  try {
    const response = await fetch(`/api/books?id=${id}`, {
      method: "DELETE",
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
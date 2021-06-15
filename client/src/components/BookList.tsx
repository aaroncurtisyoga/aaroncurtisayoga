import React, { useCallback, useEffect, useState } from "react";
import useFetch from "use-http";
export interface IBookList {
  success: boolean;
  message: string;
}
const BookList: React.FC = () => {
  const options = {}; // these options accept all native `fetch` options
  const [books, setBooks] = useState<IBookList[] | undefined>(undefined);
  const { get, response } = useFetch(
    `${process.env.REACT_APP_BACKEND_URL}/api/book-list`,
    options
  );

  const loadGoogleBooks = useCallback(async () => {
    const data = await get();
    // Store first 9 images returned from API in state
    if (response.ok) setBooks(data[0].items);
  }, [get, response]);

  useEffect(() => {
    loadGoogleBooks();
  }, [loadGoogleBooks]);

  return (
    <>
      {!books && ""}
      {books &&
        books.map((book) => (
          <div>
            <div className={`book-img`}>book image</div>
            <div className={`book-txt`}>book txt</div>
          </div>
        ))}
    </>
  );
};

export default BookList;

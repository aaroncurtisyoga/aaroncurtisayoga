import React from "react";
import useFetch from "use-http";

const BookList: React.FC = () => {
  const options = {}; // these options accept all native `fetch` options
  const { loading, error, data } = useFetch(
    "http://localhost:5000/api/book-list",
    options,
    []
  );

  return (
    <>
      {error && "Error!"}
      {loading && "Loading..."}
      {data && <p>Book Data Loaded Successfully</p>}
    </>
  );
};

export default BookList;

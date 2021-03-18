import React from "react";
import useFetch from "use-http";

const BookList: React.FC = () => {
  const options = {}; // these options accept all native `fetch` options
  const { loading, error, data } = useFetch(
    `${process.env.REACT_APP_BACKEND_URL}/api/book-list`,
    options,
    []
  );

  return (
    <>
      Book List Here
    </>
  );
};

export default BookList;

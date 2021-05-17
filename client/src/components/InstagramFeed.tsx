import React, { useCallback, useState } from "react";
import useFetch from "use-http";

const InstagramFeed: React.FC = () => {
  const [photos, setPhotos] = useState([]);
  const { get, response, loading, error } = useFetch(
    // `${process.env.REACT_APP_BACKEND_URL}/api/instagram-photos`,
    {}
  );

  const loadInstagramPhotos = useCallback(async () => {
    // const { ok } = response // BAD, DO NOT DO THIS
    const photos = await get("/todos");
    if (response.ok) setPhotos(photos);
  }, [get, response]);

  return (
    <>
      {error && "error"}
      {loading && "loading"}
      data
    </>
  );
};

export default InstagramFeed;

import React, { useCallback, useEffect, useState } from "react";
import useFetch from "use-http";

const InstagramFeed: React.FC = () => {
  const options = {}; // these options accept all native `fetch` options
  const [photos, setPhotos] = useState([]);
  const { loading, error, get, response } = useFetch(
    `${process.env.REACT_APP_BACKEND_URL}/api/instagram-photos`,
    options
  );

  const loadInstagramPhotos = useCallback(async () => {
    const data = await get();
    if (response.ok) setPhotos(data[0].items);
  }, [get, response]);

  useEffect(() => {
    loadInstagramPhotos();
  }, [loadInstagramPhotos]); // componentDidMount

  return (
    <section className={`instagram-section`}>
      <h4 className={`headline`}>
        Find me on{" "}
        <a href="https://www.instagram.com/aaroncurtisyoga/" target={`_blank`}>
          instagram
        </a>{" "}
        for daily yoga inspiration
      </h4>
      <div className="photos">
        {photos.length &&
          photos.map((photo: any) => (
            <div className={`img-wrapper`} key={photo.id}>
              <img alt={photo.caption} src={photo.media_url} />
            </div>
          ))}
      </div>
    </section>
  );
};

export default InstagramFeed;

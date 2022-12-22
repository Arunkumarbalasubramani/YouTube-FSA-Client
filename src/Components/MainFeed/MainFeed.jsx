import React, { useEffect, useState } from "react";

import { fetchFromAPI } from "../actions";

import CategoriesBar from "./CategoriesBar";
import "./MainFeed.scss";
import VideoCard from "./VideoCard";
const MainFeed = () => {
  const [popularVideos, setPopularVideos] = useState([]);

  useEffect(() => {
    try {
      fetchFromAPI(
        `videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=IN&key=${process.env.REACT_APP_YOUTUBE_API_KEY}
      `
      ).then((data) => setPopularVideos(data.items));
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(popularVideos);

  return (
    <div className="mainfeed-container">
      <div>
        <CategoriesBar />
      </div>
      <div className="video-comp">
        {!popularVideos
          ? "Loading ...."
          : popularVideos.map((item, index) => (
              <VideoCard key={index} video={item} />
            ))}
      </div>
    </div>
  );
};

export default MainFeed;

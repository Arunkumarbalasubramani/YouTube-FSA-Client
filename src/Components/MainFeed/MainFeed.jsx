import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../actions";
import CategoriesBar from "./CategoriesBar";
import "./MainFeed.scss";
import VideoCard from "./VideoCard";

const MainFeed = () => {
  const [videoDetail, setVideoDetail] = useState([]);

  useEffect(() => {
    const get_video_details = async () => {
      try {
        const data = await fetchFromAPI(
          `videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=IN&key=${process.env.REACT_APP_YOUTUBE_API_KEY}
      `
        );
        setVideoDetail(data.items);
      } catch (error) {
        console.log(error);
      }
    };
    get_video_details();
  }, []);

  return (
    <div className="mainfeed-container">
      <div>
        <CategoriesBar />
      </div>
      <div className="video-comp">
        {videoDetail.length === 0 ? (
          <p>Loading...</p>
        ) : (
          videoDetail.map((item, index) => (
            <VideoCard key={index} video={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default MainFeed;

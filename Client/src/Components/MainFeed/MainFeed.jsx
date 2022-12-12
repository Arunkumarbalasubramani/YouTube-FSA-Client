import React from "react";
import CategoriesBar from "./CategoriesBar";
import "./MainFeed.scss";
import VideoCard from "./VideoCard";
const MainFeed = () => {
  return (
    <div className="mainfeed-container">
      <div>
        <CategoriesBar />
      </div>
      <div className="video-comp">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
};

export default MainFeed;

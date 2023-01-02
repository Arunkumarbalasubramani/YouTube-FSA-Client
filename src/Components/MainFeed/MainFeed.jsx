import React, { useEffect, useState } from "react";
import { getAllVideos } from "../actions";
import CategoriesBar from "./CategoriesBar";
import CategoryVideos from "./CategoryVideos";
import "./MainFeed.scss";
import VideoCard from "./VideoCard";
import Skeleton from "react-loading-skeleton";

const MainFeed = () => {
  const [videoDetail, setVideoDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setcategory] = useState(null);
  const [categoryVideos, setcategoryVideos] = useState(null);
  const selectedCategory = (data) => {
    setcategory(data);
  };

  useEffect(() => {
    const get_video_details = async () => {
      try {
        const data = await getAllVideos();
        setVideoDetail(data.items);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    get_video_details();
  }, []);

  if (loading) {
    return <Skeleton />;
  }

  return (
    <div className="mainfeed-container">
      <div>
        <CategoriesBar selectedcategory={selectedCategory} />
      </div>
      <div className="video-comp">
        {/* {videoDetail && !category ? (
          videoDetail.map((item, index) => (
            <VideoCard key={index} video={item} />
          ))
        ) : (
          <CategoryVideos />
        )} */}
        {videoDetail.map((video, index) => (
          <VideoCard key={index} video={video} />
        ))}
      </div>
    </div>
  );
};

export default MainFeed;

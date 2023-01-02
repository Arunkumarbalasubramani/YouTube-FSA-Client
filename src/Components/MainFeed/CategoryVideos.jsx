import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoriesBar from "./CategoriesBar";
import VideoCard from "./VideoCard";
import thumbnail from "../../assets/demoThumbnail.PNG";

const CategoryVideos = ({}) => {
  const navigate = useNavigate();
  const [category, setcategory] = useState(null);
  const selectedCategory = (data) => {
    setcategory(data);
  };

  // const [channelIcon, setChannelIcon] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const get_channel_details = async () => {
  //     try {
  //       const data = await fetchFromAPI(
  //         `channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}
  //     `
  //       );
  //       setChannelIcon(data.items[0].snippet.thumbnails.default.url);
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   get_channel_details();
  // }, [channelId]);

  if (loading) {
    return <p>Loading...</p>;
  }
  // const seconds = moment.duration(duration).asSeconds();
  // const _duration = moment.utc(seconds * 1000).format("mm:ss");

  return (
    <div className="mainfeed-container">
      <div>
        <CategoriesBar selectedcategory={selectedCategory} />
      </div>
      <div className="video-comp">Videos</div>
    </div>
  );
};

export default CategoryVideos;

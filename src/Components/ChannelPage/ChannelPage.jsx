import React, { useEffect, useState } from "react";
import "./ChannelPage.scss";
import testCoverPic from "../../assets/testCover.png";
import ChannelInfo from "../Videos/ChannelInfo";

import VideoCard from "../MainFeed/VideoCard";
import { useParams } from "react-router-dom";
import { getChannelById } from "../actions";

const ChannelPage = () => {
  const { channelId } = useParams();
  const logoStyle = "channel-page";
  const thumbnailStyle = "channel-video-thumbnail";
  const videocardStyle = "channel-videoCard";

  const [loading, setLoading] = useState(false);
  const [channelDetails, setChannelDetails] = useState([]);

  // useEffect(() => {
  //   const get_video_details = async () => {
  //     try {
  //       const data = await getChannelById(channelId);
  //       setChannelDetails(data.items[0]);

  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   get_video_details();
  // }, [channelId]);

  // console.log(channelDetails);
  if (loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <div className="channel-page-container">
        <div className="coverPic">
          <img src={testCoverPic} alt="channel-coverPic" />
          <div className="channel-videos">
            <ChannelInfo logoStyle={logoStyle} channelID={channelId} />
            <hr className="hLine" />
            <div className="video-section">
              {/* <VideoCard
                thumbnailStyle={thumbnailStyle}
                videocardStyle={videocardStyle}
              />
              <VideoCard
                thumbnailStyle={thumbnailStyle}
                videocardStyle={videocardStyle}
              />
              <VideoCard
                thumbnailStyle={thumbnailStyle}
                videocardStyle={videocardStyle}
              />
              <VideoCard
                thumbnailStyle={thumbnailStyle}
                videocardStyle={videocardStyle}
              />
              <VideoCard
                thumbnailStyle={thumbnailStyle}
                videocardStyle={videocardStyle}
              /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ChannelPage;

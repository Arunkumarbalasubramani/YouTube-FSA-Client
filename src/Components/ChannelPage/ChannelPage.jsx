import React from "react";
import "./ChannelPage.scss";
import testCoverPic from "../../assets/testCover.png";
import ChannelInfo from "../Videos/ChannelInfo";

import VideoCard from "../MainFeed/VideoCard";
const ChannelPage = ({ URL }) => {
  const logoStyle = "channel-page";
  const thumbnailStyle = "channel-video-thumbnail";
  const videocardStyle = "channel-videoCard";
  return (
    <div className="channel-page-container">
      <div className="coverPic">
        <img src={testCoverPic} alt="channel-coverPic" />
        <div className="channel-videos">
          <ChannelInfo logoStyle={logoStyle} />
          <hr className="hLine" />
          <div className="video-section">
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
            />
            <VideoCard
              thumbnailStyle={thumbnailStyle}
              videocardStyle={videocardStyle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelPage;

import React from "react";
import "./MainFeed.scss";

import thumbnail from "../../assets/demoThumbnail.PNG";

import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const VideoCard = ({ thumbnailStyle, videocardStyle }) => {
  const navigate = useNavigate();
  return (
    <div className={!videocardStyle ? "videocard-container" : videocardStyle}>
      <div className="video-top">
        <img
          src={thumbnail}
          alt="video-thumbnail"
          className={!thumbnailStyle ? "video-thumbnail" : thumbnailStyle}
          onClick={() => navigate("/video/test")}
        />
        <span>05:23</span>
      </div>
      <div className="channel-details">
        {!thumbnailStyle ? (
          <img
            src={thumbnail}
            alt="channel-thumbnail"
            className="channel-thumbnail"
            onClick={() => navigate("/channel/:channelId")}
          />
        ) : null}
        <div className="video-details">
          <div className="videos">
            <Nav.Link
              className="video-title"
              onClick={() => navigate("/video/test")}
            >
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </Nav.Link>
          </div>

          <Nav.Link onClick={() => navigate("/channel/:channelId")}>
            <p className="channel-name">Lorem ipsum dolor sit amet.</p>
          </Nav.Link>
          <div className="views">
            <p className="viewcount">123K Views • </p>

            <p className="uploaded-time"> 3 Weeks Ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

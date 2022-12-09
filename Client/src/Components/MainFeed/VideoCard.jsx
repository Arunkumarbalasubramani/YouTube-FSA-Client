import React, { useState } from "react";
import "./MainFeed.scss";
import thumbnail from "../../assets/demoThumbnail.PNG";
import {
  MoreVertOutlinedIcon,
  PlaylistAddOutlinedIcon,
  ShareOutlinedIcon,
} from "../exports";

import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const VideoCard = ({ thumbnailStyle, videocardStyle }) => {
  const [showaddto, setShowAddto] = useState(false);
  const navigate = useNavigate();
  return (
    <div className={!videocardStyle ? "videocard-container" : videocardStyle}>
      <img
        src={thumbnail}
        alt="video-thumbnail"
        className={!thumbnailStyle ? "video-thumbnail" : thumbnailStyle}
        onClick={() => navigate("/video/test")}
      />
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

            {!thumbnailStyle ? (
              <Nav.Link
                className="addon-item"
                onClick={() => setShowAddto(!showaddto)}
              >
                <MoreVertOutlinedIcon />
              </Nav.Link>
            ) : null}
          </div>
          {showaddto ? (
            <div className="addto">
              <Nav.Link className="addon-item">
                <PlaylistAddOutlinedIcon />
                <span className="addon-text">Add to PlayList</span>
              </Nav.Link>
              <Nav.Link className="addon-item">
                <ShareOutlinedIcon />
                <span className="addon-text">Share</span>
              </Nav.Link>
            </div>
          ) : null}
          <Nav.Link onClick={() => navigate("/channel/:channelId")}>
            <p className="channel-name">Lorem ipsum dolor sit amet.</p>
          </Nav.Link>
          <div className="views">
            <p className="viewcount">123K Views</p>

            <p className="uploaded-time">ꞏ 3 Weeks Ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

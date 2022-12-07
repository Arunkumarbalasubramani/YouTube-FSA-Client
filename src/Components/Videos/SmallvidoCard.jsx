import React from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import thumbnail from "../../assets/demoThumbnail.PNG";

const SmallvideoCard = ({ styleType }) => {
  const navigate = useNavigate();
  return (
    <div className={!styleType ? "smallvideo-card" : styleType}>
      <img
        src={thumbnail}
        alt="video-thumbnail"
        className="recommendation-thumbnail"
        onClick={() => navigate("/video/test")}
      />
      <div className="video-details">
        <div className="videos">
          <h1 className="rec-title" onClick={() => navigate("/video/test")}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h1>
        </div>

        <Nav.Link onClick={() => navigate("/channel/:channelId")}>
          <p className="rec-channel-name">Lorem ipsum dolor sit amet.</p>
        </Nav.Link>
        <div className="rec-views">
          <p className="viewcount">123K Views</p>

          <p className="uploaded-time">ꞏ 3 Weeks Ago</p>
        </div>
      </div>
    </div>
  );
};
export default SmallvideoCard;

import React from "react";
import { CloseOutlinedIcon, MoreVertOutlinedIcon } from "../exports";
import thumbnail from "../../assets/demoThumbnail.PNG";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const TodayVideoCard = () => {
  const navigate = useNavigate();
  return (
    <div className="today-videocard">
      <img
        src={thumbnail}
        alt="video-thumbnail"
        className="today-video-thumbnail"
        onClick={() => navigate("/video/test")}
      />
      <div className="today-video-details">
        <h1 className="video-title">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit
        </h1>
        <Nav.Link onClick={() => navigate("/channel/:channelId")}>
          <p className="channel-name">Lorem ipsum dolor sit amet.</p>
        </Nav.Link>
        <div className="views">
          <p className="uploaded-time">3 Weeks Ago</p>
        </div>
      </div>
      <div className="history-actions-icons">
        <Tooltip title="Remove from This List" arrow>
          <IconButton>
            <CloseOutlinedIcon className="history-actions-icons" />
          </IconButton>
        </Tooltip>
      </div>
      <div className="history-actions-icons">
        <MoreVertOutlinedIcon className="history-actions-icons" />
      </div>
    </div>
  );
};
export default TodayVideoCard;

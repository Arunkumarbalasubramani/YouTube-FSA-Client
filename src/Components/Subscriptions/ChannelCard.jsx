import Button from "@mui/material/Button";
import React from "react";

const ChannelCard = () => {
  return (
    <div className="channel-card">
      <div className="logo-channel">
        <img src="" alt="" className="thumbnail-channel" />
      </div>
      <div className="channel-title">
        <h6>Channel Name</h6>
      </div>
      <div className="subscribers">
        <h6>23.6M Subscribers</h6>
      </div>
      <Button variant="outlined">Subscribe</Button>
    </div>
  );
};

export default ChannelCard;

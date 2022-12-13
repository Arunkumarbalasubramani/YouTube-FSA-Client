import React from "react";
import { useNavigate } from "react-router-dom";

const ChannelInfo = ({ logoStyle }) => {
  const navigate = useNavigate();
  return (
    <div className="channel-info">
      <div className="channelTitle">
        <img
          src=""
          alt="channel-thumbnail"
          className={!logoStyle ? "channel-logo" : logoStyle}
          onClick={() => navigate("/channel/test")}
        />
        <div className="channel">
          <div
            className="channel-title"
            onClick={() => navigate("/channel/test")}
          >
            Sony South India
          </div>
          <div className="channel-subscribers">13.4M Subscribers</div>
        </div>
      </div>
      <button className="subscribe-btn">Subscribe</button>
      <div className="user-library"></div>
    </div>
  );
};
export default ChannelInfo;

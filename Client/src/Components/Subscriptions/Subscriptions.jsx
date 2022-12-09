import React from "react";
import ChannelCard from "./ChannelCard";
import "./Subscriptions.scss";
const Subscriptions = () => {
  return (
    <div className="subscription-container">
      <h6 className="heading"> Subscriptions</h6>
      <div className="channel-cards">
        <ChannelCard />
        <ChannelCard />
        <ChannelCard /> <ChannelCard />
      </div>
    </div>
  );
};

export default Subscriptions;

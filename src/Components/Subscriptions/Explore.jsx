import React from "react";
import ChannelCard from "./ChannelCard";
import "./Subscriptions.scss";
const Explore = () => {
  return (
    <div className="subscription-container">
      <h6 className="heading"> Explore More Channels</h6>
      <div className="channel-cards">
        <ChannelCard />
        <ChannelCard />
        <ChannelCard />
        <ChannelCard />
        <ChannelCard />
        <ChannelCard />
        <ChannelCard />
        <ChannelCard />
        <ChannelCard />
        <ChannelCard />
        <ChannelCard />
        <ChannelCard />
      </div>
    </div>
  );
};

export default Explore;

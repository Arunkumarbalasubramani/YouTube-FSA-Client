import React, { useEffect, useState } from "react";
import { exploreChannels } from "../actions";
import ChannelCard from "./ChannelCard";
import "./Subscriptions.scss";
const Explore = () => {
  const [loading, setLoading] = useState(true);
  const exploreData = [];
  return (
    <div className="subscription-container">
      <h6 className="heading"> Explore More Channels</h6>
      <div className="channel-cards">
        <div className="popular-section">
          <h5>Beauty & Fashion</h5>
          <div className="channelCards">
            <ChannelCard />
            <ChannelCard />
            <ChannelCard />
            <ChannelCard />
            <ChannelCard />
            <ChannelCard />
          </div>
        </div>
        <hr className="hLine" />
        <div className="popular-section">
          <h5> Comedy</h5>
          <div className="channelCards">
            <ChannelCard />
            <ChannelCard />
            <ChannelCard />
            <ChannelCard />
            <ChannelCard />
            <ChannelCard />
          </div>
        </div>
        <hr className="hLine" />
        <div className="popular-section">
          <h5> Sports</h5>
          <div className="channelCards">
            <ChannelCard />
            <ChannelCard />
            <ChannelCard />
            <ChannelCard />
            <ChannelCard />
            <ChannelCard />
          </div>
        </div>
        <hr className="hLine" />
        <div className="popular-section">
          <h5> Music</h5>
          <div className="channelCards">
            <ChannelCard />
            <ChannelCard />
            <ChannelCard />
            <ChannelCard />
            <ChannelCard />
            <ChannelCard />
          </div>
        </div>
        <hr className="hLine" />
        <div className="popular-section">
          <h5> Technology</h5>
          <div className="channelCards">
            <ChannelCard />
            <ChannelCard />
            <ChannelCard />
            <ChannelCard />
            <ChannelCard />
            <ChannelCard />
          </div>
        </div>
        <hr className="hLine" />
        <div className="popular-section">
          <h5> Gaming</h5>
          <div className="channelCards">
            <ChannelCard />
            <ChannelCard />
            <ChannelCard />
            <ChannelCard />
            <ChannelCard />
            <ChannelCard />
          </div>
        </div>
        <hr className="hLine" />
        <div className="popular-section">
          <h5> Cooking and Health</h5>
          <div className="channelCards">
            <ChannelCard />
            <ChannelCard />
            <ChannelCard />
            <ChannelCard />
            <ChannelCard />
            <ChannelCard />
          </div>
        </div>
        <hr className="hLine" />
        <div className="popular-section">
          <h5> Film & Entertainment</h5>
          <div className="channelCards">
            <ChannelCard />
            <ChannelCard />
            <ChannelCard />
            <ChannelCard />
            <ChannelCard />
            <ChannelCard />
          </div>
        </div>
        <hr className="hLine" />
      </div>
    </div>
  );
};

export default Explore;

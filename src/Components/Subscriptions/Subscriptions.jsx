import React from "react";
import { useNavigate } from "react-router-dom";
import { HistoryIcon } from "../exports";
import SmallvideoCard from "../Videos/SmallvidoCard";
import "./Subscriptions.scss";

const Subscriptions = () => {
  const navigate = useNavigate();
  const styleType = "history-videos";
  return (
    <div className="subsribedVideos-container">
      <h6 className="subscription-heading"> Videos from Your Subscriptions</h6>

      <div className="subscription">
        <div>
          <div className="subscription-heading">
            <div className="lib-title">Today</div>
          </div>
          <div className="sub-videos">
            <SmallvideoCard styleType={styleType} />
            <SmallvideoCard styleType={styleType} />
            <SmallvideoCard styleType={styleType} />
            <SmallvideoCard styleType={styleType} />
          </div>
        </div>
        <hr className="hLine" />
        <div>
          <div className="subscription-heading">
            <div className="lib-title">Yesterday</div>
          </div>
          <div className="sub-videos">
            <SmallvideoCard styleType={styleType} />
            <SmallvideoCard styleType={styleType} />
            <SmallvideoCard styleType={styleType} />
            <SmallvideoCard styleType={styleType} />
            <SmallvideoCard styleType={styleType} />
            <SmallvideoCard styleType={styleType} />
            <SmallvideoCard styleType={styleType} />
            <SmallvideoCard styleType={styleType} />
            <SmallvideoCard styleType={styleType} />
          </div>
        </div>
        <hr className="hLine" />
        <div>
          <div className="subscription-heading">
            <div className="lib-title">Previous Week</div>
          </div>
          <div className="sub-videos">
            <SmallvideoCard styleType={styleType} />
            <SmallvideoCard styleType={styleType} />
            <SmallvideoCard styleType={styleType} />
            <SmallvideoCard styleType={styleType} />
          </div>
        </div>
        <hr className="hLine" />
      </div>
    </div>
  );
};

export default Subscriptions;

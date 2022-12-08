import React from "react";
import "./History.scss";

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import {
  AccountCircleOutlinedIcon,
  HistoryIcon,
  DeleteSweepOutlinedIcon,
} from "../exports";
import TodayVideoCard from "./TodayVideoCard";
const WatchLater = () => {
  const isAccountLoggedIn = true;
  return (
    <div className="library-container">
      <div className="history-loggedIn">
        <div className="history">
          <div className="page-title">
            <h6 className="heading">Watch Later</h6>
            <Tooltip title="Delete All Videos" arrow>
              <IconButton>
                <DeleteSweepOutlinedIcon className="deleteAll-icon" />
              </IconButton>
            </Tooltip>
          </div>
          <div className="today-history">
            <TodayVideoCard />
            <TodayVideoCard />
            <TodayVideoCard />
            <TodayVideoCard />
            <TodayVideoCard />
            <TodayVideoCard />
            <TodayVideoCard />
            <TodayVideoCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchLater;

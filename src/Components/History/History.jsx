import React from "react";

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import {
  AccountCircleOutlinedIcon,
  HistoryIcon,
  DeleteSweepOutlinedIcon,
} from "../exports";
import TodayVideoCard from "./TodayVideoCard";
import "./History.scss";
import { useNavigate } from "react-router-dom";

const History = () => {
  const isAccountLoggedIn = true;
  const navigate = useNavigate();
  return (
    <div className="library-container">
      {!isAccountLoggedIn ? (
        <div className="lib-nologin">
          <HistoryIcon className="lib-icon" />
          <h1 className="lib-text1">Keep track of what you watch</h1>
          <h6 className="lib-text2">
            Watch history isn't viewable when signed out.
          </h6>
          <div className="lib-login">
            <button className="sign-in" onClick={() => navigate("/signin")}>
              <AccountCircleOutlinedIcon />
              Sign In
            </button>
          </div>
        </div>
      ) : (
        <div className="history-loggedIn">
          <div className="history">
            <div className="page-title">
              <h6 className="heading">Watch History</h6>
              <Tooltip title="Delete All History" arrow>
                <IconButton>
                  <DeleteSweepOutlinedIcon className="deleteAll-icon" />
                </IconButton>
              </Tooltip>
            </div>
            <div className="today-history">
              <h6 className="heading">Today</h6>
              <TodayVideoCard />
              <TodayVideoCard />
              <TodayVideoCard />
              <TodayVideoCard />
            </div>
            <hr className="hLine" />
            <div className="yesterday-history">
              <h6 className="heading">Yesterday</h6>
              <TodayVideoCard />
              <TodayVideoCard />
              <TodayVideoCard />
              <TodayVideoCard />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default History;

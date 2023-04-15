import React, { useEffect, useState } from "react";

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
import axios from "axios";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const History = ({ userId, isLoggedIn }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const getHistory = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://youtube-server-app.onrender.com/${userId}/history`
        );
        setHistory(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getHistory();
  }, []);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    const response = await axios.delete(
      `https://youtube-server-app.onrender.com/${userId}/delete/history`
    );
    window.location.reload();
    setOpen(true);
  };
  return (
    <div className="library-container">
      {!isLoggedIn ? (
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
                <IconButton onClick={handleDelete}>
                  <DeleteSweepOutlinedIcon className="deleteAll-icon" />
                </IconButton>
              </Tooltip>
            </div>
            <div className="today-history">
              {history.map((data, index) => (
                <TodayVideoCard
                  key={index}
                  data={data}
                  page={"history"}
                  userId={userId}
                />
              ))}
            </div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Cleared
              </Alert>
            </Snackbar>
          </div>
        </div>
      )}
    </div>
  );
};

export default History;

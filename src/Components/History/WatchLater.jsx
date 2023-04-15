import React, { useEffect, useState } from "react";
import "./History.scss";

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { DeleteSweepOutlinedIcon } from "../exports";
import TodayVideoCard from "./TodayVideoCard";
import { useNavigate } from "react-router-dom";
import {
  AccountCircleOutlinedIcon,
  VideoLibraryOutlinedIcon,
} from "../exports";
import axios from "axios";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const WatchLater = ({ isLoggedIn, userId }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [watchLater, setWatchLater] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const getWatchLater = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://youtube-server-app.onrender.com/${userId}/watchlater`
        );
        setWatchLater(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getWatchLater();
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
      `https://youtube-server-app.onrender.com/${userId}/delete/watchlater`
    );
    window.location.reload();
    setOpen(true);
  };

  return (
    <div className="library-container">
      {!isLoggedIn ? (
        <div className="lib-nologin">
          <VideoLibraryOutlinedIcon className="lib-icon" />
          <h1 className="lib-text1">Enjoy your favorite videos</h1>
          <h6 className="lib-text2">
            Sign in to access videos that you've saved For Watching Later
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
              <h6 className="heading">Watch Later</h6>
              <Tooltip title="Delete All Videos" arrow>
                <IconButton onClick={handleDelete}>
                  <DeleteSweepOutlinedIcon className="deleteAll-icon" />
                </IconButton>
              </Tooltip>
            </div>
            <div className="today-history">
              {watchLater.map((data, index) => (
                <TodayVideoCard
                  key={index}
                  data={data}
                  page={"watchlater"}
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

export default WatchLater;

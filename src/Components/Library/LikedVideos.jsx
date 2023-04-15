import React, { useEffect, useState } from "react";
import "./Library.scss";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import {
  AccountCircleOutlinedIcon,
  HistoryIcon,
  DeleteSweepOutlinedIcon,
} from "../exports";

import { useNavigate } from "react-router-dom";
import TodayVideoCard from "../History/TodayVideoCard";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const LikedVideos = ({ isLoggedIn, userId }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [likedVideos, setLikedVideos] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const getLikedVideos = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://youtube-server-app.onrender.com/${userId}/likedvideos`
        );
        setLikedVideos(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getLikedVideos();
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
      `https://youtube-server-app.onrender.com/${userId}/delete/likedVideos`
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
            Liked Videos isn't viewable when signed out.
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
              <h6 className="heading">Liked Videos</h6>
              <Tooltip title="Delete Liked Videos List" arrow>
                <IconButton onClick={handleDelete}>
                  <DeleteSweepOutlinedIcon className="deleteAll-icon" />
                </IconButton>
              </Tooltip>
            </div>
            <div className="today-history">
              {likedVideos.map((data, index) => (
                <TodayVideoCard
                  key={index}
                  data={data}
                  page={"likedvideos"}
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

export default LikedVideos;

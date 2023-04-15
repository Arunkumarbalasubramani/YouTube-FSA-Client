import React, { useEffect, useState } from "react";
import { CloseOutlinedIcon, MoreVertOutlinedIcon } from "../exports";
// import thumbnail from "../../assets/demoThumbnail.PNG";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import numeral from "numeral";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const TodayVideoCard = ({ data, page, userId }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [videoData, setVideoData] = useState(data);
  const { thumbnail, channelId, channelTitle, videoId, views, likes, title } =
    data;
  const handleDeletefromDB = async () => {
    try {
      await axios.delete(
        `https://youtube-server-app.onrender.com/${userId}/${page}/delete/${videoId}`
      );
      window.location.reload();
      setOpen(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  useEffect(() => {
    setVideoData(data);
  }, [data]);
  return (
    <div className="today-video-container">
      {!data ? (
        <div className="message">
          <h4>No Data to Show</h4>
        </div>
      ) : (
        <div className="today-videocard">
          <img
            src={thumbnail}
            alt="video-thumbnail"
            className="today-video-thumbnail"
            onClick={() => navigate(`/video/${videoId}`)}
          />
          <div className="today-video-details">
            <h1 className="video-title">{title}</h1>
            <Nav.Link onClick={() => navigate(`/channel/${channelId}`)}>
              <p className="channel-name">{channelTitle}</p>
            </Nav.Link>
            <div className="views">
              <div className="likes-div">
                {" "}
                {numeral(likes).format("0.a").toUpperCase()}
              </div>
              <div className="view-div">
                {" "}
                {parseInt(views).toLocaleString()} Views •{" "}
              </div>
            </div>
          </div>
          <div className="actions">
            <Tooltip title="Delete">
              <IconButton size="large">
                <CloseIcon
                  className="deleteAll-icon"
                  onClick={handleDeletefromDB}
                />
              </IconButton>
            </Tooltip>
          </div>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Video removed
            </Alert>
          </Snackbar>
        </div>
      )}
    </div>
  );
};
export default TodayVideoCard;

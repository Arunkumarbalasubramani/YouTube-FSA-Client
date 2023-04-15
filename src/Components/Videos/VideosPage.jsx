import React, { useEffect, useState } from "react";
import { Button, Nav } from "react-bootstrap";
import ReactPlayer from "react-player";

import "./VideosPage.scss";
import { RiShareForwardLine } from "react-icons/ri";
import { BiDislike, BiLike } from "react-icons/bi";
import {
  MoreHorizOutlinedIcon,
  PlaylistAddOutlinedIcon,
  SortOutlinedIcon,
} from "../exports";
import CircularProgress from "@mui/material/CircularProgress";
import SmallvideoCard from "./SmallvidoCard";
import ChannelInfo from "./ChannelInfo";
import { getComments, getRecommendedVideos, getVideoDetails } from "../actions";
import { useParams } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Tooltip from "@mui/material/Tooltip";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const VideosPage = ({ isLoggedIn, userId }) => {
  const { videoId } = useParams();
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState("");
  const [loading, setLoading] = useState(true);
  const [videoDetail, setvideoDetail] = useState([]);
  const [recommendedVideos, setRecommendedVideos] = useState([]);
  const [likedVideo, setLikedVideo] = useState("");
  const [watchLater, setWatchLater] = useState("");
  const [comments, setComments] = useState("");

  useEffect(() => {
    const get_video_details = async () => {
      try {
        const videoData = await getVideoDetails(videoId);
        const recVideosData = await getRecommendedVideos(videoId);
        const commentData = await getComments(
          "64364bcc106814f8c475512f",
          videoId
        );

        setRecommendedVideos(recVideosData.items);
        setvideoDetail(videoData.items[0]);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    get_video_details();
  }, [videoId]);

  const updateHistory = async (videoDetail) => {
    const newVideo = {
      videoId,
      title: videoDetail.snippet.title,
      thumbnail: videoDetail.snippet.thumbnails.medium.url,
      channelTitle: videoDetail.snippet.channelTitle,
      channelId: videoDetail.snippet.channelId,
      views: videoDetail.statistics.viewCount,
      likes: videoDetail.statistics.likeCount,
      uploadedAt: videoDetail.snippet.publishedAt,
      description: videoDetail.snippet.description,
    };
    setHistory(newVideo);
  };

  useEffect(() => {
    const addtohistory = async () => {
      try {
        if (videoDetail.snippet) {
          updateHistory(videoDetail);

          setLoading(true);
          const response = await axios.post(
            `https://youtube-server-app.onrender.com/${userId}/add/history`,
            history
          );

          setLoading(false);
        }
      } catch (error) {
        console.log(error.response);
        setLoading(false);
      }
    };
    addtohistory();
  }, [videoDetail]);

  const addtoLikedVideo = (videoDetail) => {
    const newVideo = {
      videoId,
      title: videoDetail.snippet.title,
      thumbnail: videoDetail.snippet.thumbnails.medium.url,
      channelTitle: videoDetail.snippet.channelTitle,
      channelId: videoDetail.snippet.channelId,
      views: videoDetail.statistics.viewCount,
      likes: videoDetail.statistics.likeCount,
      uploadedAt: videoDetail.snippet.publishedAt,
      description: videoDetail.snippet.description,
    };
    setLikedVideo(newVideo);
  };
  const addtoWatchLater = (videoDetail) => {
    const newVideo = {
      videoId,
      title: videoDetail.snippet.title,
      thumbnail: videoDetail.snippet.thumbnails.medium.url,
      channelTitle: videoDetail.snippet.channelTitle,
      channelId: videoDetail.snippet.channelId,
      views: videoDetail.statistics.viewCount,
      likes: videoDetail.statistics.likeCount,
      uploadedAt: videoDetail.snippet.publishedAt,
      description: videoDetail.snippet.description,
    };
    setWatchLater(newVideo);
  };
  const handleLikesButtonClick = async () => {
    addtoLikedVideo(videoDetail);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  useEffect(() => {
    const postToWatchLater = async () => {
      try {
        setLoading(true);
        const response = await axios.post(
          `https://youtube-server-app.onrender.com/${userId}/add/watchlater`,
          watchLater
        );

        setOpen(true);
        setLoading(false);
      } catch (error) {
        console.log(Error, error);
      }
    };
    postToWatchLater();
  }, [watchLater]);

  useEffect(() => {
    const postTolikedVideos = async () => {
      try {
        setLoading(true);
        const response = await axios.post(
          `https://youtube-server-app.onrender.com/${userId}/add/likedvideos`,
          likedVideo
        );

        setOpen(true);
        setLoading(false);
      } catch (error) {
        console.log(Error, error);
      }
    };
    postTolikedVideos();
  }, [likedVideo]);
  const handleSaveButtonClick = async () => {
    addtoWatchLater(videoDetail);
  };
  const handleInputChange = (e) => {
    setComments(e.target.value);
  };

  const addComment = async () => {
    try {
      const commentdata = { commentText: `${comments}` };

      setLoading(true);
      const response = await axios.post(
        `https://youtube-server-app.onrender.com/${userId}/comment/${videoId}`,
        commentdata
      );

      console.log(response.data);
      setLoading(false);
    } catch (error) {
      console.log(Error - error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  } else {
    const {
      snippet: { publishedAt, channelId, channelTitle, description, title },
      statistics: { commentCount, viewCount, likeCount },
    } = videoDetail;

    return (
      <div className="video-container">
        <div className="video-wrapper">
          <div className="video-playback">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoId}`}
              className="video-Playback"
              width="1262px"
              height="715px"
              controls
              autoPlay
              pip="true"
            />
          </div>
          <h1 className="title">{title}</h1>
          <div className="details">
            <div className="channel-section">
              <ChannelInfo
                channelID={channelId}
                channelTitle={channelTitle}
                userId={userId}
              />
              <div className="buttons">
                <button className="action-btn1">
                  <div className="like-btn">
                    <Tooltip
                      title="Add to Liked Videos"
                      placement="bottom-start"
                    >
                      <Nav.Link onClick={handleLikesButtonClick}>
                        <div className="like">
                          <span>
                            <BiLike size={20} />
                          </span>
                          {numeral(likeCount).format("0.a").toUpperCase()}
                          <span>Likes</span>
                        </div>
                      </Nav.Link>
                    </Tooltip>
                  </div>
                  <button className="dislike-btn">
                    <BiDislike size={20} />
                  </button>
                </button>
                <button className="action-btn">
                  <Tooltip title="Share" placement="bottom-start">
                    <Nav.Link>
                      <span>
                        <RiShareForwardLine size={20} />
                      </span>
                      Share
                    </Nav.Link>
                  </Tooltip>
                </button>
                <button className="action-btn">
                  <Tooltip title="Save to Watch Later" placement="bottom-start">
                    <Nav.Link onClick={handleSaveButtonClick}>
                      <span>
                        <PlaylistAddOutlinedIcon />
                      </span>
                      Save
                    </Nav.Link>
                  </Tooltip>
                </button>
                <button className="action-btn2">
                  <MoreHorizOutlinedIcon size={20} />
                </button>
              </div>
            </div>
            <div className="description">
              <div className="views-info">
                {parseInt(viewCount).toLocaleString()} Views •{" "}
                {moment(publishedAt).startOf("hour").fromNow()}
              </div>
              <div className="description-text">{description}</div>
            </div>
            <div className="comments-section">
              <div className="comments-number">
                <h6>
                  {parseInt(commentCount).toLocaleString()} Comments Originally
                  from Youtube
                </h6>
                <Nav.Link>
                  <span>
                    <SortOutlinedIcon /> SortBy
                  </span>
                </Nav.Link>
              </div>
              <div className="comments">
                <div className="add-comments">
                  <img src="" className="account-image" alt="account-avatar" />
                  <input
                    type="text"
                    name="add-comments"
                    id="add-comments"
                    placeholder="Add Comment"
                    className="comment-input"
                    value={comments}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="comment-btn">
                  <Button
                    disabled={!isLoggedIn}
                    onClick={() => {
                      addComment();
                    }}
                  >
                    Comment
                  </Button>
                </div>
                {loading ? (
                  <CircularProgress color="secondary" />
                ) : (
                  <div className="previous-comments">
                    <img
                      src=""
                      className="account-image"
                      alt="account-avatar"
                    />
                    <div className="comments">
                      <div className="userName">
                        @ arun kur
                        <span> 5 Days ago</span>
                      </div>
                      <div className="comment-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id reprehenderit odio cupiditate quis vel, aut deserunt!
                        Porro minima fuga, illo, in voluptatem amet quaerat
                        perferendis numquam nobis cupiditate, velit veniam!
                      </div>
                      <div className="comment-actions">
                        <BiLike size={22} /> <BiDislike size={22} />
                      </div>
                    </div>
                    <Snackbar
                      open={open}
                      autoHideDuration={6000}
                      onClose={handleClose}
                    >
                      <Alert
                        onClose={handleClose}
                        severity="success"
                        sx={{ width: "100%" }}
                      >
                        Action Completed
                      </Alert>
                    </Snackbar>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="recomendation-section">
          {recommendedVideos.map((video) => (
            <SmallvideoCard video={video} />
          ))}
        </div>
      </div>
    );
  }
};

export default VideosPage;

import moment from "moment";
import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import thumbnail from "../../assets/demoThumbnail.PNG";

const SmallvideoCard = ({ styleType, video }) => {
  const navigate = useNavigate();

  if (video) {
    return (
      <div
        className={
          !styleType ? "smallcard-container" : "lib-videoCard-container"
        }
      >
        <div className={!styleType ? "smallvideo-card" : styleType}>
          <img
            src={!video ? thumbnail : video.snippet.thumbnails.standard.url}
            // src={video.snippet.thumbnails.standard.url}
            alt="video-thumbnail"
            className={
              styleType !== "history-videos"
                ? "recommendation-thumbnail"
                : "lib-video-thumbnail"
            }
            onClick={() => navigate(`/video/${video.id.videoId}`)}
          />
          <div className="video-details">
            <div className="videos">
              <h1
                className="rec-title"
                onClick={() => navigate(`/video/${video.id.videoId}`)}
              >
                {video.snippet.title}
              </h1>
            </div>
            <Nav.Link
              onClick={() => navigate(`/channel/${video.snippet.channelId}`)}
            >
              <p className="rec-channel-name">{video.snippet.channelTitle}</p>
            </Nav.Link>
            <div className="rec-views">
              <p className="uploaded-time">
                {" "}
                {moment(video.snippet.publishedAt).fromNow()}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return "Loading.....";
  }
};
export default SmallvideoCard;

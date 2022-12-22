import React, { useEffect, useState } from "react";
import "./MainFeed.scss";
import thumbnail from "../../assets/demoThumbnail.PNG";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";
import numeral from "numeral";
import { fetchFromAPI } from "../actions";

const VideoCard = ({ thumbnailStyle, videocardStyle, video }) => {
  const navigate = useNavigate();
  const [channelDetails, setchannelDetails] = useState([]);
  const {
    id,
    contentDetails: { duration },
    snippet: {
      title,
      channelId,
      channelTitle,
      description,
      publishedAt,
      thumbnails: { maxres },
    },
    statistics: { viewCount, likeCount },
  } = video;
  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  useEffect(() => {
    try {
      fetchFromAPI(
        `channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}
      `
      ).then((data) => setchannelDetails(data.items[0]));
    } catch (error) {
      console.log(error);
    }
  }, [channelId]);
  console.log(channelDetails);

  if (!channelDetails?.snippet) return "Loading ....";
  const {
    snippet: {
      thumbnails: {
        high: { url },
      },
    },
  } = channelDetails;
  return (
    <div className={!videocardStyle ? "videocard-container" : videocardStyle}>
      <div className="video-top">
        <img
          src={maxres.url}
          alt="video-thumbnail"
          className={!thumbnailStyle ? "video-thumbnail" : thumbnailStyle}
          onClick={() => navigate(`/video/${id}`)}
        />
        <span>{_duration}</span>
      </div>
      <div className="channel-details">
        {!thumbnailStyle ? (
          <img
            src={url}
            alt="channel-thumbnail"
            className="channel-thumbnail"
            onClick={() => navigate("/channel/:channelId")}
          />
        ) : null}
        <div className="video-details">
          <div className="videos">
            <Nav.Link
              className="video-title"
              onClick={() => navigate("/video/test")}
            >
              {title}
            </Nav.Link>
          </div>

          <Nav.Link onClick={() => navigate("/channel/:channelId")}>
            <p className="channel-name">{channelTitle}</p>
          </Nav.Link>
          <div className="views">
            <p className="viewcount">
              {numeral(viewCount).format("0.a").toUpperCase()} Views •{" "}
            </p>

            <p className="uploaded-time"> {moment(publishedAt).fromNow()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

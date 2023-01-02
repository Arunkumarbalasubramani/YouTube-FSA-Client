import React, { useEffect, useState } from "react";
import "./MainFeed.scss";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";
import numeral from "numeral";
import { getChannelIcon, getVideoDetails } from "../actions";
import thumbnail from "../../assets/demoThumbnail.PNG";

const VideoCard = ({ thumbnailStyle, videocardStyle, video }) => {
  const navigate = useNavigate();
  const [channelIcon, setChannelIcon] = useState([]);
  const [loading, setLoading] = useState(false);

  const {
    id,
    contentDetails: { duration },
    snippet: {
      publishedAt,
      channelId,
      channelTitle,
      title,
      thumbnails: { standard },
    },
    statistics: { viewCount },
  } = video;
  useEffect(() => {
    const get_channel_details = async () => {
      try {
        const data = await getChannelIcon(channelId);
        setChannelIcon(data.items[0].snippet.thumbnails.default.url);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    get_channel_details();
  }, [channelId]);

  if (loading) {
    return <p>Loading...</p>;
  }
  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  return (
    <div className={!videocardStyle ? "videocard-container" : videocardStyle}>
      <div className="video-top">
        <img
          src={standard.url}
          alt="video-thumbnail"
          className={!thumbnailStyle ? "video-thumbnail" : thumbnailStyle}
          onClick={() => {
            navigate(`/video/${id}`);
          }}
        />
        <span>{_duration}</span>
      </div>
      <div className="channel-details">
        {!thumbnailStyle ? (
          <img
            src={channelIcon}
            alt="channel-thumbnail"
            className="channel-thumbnail"
            onClick={() => navigate(`/channel/${channelId}`)}
          />
        ) : null}
        <div className="video-details">
          <div className="videos">
            <Nav.Link
              className="video-title"
              onClick={() => navigate(`/video/${id}`)}
            >
              {title}
            </Nav.Link>
          </div>

          <Nav.Link onClick={() => navigate(`/channel/${channelId}`)}>
            <p className="channel-name">{channelTitle}</p>
          </Nav.Link>
          <div className="views">
            <p className="viewcount">
              {numeral(viewCount).format("0.a").toUpperCase()}
              <span>Views •</span>
            </p>

            <p className="uploaded-time">{moment(publishedAt).fromNow()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

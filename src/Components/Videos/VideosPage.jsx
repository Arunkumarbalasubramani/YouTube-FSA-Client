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

import SmallvideoCard from "./SmallvidoCard";
import ChannelInfo from "./ChannelInfo";
import { getRecommendedVideos, getVideoDetails } from "../actions";
import { useParams } from "react-router-dom";
import moment from "moment";

const VideosPage = () => {
  const { videoId } = useParams();
  const [loading, setLoading] = useState(true);
  const [videoDetail, setvideoDetail] = useState([]);
  const [recommendedVideos, setRecommendedVideos] = useState([]);

  useEffect(() => {
    const get_video_details = async () => {
      try {
        const videoDetail = await getVideoDetails(videoId);
        const recVideosData = await getRecommendedVideos(videoId);
        setRecommendedVideos(recVideosData.items);
        setvideoDetail(videoDetail.items[0]);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    get_video_details();
  }, [videoId]);

  if (loading) {
    return <p>Loading...</p>;
  } else {
    const {
      snippet: { publishedAt, channelId, channelTitle, description, title },
      statistics: { commentCount, viewCount },
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
              <ChannelInfo channelID={channelId} channelTitle={channelTitle} />
              <div className="buttons">
                <button className="action-btn1">
                  <div className="like-btn">
                    <span>
                      <BiLike size={20} />
                    </span>
                    Likes
                  </div>
                  <button className="dislike-btn">
                    <BiDislike size={20} />
                  </button>
                </button>
                <button className="action-btn">
                  <span>
                    <RiShareForwardLine size={20} />
                  </span>
                  Share
                </button>
                <button className="action-btn">
                  <span>
                    <PlaylistAddOutlinedIcon />
                  </span>
                  Save
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
                  />
                </div>
                <div className="comment-btn">
                  <Button>Comment</Button>
                </div>
                <div className="previous-comments">
                  <img src="" className="account-image" alt="account-avatar" />
                  <div className="comments">
                    <div className="userName">
                      @arunKur <span> 5 Days ago</span>
                    </div>
                    <div className="comment-content">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolor minus saepe nihil repellendus, accusantium quaerat
                      sed eius odit numquam consequuntur. Quae voluptatibus
                      eligendi ut dignissimos!
                    </div>
                    <div className="comment-actions">
                      <BiLike size={22} /> <BiDislike size={22} />
                    </div>
                  </div>
                </div>
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

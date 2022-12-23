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
import { fetchFromAPI } from "../actions";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

const VideosPage = () => {
  const { videoId } = useParams();
  const [videoDetail, setVideoDetail] = useState("");
  useEffect(() => {
    try {
      fetchFromAPI(
        `videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}
      `
      ).then((data) => setVideoDetail(data.items));
    } catch (error) {
      console.log(error);
    }
  }, [videoId]);
  console.log(videoDetail);
  const opts = {
    height: "715",
    width: "1262",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="video-container">
      <div className="video-wrapper">
        <div className="video-playback">
          {/* <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            className="video-Playback"
            width="1262px"
            height="715px"
            controls
          /> */}
          <YouTube videoId={videoId} opts={opts} />;
        </div>
        <h1 className="title">Test Video</h1>
        <div className="details">
          <div className="channel-section">
            <ChannelInfo />
            <div className="buttons">
              <button className="action-btn1">
                <div className="like-btn">
                  <span>
                    <BiLike size={20} />
                  </span>
                  Like
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
            <div className="views-info">7,948,154 views • Jun 22, 2022</div>
            <div className="description-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              voluptate optio officiis at corrupti molestiae, recusandae
              excepturi in libero voluptates fuga tempore laboriosam dolor magni
              possimus esse distinctio labore veritatis? Voluptas, ad earum
              dolorem temporibus facilis culpa eius optio suscipit mollitia
              inventore, excepturi nulla fugiat quisquam atque iste aliquid
              quod!
            </div>
          </div>
          <div className="comments-section">
            <div className="comments-number">
              <h6>1056 Comments</h6>
              <Nav.Link>
                <span>
                  <SortOutlinedIcon /> SortBy
                </span>
              </Nav.Link>
            </div>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  minus saepe nihil repellendus, accusantium quaerat sed eius
                  odit numquam consequuntur. Quae voluptatibus eligendi ut
                  dignissimos!
                </div>
                <div className="comment-actions">
                  <BiLike size={22} /> <BiDislike size={22} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="recomendation-section">
        <SmallvideoCard />
        <SmallvideoCard />
        <SmallvideoCard />
        <SmallvideoCard />
        <SmallvideoCard />
      </div>
    </div>
  );
};

export default VideosPage;

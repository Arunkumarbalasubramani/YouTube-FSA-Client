import React from "react";
import { Button, Nav } from "react-bootstrap";
import ReactPlayer from "react-player";
import YouTube from "react-youtube";
import VideoCard from "../MainFeed/VideoCard";
import "./VideosPage.scss";
import { RiShareForwardLine } from "react-icons/ri";
import { BiDislike, BiLike } from "react-icons/bi";
import {
  MoreHorizOutlinedIcon,
  PlaylistAddOutlinedIcon,
  SortOutlinedIcon,
} from "../exports";
const VideosPage = () => {
  return (
    <div className="video-container">
      <div className="video-wrapper">
        <div className="video-playback">
          <ReactPlayer
            url="https://youtu.be/zuVV9Y55gvc"
            className="video-Playback"
            width="1262px"
            height="715px"
          />
        </div>
        <h1 className="title">Test Video</h1>
        <div className="details">
          <div className="channel-section">
            <div className="channel-info">
              <img src="" className="channel-logo" />
              <div className="channel">
                <div className="channel-title">Sony South India</div>
                <div className="channel-subscribers">13.4M Subscribers</div>
              </div>
              <button className="subscribe-btn">Subscribe</button>
            </div>
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
              <img src="" className="account-image" />
              <input
                type="text"
                name="add-comments"
                id="add-comments"
                placeholder="Add Comment"
                className="comment-input"
              />
            </div>
            <div className="previous-comments">
              <img src="" className="account-image" />
              <div className="comments">
                <div className="userName">
                  @arunKur <span> 5 Days ago</span>
                </div>
                <div className="comment-content"></div>
              </div>
            </div>
            <div className="replyTo-comments"></div>
          </div>
        </div>
      </div>
      <div className="recomendation-section">
        <VideoCard />

        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />

        <VideoCard />
      </div>
    </div>
  );
};

export default VideosPage;

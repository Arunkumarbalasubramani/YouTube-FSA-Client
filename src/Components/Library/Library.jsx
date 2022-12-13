import React from "react";
import { useNavigate } from "react-router-dom";
import {
  AccountCircleOutlinedIcon,
  HistoryIcon,
  VideoLibraryOutlinedIcon,
  WatchLaterOutlinedIcon,
  ThumbUpOutlinedIcon,
} from "../exports";
import SmallvideoCard from "../Videos/SmallvidoCard";
import "./Library.scss";
const Library = () => {
  const isAccountLoggedIn = true;
  const styleType = "history-videos";
  const navigate = useNavigate();
  return (
    <div className="library-container">
      {!isAccountLoggedIn ? (
        <div className="lib-nologin">
          <VideoLibraryOutlinedIcon className="lib-icon" />
          <h1 className="lib-text1">Enjoy your favorite videos</h1>
          <h6 className="lib-text2">
            Sign in to access videos that you've liked or saved
          </h6>
          <div className="lib-login">
            <button className="sign-in" onClick={() => navigate("/signin")}>
              <AccountCircleOutlinedIcon />
              Sign In
            </button>
          </div>
        </div>
      ) : (
        <div className="library-loggedIn">
          <div className="user-library">
            <div className="history">
              <div className="heading">
                <div className="lib-title">
                  <HistoryIcon />
                  History
                </div>
                <div className="seeAll-btn ">
                  <button
                    className="seeAll-btn "
                    onClick={() => navigate("/history")}
                  >
                    See All
                  </button>
                </div>
              </div>
              <div className="user-library-videos">
                <SmallvideoCard styleType={styleType} />
                <SmallvideoCard styleType={styleType} />
                <SmallvideoCard styleType={styleType} />
                <SmallvideoCard styleType={styleType} />
                <SmallvideoCard styleType={styleType} />
                <SmallvideoCard styleType={styleType} />
                <SmallvideoCard styleType={styleType} />
                <SmallvideoCard styleType={styleType} />
              </div>
            </div>
            <hr className="hLine" />
            <div className="watchLater">
              <div className="heading">
                <div className="lib-title">
                  <WatchLaterOutlinedIcon />
                  Watch Later
                </div>
                <div className="seeAll-btn ">
                  <button
                    className="seeAll-btn "
                    onClick={() => navigate("/watchlater")}
                  >
                    See All
                  </button>
                </div>
              </div>
              <div className="user-library-videos">
                <SmallvideoCard styleType={styleType} />
                <SmallvideoCard styleType={styleType} />
                <SmallvideoCard styleType={styleType} />
                <SmallvideoCard styleType={styleType} />
                <SmallvideoCard styleType={styleType} />
                <SmallvideoCard styleType={styleType} />
                <SmallvideoCard styleType={styleType} />
                <SmallvideoCard styleType={styleType} />
                <SmallvideoCard styleType={styleType} />
                <SmallvideoCard styleType={styleType} />
                <SmallvideoCard styleType={styleType} />
                <SmallvideoCard styleType={styleType} />
              </div>
            </div>
            <hr className="hLine" />
            <div className="likedVideos">
              <div className="heading">
                <div className="lib-title">
                  <ThumbUpOutlinedIcon />
                  Liked Videos
                </div>
                <div className="seeAll-btn ">
                  <button className="seeAll-btn ">See All</button>
                </div>
              </div>
              <div className="user-library-videos">
                <SmallvideoCard styleType={styleType} />
                <SmallvideoCard styleType={styleType} />
                <SmallvideoCard styleType={styleType} />
                <SmallvideoCard styleType={styleType} />
                <SmallvideoCard styleType={styleType} />
              </div>
            </div>
          </div>
          <div className="userDetails">
            <img src="" alt="account-avatar" className="account-avatar" />

            <hr className="hLine" />
            <h1 className="user-name"> The Touring Talks</h1>
            <hr className="hLine" />
            <div className="user-details">
              <div className="detail">
                <h6> Subscriptions</h6>
                <span>46</span>
              </div>{" "}
              <hr className="hLine" />
              <div className="detail">
                <h6 className="detail"> Uploads</h6> <span>0</span>
              </div>
              <hr className="hLine" />
              <div className="detail">
                <h6 className="detail"> Likes</h6>
                <span>103</span>
              </div>
              <hr className="hLine" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Library;

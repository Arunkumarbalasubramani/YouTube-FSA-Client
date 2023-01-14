import React, { useState } from "react";
import "./SideMenu.scss";
import thumbnail from "../../assets/demoThumbnail.PNG";
import ShortsLogo from "../../assets/shorts.svg";
import PremiumLogo from "../../assets/premium.png";
import MusicLogo from "../../assets/music.png";

import TVLogo from "../../assets/tv.png";

import {
  HomeIcon,
  SubscriptionsOutlinedIcon,
  VideoLibraryOutlinedIcon,
  HistoryOutlinedIcon,
  ArticleOutlinedIcon,
  LiveTvOutlinedIcon,
  AccountCircleOutlinedIcon,
  SettingsOutlinedIcon,
  FlagOutlinedIcon,
  HelpOutlineOutlinedIcon,
  WhatshotIcon,
  MusicNoteIcon,
  LocalMoviesIcon,
  VideogameAssetOutlinedIcon,
  EmojiEventsOutlinedIcon,
  DryCleaningOutlinedIcon,
  LightbulbOutlinedIcon,
  AddCircleOutlineIcon,
  FeedbackOutlinedIcon,
  ExploreIcon,
  ExpandMoreIcon,
} from "../exports";
import { useNavigate } from "react-router-dom";
const isAccountLoggedIn = true;
const SideMenu = ({ sideBar, showSideBar }) => {
  const navigate = useNavigate();
  const [subscriptions, setSubscriptions] = useState(false);
  return (
    <div>
      <div className="lg-sidebar ">
        <div className="menu-section">
          <div className="menu-item" onClick={() => navigate("/")}>
            <HomeIcon /> <span className="menu-text">Home</span>
          </div>
          <div className="menu-item">
            <img src={ShortsLogo} alt="" className="shorts" />{" "}
            <span className="menu-text">Shorts</span>
          </div>
          <div className="menu-item" onClick={() => navigate("/subscriptions")}>
            <SubscriptionsOutlinedIcon />
            <span className="menu-text">Subscriptions</span>
          </div>
        </div>
        <hr className="hLine" />
        <div className="menu-section">
          <div className="menu-item" onClick={() => navigate("/library")}>
            <VideoLibraryOutlinedIcon />
            <span className="menu-text">Library</span>
          </div>
          <div className="menu-item" onClick={() => navigate("/history")}>
            <HistoryOutlinedIcon />
            <span className="menu-text">History</span>
          </div>
        </div>
        <hr className="hLine" />
        <div className="login-container">
          {!isAccountLoggedIn ? (
            <div>
              <p className="login-text">
                Sign in to like videos, comment, and subscribe.
              </p>
              <div className="login">
                <button className="sign-in" onClick={() => navigate("/signin")}>
                  <AccountCircleOutlinedIcon />
                  Sign In
                </button>
              </div>
            </div>
          ) : (
            <div className="menu-section-container">
              <h6 className="sub-head">Subscriptions</h6>
              <div className="menu-section">
                <div
                  className="menu-item"
                  onClick={() => navigate(`/channel/test`)}
                >
                  <img
                    src={thumbnail}
                    alt="channel-thumbnail"
                    className="channel-image"
                  />
                  <span className="menu-text">Channel1</span>
                </div>
                <div
                  className="menu-item"
                  onClick={() => navigate(`/channel/test`)}
                >
                  <img
                    src={thumbnail}
                    alt="channel-thumbnail"
                    className="channel-image"
                  />
                  <span className="menu-text">Channel1</span>
                </div>
                <div
                  className="menu-item"
                  onClick={() => navigate(`/channel/test`)}
                >
                  <img
                    src={thumbnail}
                    alt="channel-thumbnail"
                    className="channel-image"
                  />
                  <span className="menu-text">Channel1</span>
                </div>
                <div
                  className="menu-item"
                  onClick={() => navigate(`/channel/test`)}
                >
                  <img
                    src={thumbnail}
                    alt="channel-thumbnail"
                    className="channel-image"
                  />
                  <span className="menu-text">Channel1</span>
                </div>
                <div
                  className="menu-item"
                  onClick={() => navigate(`/channel/test`)}
                >
                  <img
                    src={thumbnail}
                    alt="channel-thumbnail"
                    className="channel-image"
                  />
                  <span className="menu-text">Channel1</span>
                </div>{" "}
                {subscriptions ? (
                  <>
                    <div
                      className="menu-item"
                      onClick={() => navigate(`/channel/test`)}
                    >
                      <img
                        src={thumbnail}
                        alt="channel-thumbnail"
                        className="channel-image"
                      />
                      <span className="menu-text">Channel1</span>
                    </div>
                    <div
                      className="menu-item"
                      onClick={() => navigate(`/exploreChannels`)}
                    >
                      <AddCircleOutlineIcon />
                      <span className="menu-text">Browse More</span>
                    </div>
                  </>
                ) : null}
                <div
                  className="menu-item"
                  onClick={() => setSubscriptions(!subscriptions)}
                >
                  <ExpandMoreIcon />
                  <span className="menu-text">
                    {subscriptions ? " Show Less" : "Show More"}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
        <hr className="hLine" />
        <div className="menu-section-container">
          <h6 className="sub-head">Explore</h6>
          <div className="menu-section">
            <div
              className="menu-item"
              onClick={() => navigate(`/search/Trending`)}
            >
              <WhatshotIcon />
              <span className="menu-text">Trending</span>
            </div>
            <div
              className="menu-item"
              onClick={() => navigate(`/search/Music`)}
            >
              <MusicNoteIcon />
              <span className="menu-text">Music</span>
            </div>
            <div
              className="menu-item"
              onClick={() => navigate(`/search/Movies`)}
            >
              <LocalMoviesIcon />
              <span className="menu-text">Movies</span>
            </div>
            <div className="menu-item" onClick={() => navigate(`/search/Live`)}>
              <LiveTvOutlinedIcon />
              <span className="menu-text">Live</span>
            </div>
            <div
              className="menu-item"
              onClick={() => navigate(`/search/Gaming`)}
            >
              <VideogameAssetOutlinedIcon />
              <span className="menu-text">Gaming</span>
            </div>
            <div className="menu-item" onClick={() => navigate(`/search/News`)}>
              <ArticleOutlinedIcon />
              <span className="menu-text">News</span>
            </div>
            <div
              className="menu-item"
              onClick={() => navigate(`/search/Sports`)}
            >
              <EmojiEventsOutlinedIcon />
              <span className="menu-text">Sports</span>
            </div>
            <div
              className="menu-item"
              onClick={() => navigate(`/search/Learning`)}
            >
              <LightbulbOutlinedIcon />
              <span className="menu-text">Learning</span>
            </div>
            <div
              className="menu-item"
              onClick={() => navigate(`/search/Fashion&Beauty`)}
            >
              <DryCleaningOutlinedIcon />
              <span className="menu-text">Fashion&Beauty</span>
            </div>
          </div>
        </div>
        <hr className="hLine" />

        <div className="menu-section-container">
          <h6 className="sub-head">More From YouTube</h6>
          <div className="menu-section">
            <div className="menu-item">
              <img src={PremiumLogo} alt="" className="shorts" />{" "}
              <span className="menu-text">YouTubePremium</span>
            </div>
            <div className="menu-item">
              <img src={MusicLogo} alt="" className="shorts" />{" "}
              <span className="menu-text">YouTube Music</span>
            </div>
            <div className="menu-item">
              <img src={PremiumLogo} alt="" className="shorts" />{" "}
              <span className="menu-text">YouTube Kids</span>
            </div>
            <div className="menu-item">
              <img src={TVLogo} alt="" className="tvlogo" />{" "}
              <span className="menu-text">YouTube TV</span>
            </div>
          </div>
        </div>
        <hr className="hLine" />
        <div className="menu-section">
          <div className="menu-item">
            <SettingsOutlinedIcon />
            <span className="menu-text">Settings</span>
          </div>
          <div className="menu-item">
            <FlagOutlinedIcon />
            <span className="menu-text">Report History</span>
          </div>
          <div className="menu-item">
            <HelpOutlineOutlinedIcon />
            <span className="menu-text">Help</span>
          </div>
          <div className="menu-item">
            <FeedbackOutlinedIcon />
            <span className="menu-text">Send feedback</span>
          </div>
        </div>
        <hr className="hLine" />
        <div className="final">
          <div className="item1">About</div>
          <div className="item2">Press</div>
          <div className="item3">Copyright</div>
          <div className="item4">Contact us</div>
          <div className="item5">Creators</div>
          <div className="item6">Advertise</div>
          <div className="item7">Developers</div>
        </div>
        <div className="final">
          <div>Terms</div>
          <div>Privacy</div>
          <div>Policy </div>
          <div className="grid">How YouTube Works</div>
          <div className="grid">Test New Features</div>
        </div>
        <div className="copyright">© 2022 AKB LLC</div>
      </div>
      <div
        className={sideBar ? "minscreen-sidebar open" : "minscreen-sidebar "}
        onClick={() => showSideBar(false)}
      >
        <div className="md-menu-section">
          <div className="md-menu-item" onClick={() => navigate("/")}>
            <HomeIcon /> <span className="menu-text">Home</span>
          </div>
          <div className="md-menu-item">
            <img src={ShortsLogo} alt="" className="shorts" />{" "}
            <span className="menu-text">Shorts</span>
          </div>
          <div
            className="md-menu-item"
            onClick={() => navigate("/subscriptions")}
          >
            <SubscriptionsOutlinedIcon />
            <span className="menu-text">Subscriptions</span>
          </div>
          <div className="md-menu-item" onClick={() => navigate("/library")}>
            <VideoLibraryOutlinedIcon />
            <span className="menu-text">Library</span>
          </div>
          <div className="md-menu-item" onClick={() => navigate("/history")}>
            <HistoryOutlinedIcon />
            <span className="menu-text">History</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;

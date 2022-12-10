import React from "react";
import "./SideMenu.scss";

import ShortsLogo from "../../assets/shorts.svg";
import PremiumLogo from "../../assets/premium.png";
import MusicLogo from "../../assets/music.png";

import TVLogo from "../../assets/tv.png";

import { Nav } from "react-bootstrap";

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
} from "../exports";
import { useNavigate } from "react-router-dom";

const SideMenu = () => {
  const navigate = useNavigate();
  const menu = false;
  return (
    <div className="sidemenu-container">
      {!menu ? (
        <div className="lg-sidebar">
          <div className="menu-container">
            <div className="menu-section">
              <Nav.Link className="menu-item" onClick={() => navigate("/")}>
                <HomeIcon /> <span className="menu-text">Home</span>
              </Nav.Link>
              <Nav.Link className="menu-item">
                <img src={ShortsLogo} alt="" className="shorts" />{" "}
                <span className="menu-text">Shorts</span>
              </Nav.Link>
              <Nav.Link
                className="menu-item"
                onClick={() => navigate("/subscriptions")}
              >
                <SubscriptionsOutlinedIcon />
                <span className="menu-text">Subscriptions</span>
              </Nav.Link>
            </div>
            <hr className="hLine" />
            <div className="menu-section">
              <Nav.Link
                className="menu-item"
                onClick={() => navigate("/library")}
              >
                <VideoLibraryOutlinedIcon />
                <span className="menu-text">Library</span>
              </Nav.Link>
              <Nav.Link
                className="menu-item"
                onClick={() => navigate("/history")}
              >
                <HistoryOutlinedIcon />
                <span className="menu-text">History</span>
              </Nav.Link>
            </div>
            <hr className="hLine" />
            <div className="login-container">
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
            <hr className="hLine" />
            <div className="menu-section-container">
              <h6 className="sub-head">Explore</h6>
              <div className="menu-section">
                <Nav.Link className="menu-item">
                  <WhatshotIcon />
                  <span className="menu-text">Trending</span>
                </Nav.Link>
                <Nav.Link className="menu-item">
                  <MusicNoteIcon />
                  <span className="menu-text">Music</span>
                </Nav.Link>
                <Nav.Link className="menu-item">
                  <LocalMoviesIcon />
                  <span className="menu-text">Movies</span>
                </Nav.Link>
                <Nav.Link className="menu-item">
                  <LiveTvOutlinedIcon />
                  <span className="menu-text">Live</span>
                </Nav.Link>
                <Nav.Link className="menu-item">
                  <VideogameAssetOutlinedIcon />
                  <span className="menu-text">Gaming</span>
                </Nav.Link>
                <Nav.Link className="menu-item">
                  <ArticleOutlinedIcon />
                  <span className="menu-text">News</span>
                </Nav.Link>
                <Nav.Link className="menu-item">
                  <EmojiEventsOutlinedIcon />
                  <span className="menu-text">Sports</span>
                </Nav.Link>
                <Nav.Link className="menu-item">
                  <LightbulbOutlinedIcon />
                  <span className="menu-text">Learning</span>
                </Nav.Link>
                <Nav.Link className="menu-item">
                  <DryCleaningOutlinedIcon />
                  <span className="menu-text">Fashion&Beauty</span>
                </Nav.Link>
              </div>
            </div>
            <hr className="hLine" />
            <div className="menu-section">
              <Nav.Link className="menu-item">
                <AddCircleOutlineIcon />
                <span className="menu-text"> Browse Channels</span>
              </Nav.Link>
            </div>
            <hr className="hLine" />
            <div className="menu-section-container">
              <h6 className="sub-head">More From YouTube</h6>
              <div className="menu-section">
                <Nav.Link className="menu-item">
                  <img src={PremiumLogo} alt="" className="shorts" />{" "}
                  <span className="menu-text">YouTubePremium</span>
                </Nav.Link>
                <Nav.Link className="menu-item">
                  <img src={MusicLogo} alt="" className="shorts" />{" "}
                  <span className="menu-text">YouTube Music</span>
                </Nav.Link>
                <Nav.Link className="menu-item">
                  <img src={PremiumLogo} alt="" className="shorts" />{" "}
                  <span className="menu-text">YouTube Kids</span>
                </Nav.Link>
                <Nav.Link className="menu-item">
                  <img src={TVLogo} alt="" className="tvlogo" />{" "}
                  <span className="menu-text">YouTube TV</span>
                </Nav.Link>
              </div>
            </div>
            <hr className="hLine" />
            <div className="menu-section">
              <Nav.Link className="menu-item">
                <SettingsOutlinedIcon />
                <span className="menu-text">Settings</span>
              </Nav.Link>
              <Nav.Link className="menu-item">
                <FlagOutlinedIcon />
                <span className="menu-text">Report History</span>
              </Nav.Link>
              <Nav.Link className="menu-item">
                <HelpOutlineOutlinedIcon />
                <span className="menu-text">Help</span>
              </Nav.Link>
              <Nav.Link className="menu-item">
                <FeedbackOutlinedIcon />
                <span className="menu-text">Send feedback</span>
              </Nav.Link>
            </div>
            <hr className="hLine" />
            <div className="final">
              <Nav.Link className="item1">About</Nav.Link>
              <Nav.Link className="item2">Press</Nav.Link>
              <Nav.Link className="item3">Copyright</Nav.Link>
              <Nav.Link className="item4">Contact us</Nav.Link>
              <Nav.Link className="item5">Creators</Nav.Link>
              <Nav.Link className="item6">Advertise</Nav.Link>
              <Nav.Link className="item7">Developers</Nav.Link>
            </div>
            <div className="final">
              <Nav.Link>Terms</Nav.Link>
              <Nav.Link>Privacy</Nav.Link>
              <Nav.Link>Policy </Nav.Link>
              <Nav.Link className="grid">How YouTube Works</Nav.Link>
              <Nav.Link className="grid">Test New Features</Nav.Link>
            </div>
            <div className="copyright">© 2022 AKB LLC</div>
          </div>
        </div>
      ) : null}
      <div className="minscreen-sidebar">
        <div className="md-menu-container">
          <div className="md-menu-section">
            <Nav.Link className="md-menu-item" onClick={() => navigate("/")}>
              <HomeIcon /> <span className="menu-text">Home</span>
            </Nav.Link>
            <Nav.Link className="md-menu-item">
              <img src={ShortsLogo} alt="" className="shorts" />{" "}
              <span className="menu-text">Shorts</span>
            </Nav.Link>
            <Nav.Link
              className="md-menu-item"
              onClick={() => navigate("/subscriptions")}
            >
              <SubscriptionsOutlinedIcon />
              <span className="menu-text">Subscriptions</span>
            </Nav.Link>
            <Nav.Link
              className="md-menu-item"
              onClick={() => navigate("/library")}
            >
              <VideoLibraryOutlinedIcon />
              <span className="menu-text">Library</span>
            </Nav.Link>
            <Nav.Link
              className="md-menu-item"
              onClick={() => navigate("/history")}
            >
              <HistoryOutlinedIcon />
              <span className="menu-text">History</span>
            </Nav.Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;

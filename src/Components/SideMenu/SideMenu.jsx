import React from "react";
import "./SideMenu.scss";
import YoutubeLogo from "../../assets/youtube.png";
import ShortsLogo from "../../assets/shorts.svg";
import PremiumLogo from "../../assets/premium.png";
import MusicLogo from "../../assets/music.png";

import TVLogo from "../../assets/tv.png";

import { Nav } from "react-bootstrap";

import {
  HomeIcon,
  ExploreOutlinedIcon,
  SubscriptionsOutlinedIcon,
  VideoLibraryOutlinedIcon,
  HistoryOutlinedIcon,
  LibraryMusicOutlinedIcon,
  SportsEsportsOutlinedIcon,
  SportsBasketballOutlinedIcon,
  ArticleOutlinedIcon,
  LiveTvOutlinedIcon,
  AccountCircleOutlinedIcon,
  SettingsOutlinedIcon,
  FlagOutlinedIcon,
  HelpOutlineOutlinedIcon,
  SettingsBrightnessOutlinedIcon,
  WhatshotIcon,
  MusicNoteIcon,
  LocalMoviesIcon,
  VideogameAssetOutlinedIcon,
  EmojiEventsOutlinedIcon,
  DryCleaningOutlinedIcon,
  LightbulbOutlinedIcon,
  AddCircleOutlineIcon,
} from "../exports";

const explore = [
  { name: "Trending", icon: <WhatshotIcon /> },
  { name: "Music", icon: <MusicNoteIcon /> },
  { name: "Movies", icon: <LocalMoviesIcon /> },
  { name: "Live", icon: <LiveTvOutlinedIcon /> },
  { name: "Gaming", icon: <VideogameAssetOutlinedIcon /> },
  { name: "News", icon: <ArticleOutlinedIcon /> },
  { name: "Sports", icon: <EmojiEventsOutlinedIcon /> },
  { name: "Learning", icon: <LightbulbOutlinedIcon /> },
  { name: "Fashion & Beauty", icon: <DryCleaningOutlinedIcon /> },
];
const SideMenu = () => {
  return (
    <div className="sidemenu-container">
      <div className="logo-container">
        <Nav.Link className="logo">
          <img src={YoutubeLogo} alt="app-logo" />
          <h5 className="logo-text">YouTube</h5>
          <p className="logo-helper">IN</p>
        </Nav.Link>
      </div>
      <div className="menu-container">
        <div className="menu-section">
          <Nav.Link className="menu-item">
            <HomeIcon /> <span className="menu-text">Home</span>
          </Nav.Link>
          <Nav.Link className="menu-item">
            <img src={ShortsLogo} alt="" className="shorts" />{" "}
            <span className="menu-text">Shorts</span>
          </Nav.Link>
          <Nav.Link className="menu-item">
            <SubscriptionsOutlinedIcon />
            <span className="menu-text">Subscriptions</span>
          </Nav.Link>
        </div>
        <hr className="hLine" />
        <div className="menu-section">
          <Nav.Link className="menu-item">
            <VideoLibraryOutlinedIcon />
            <span className="menu-text">Library</span>
          </Nav.Link>
          <Nav.Link className="menu-item">
            <HistoryOutlinedIcon />
            <span className="menu-text">History</span>
          </Nav.Link>
        </div>
        <hr className="hLine" />
        <div className="Login">
          <div>Sign in to like videos, comment, and subscribe.</div>
          <AccountCircleOutlinedIcon />
        </div>
        <hr className="hLine" />
        <div className="menu-section">
          <h6 className="sub-head">Explore</h6>
          {explore.map(({ name, icon }, index) => (
            <Nav.Link className="menu-item" key={index}>
              {icon}
              <span className="menu-text">{name}</span>
            </Nav.Link>
          ))}
        </div>
        <hr className="hLine" />
        <div className="menu-section">
          <AddCircleOutlineIcon /> Browse Channels
        </div>
        <hr className="hLine" />
        <div className="menu-section">
          <h6 className="sub-head">More From YouTube</h6>
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
    </div>
  );
};

export default SideMenu;

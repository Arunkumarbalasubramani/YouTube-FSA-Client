import React, { useState } from "react";
import "./Navbar.scss";
import YoutubeLogo from "../../assets/youtube.png";
import { Nav } from "react-bootstrap";

import {
  AccountCircleOutlinedIcon,
  SearchOutlinedIcon,
  NotificationsActiveIcon,
  VideoCallIcon,
  DarkModeIcon,
} from "../exports";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import demoAvatar from "../../assets/demoAvatar.jpg";

import Brightness7Icon from "@mui/icons-material/Brightness7";
import { IconButton, Tooltip } from "@mui/material";

const Navbar = ({ theme, toggleTheme, showSideBar }) => {
  const navigate = useNavigate();
  const isLoggedIn = true;
  const [nextTheme, setNextTheme] = useState("Dark");

  return (
    <>
      <div className="NavbarContainer">
        <div className="logo-container">
          <FaBars
            className="menu-icon"
            size={28}
            onClick={() => showSideBar()}
          />
          <div className="logo" onClick={() => navigate("/")}>
            <img src={YoutubeLogo} alt="app-logo" />
            <h5 className="logo-text">YouTube</h5>
            <p className="logo-helper">IN</p>
          </div>
        </div>
        <div className="search-container">
          <div className="search">
            <input
              id="search "
              type="text"
              className="search-input"
              placeholder="Search"
            />
            <button className="search-btn">
              <SearchOutlinedIcon />
            </button>
          </div>
        </div>
        <div className="themeSwitch">
          <Tooltip title={`Switch to  ${nextTheme}`} arrow>
            <IconButton>
              <Nav.Link
                onClick={() => {
                  toggleTheme();
                  setNextTheme(nextTheme === "Dark" ? "Light" : "Dark");
                }}
              >
                {theme === "Dark" ? (
                  <Brightness7Icon className="theme-switch-icon" />
                ) : (
                  <DarkModeIcon className="theme-switch-icon" />
                )}
              </Nav.Link>
            </IconButton>
          </Tooltip>
        </div>

        {isLoggedIn ? (
          <div className="loggedInIcons">
            <VideoCallIcon size={30} />
            <NotificationsActiveIcon size={30} />
            <div>
              <Tooltip title="Click to Logout" arrow>
                <IconButton>
                  <img
                    src={demoAvatar}
                    alt="account-thumnail"
                    className="acc-thumbnail"
                    onClick={() => {}}
                  />
                </IconButton>
              </Tooltip>
            </div>
          </div>
        ) : (
          <div className="login-btn">
            <button className="sign-in-btn" onClick={() => navigate("/signin")}>
              <AccountCircleOutlinedIcon />
              Sign In
            </button>
          </div>
        )}
      </div>
      {/* <div className="more">
<Nav.Link
  className="more-actions"
  onClick={() => setShowMore(!showMore)}
>
  <MoreVertOutlinedIcon />
</Nav.Link>

{showMore ? (
  <div className="additional-options">
    <div className="menu-item">
      <SafetyCheckIcon />
      <span className="menu-text">Your Data in Youtube</span>
    </Nav.Link>

    <hr className="hLine" />
    <Nav.Link className="menu-item">
      <Brightness3OutlinedIcon />
      <span className="menu-text">Appearance : {theme} </span>
      <span>
        <KeyboardArrowRightOutlinedIcon />
      </span>
    </Nav.Link>
    <Nav.Link className="menu-item">
      <TranslateOutlinedIcon />
      <span className="menu-text">Language : English </span>
      <span>
        <KeyboardArrowRightOutlinedIcon />
      </span>
    </Nav.Link>
    <Nav.Link className="menu-item">
      <PolicyOutlinedIcon />
      <span className="menu-text">RestrictedMode : Off </span>
      <span>
        <KeyboardArrowRightOutlinedIcon />
      </span>
    </Nav.Link>
    <Nav.Link className="menu-item">
      <LanguageOutlinedIcon />
      <span className="menu-text">Location : India </span>
      <span>
        <KeyboardArrowRightOutlinedIcon />
      </span>
    </Nav.Link>
    <Nav.Link className="menu-item">
      <KeyboardAltOutlinedIcon />
      <span className="menu-text">Keyboard Shortcuts </span>
      <span>
        <KeyboardArrowRightOutlinedIcon />
      </span>
    </Nav.Link>

    <hr className="hLine" />
    <Nav.Link className="menu-item" onClick={() => navigate("/")}>
      <SettingsOutlinedIcon />
      <span className="menu-text">Settings</span>
    </Nav.Link>
    <hr className="hLine" />

    <Nav.Link className="menu-item">
      <HelpOutlineOutlinedIcon />
      <span className="menu-text">Help</span>
    </Nav.Link>
    <Nav.Link className="menu-item">
      <FeedbackOutlinedIcon />
      <span className="menu-text">Send feedback</span>
    </Nav.Link>

    <hr className="hLine" />
  </div>
) : null}
</div> */}
      {/* 
// MoreVertOutlinedIcon,
// SettingsOutlinedIcon,
// HelpOutlineOutlinedIcon,
// FeedbackOutlinedIcon,
// SafetyCheckIcon,
// Brightness3OutlinedIcon,
// TranslateOutlinedIcon,
// PolicyOutlinedIcon,
// LanguageOutlinedIcon,
// KeyboardAltOutlinedIcon,
// KeyboardArrowRightOutlinedIcon, */}
    </>
  );
};

export default Navbar;

import React from "react";
import "./Navbar.scss";
import YoutubeLogo from "../../assets/youtube.png";
import { Nav } from "react-bootstrap";

import {
  AccountCircleOutlinedIcon,
  SearchOutlinedIcon,
  MicIcon,
  NotificationsActiveIcon,
  VideoCallIcon,
  DarkModeIcon,
} from "../exports";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import demoAvatar from "../../assets/demoAvatar.jpg";

import Brightness7Icon from "@mui/icons-material/Brightness7";

const Navbar = ({ theme, toggleTheme }) => {
  const navigate = useNavigate();
  const isLoggedIn = true;
  return (
    <>
      <div className="NavbarContainer">
        <div className="logo-container">
          <FaBars className="menu-icon" size={26} />
          <Nav.Link className="logo" onClick={() => navigate("/")}>
            <img src={YoutubeLogo} alt="app-logo" />
            <h5 className="logo-text">YouTube</h5>
            <p className="logo-helper">IN</p>
          </Nav.Link>
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
          <Nav.Link className="voice-search">
            <MicIcon />
          </Nav.Link>
        </div>
        <div className="themeSwitch">
          <Nav.Link onClick={() => toggleTheme()}>
            {theme === "Dark" ? <Brightness7Icon /> : <DarkModeIcon />}
          </Nav.Link>
        </div>

        {isLoggedIn ? (
          <div className="loggedInIcons">
            <VideoCallIcon size={30} />
            <NotificationsActiveIcon size={30} />
            <img
              src={demoAvatar}
              alt="account-thumnail"
              className="acc-thumbnail"
            />
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
    </>
  );
};

export default Navbar;

{
  /* <div className="more">
<Nav.Link
  className="more-actions"
  onClick={() => setShowMore(!showMore)}
>
  <MoreVertOutlinedIcon />
</Nav.Link>

{showMore ? (
  <div className="additional-options">
    <Nav.Link className="menu-item">
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
</div> */
}

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
// KeyboardArrowRightOutlinedIcon,

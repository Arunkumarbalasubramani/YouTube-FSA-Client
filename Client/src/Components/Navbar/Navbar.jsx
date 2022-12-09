import React, { useState } from "react";
import "./Navbar.scss";

import { Nav } from "react-bootstrap";

import {
  AccountCircleOutlinedIcon,
  SearchOutlinedIcon,
  MicIcon,
  MoreVertOutlinedIcon,
  SettingsOutlinedIcon,
  HelpOutlineOutlinedIcon,
  FeedbackOutlinedIcon,
  SafetyCheckIcon,
  Brightness3OutlinedIcon,
  TranslateOutlinedIcon,
  PolicyOutlinedIcon,
  LanguageOutlinedIcon,
  KeyboardAltOutlinedIcon,
  KeyboardArrowRightOutlinedIcon,
} from "../exports";
import { useNavigate } from "react-router-dom";

const Navbar = ({ theme, toggleTheme }) => {
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="NavbarContainer">
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
      <div className="more">
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
            <Nav.Link className="menu-item" onClick={() => toggleTheme()}>
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
            <Nav.Link className="menu-item">
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
      </div>

      <div className="login-btn">
        <button className="sign-in-btn" onClick={() => navigate("/signin")}>
          <AccountCircleOutlinedIcon />
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  MainFeed,
  Navbar,
  SideMenu,
  History,
  Library,
  Subscriptions,
  VideosPage,
  ChannelPage,
  WatchLater,
  SignIn,
  SignUp,
  CategoryVideos,
  LikedVideos,
  Explore,
  SearchFeed,
} from "./Components/exports";

import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState("Light");
  const [sideBar, toggleSideBar] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const handleLogin = (data) => {
    if (data) {
      setisLoggedIn(true);
    }
  };
  const toggleTheme = () => {
    setTheme((current) => (current === "Light" ? "Dark" : "Light"));
  };
  const showSideBar = () => {
    toggleSideBar(!sideBar);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, URL }}>
      <BrowserRouter>
        <Navbar
          theme={theme}
          toggleTheme={toggleTheme}
          showSideBar={showSideBar}
          isLoggedIn={isLoggedIn}
        />
        <div className="App" id={theme}>
          <div className={sideBar ? "menu open" : "menu "}>
            <SideMenu
              sideBar={sideBar}
              showSideBar={showSideBar}
              isLoggedIn={isLoggedIn}
            />
          </div>

          <div className="main">
            <Routes>
              <Route
                path="/"
                element={<MainFeed URL={URL} isLoggedIn={isLoggedIn} />}
              />
              <Route
                path="/history"
                element={<History />}
                isLoggedIn={isLoggedIn}
              />
              <Route
                path="/library"
                element={<Library isLoggedIn={isLoggedIn} />}
              />
              <Route path="/watchlater" element={<WatchLater />} />
              <Route path="/subscriptions" element={<Subscriptions />} />
              <Route path="/exploreChannels" element={<Explore />} />
              <Route
                path="/video/:videoId"
                element={<VideosPage isLoggedIn={isLoggedIn} />}
              />
              <Route path="/search/:searchTerm" element={<SearchFeed />} />
              <Route path="/channel/:channelId" element={<ChannelPage />} />
              <Route path="/liked-videos" element={<LikedVideos />} />
              <Route
                path="/signin"
                element={<SignIn loggedIn={handleLogin} />}
              />
              <Route path="/signup" element={<SignUp />} />
              <Route path="*" element={<MainFeed />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;

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
} from "./Components/exports";

import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState("Light");
  const [sideBar, toggleSideBar] = useState(false);
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
        />
        <div className="App" id={theme}>
          <div className={sideBar ? "menu open" : "menu "}>
            <SideMenu sideBar={sideBar} showSideBar={showSideBar} />
          </div>

          <div className="main">
            <Routes>
              <Route path="/" element={<MainFeed URL={URL} />} />
              <Route path="/history" element={<History />} />
              <Route path="/library" element={<Library />} />
              <Route path="/watchlater" element={<WatchLater />} />
              <Route path="/subscriptions" element={<Subscriptions />} />
              <Route path="/exploreChannels" element={<Explore />} />
              <Route path="/video/:videoId" element={<VideosPage />} />
              <Route path="/search/:category" element={<CategoryVideos />} />
              <Route path="/channel/:channelId" element={<ChannelPage />} />
              <Route path="/liked-videos" element={<LikedVideos />} />
              <Route path="/signin" element={<SignIn />} />
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

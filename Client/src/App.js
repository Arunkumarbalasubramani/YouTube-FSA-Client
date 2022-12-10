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
} from "./Components/exports";

import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const ThemeContext = createContext(null);
function App() {
  const current = "Light";
  const [theme, setTheme] = useState(current);
  const toggleTheme = () => {
    setTheme((current) => (current === "Light" ? "Dark" : "Light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <BrowserRouter>
        <div className="App" id={theme}>
          <div className="menu">
            <SideMenu />
          </div>

          <div className="main">
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <Routes>
              <Route path="/" element={<MainFeed />} />
              <Route path="/history" element={<History />} />
              <Route path="/library" element={<Library />} />
              <Route path="/watchlater" element={<WatchLater />} />
              <Route path="/subscriptions" element={<Subscriptions />} />
              <Route path="/video/:videoId" element={<VideosPage />} />
              <Route path="/channel/:channelId" element={<ChannelPage />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;

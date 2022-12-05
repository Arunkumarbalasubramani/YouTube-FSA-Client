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
} from "./Components/exports";

import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState("Light");
  const toggleTheme = () => {
    setTheme((current) => (current === "Light" ? "Dark" : "Light"));
  };
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
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
              <Route path="/subscriptions" element={<Subscriptions />} />
              <Route path="/video/:videoId" element={<VideosPage />} />
              <Route path="/channel/:channelId" element={<ChannelPage />} />
            </Routes>
          </div>
        </div>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;

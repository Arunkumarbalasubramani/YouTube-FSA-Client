import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { MainFeed, Navbar, SideMenu } from "./Components/exports";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState("Light");
  const toggleTheme = () => {
    setTheme((current) => (current === "Light" ? "Dark" : "Light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <div className="menu">
          <SideMenu />
        </div>
        <div className="main">
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <MainFeed />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { MainFeed, Navbar, SideMenu } from "./Components/exports";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <div className="menu">
        <SideMenu />
      </div>
      <div className="main">
        <Navbar />
        <MainFeed />
      </div>
    </div>
  );
}

export default App;

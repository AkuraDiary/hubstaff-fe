import "./index.css";
import { Dashboard } from "./Components/Dashboard";
import { Header } from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import SidenavLogo from "./images/header-logo.png";
import DashboardLogo from "./images/icon-dashboard.png";
import ProjectLogo from "./images/icon-project.png";
import MemberLogo from "./images/icon-member.png";

function App() {
  return (
    <div className="App">
      <div className="left-navigation">
        <div className="logo-nav">
          <img src={SidenavLogo} alt="" />
        </div>
        <div className="navigation">
          <div className="link-dashboard">
            <img src={DashboardLogo} alt="" />
            <a href="project.html">Dashboard </a>
          </div>
          <div className="link-project">
            <img src={ProjectLogo} alt="" />
            <a href="project.html">Project </a>
          </div>
          <div className="link-member">
            <img src={MemberLogo} alt="" />
            <a href="member.html">Member </a>
          </div>
        </div>
      </div>
      <Header></Header>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;

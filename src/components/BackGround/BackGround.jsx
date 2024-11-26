import React from "react";
import "./BackGround.css";
import ReactIcon from "../../assets/skills/react.svg";
import NextIcon from "../../assets/skills/nextjs.svg";
import JSIcon from "../../assets/skills/js.svg";
import HtmlIcon from "../../assets/skills/html.svg";
import CssIcon from "../../assets/skills/css.svg";
import NodejsIcon from "../../assets/skills/nodejs.svg";
import ExpressIcon from "../../assets/skills/express.svg";
import BootstrapIcon from "../../assets/skills/bootstrap.svg";
import GitIcon from "../../assets/skills/git.svg";
import GithubIcon from "../../assets/skills/github.svg";
import MongoDBIcon from "../../assets/skills/mongodb.svg";
import TailwindIcon from "../../assets/skills/tailwind.svg";
import MaterialUiIcon from "../../assets/skills/materialUi.svg";

const icons = [
  ReactIcon,
  NextIcon,
  JSIcon,
  HtmlIcon,
  CssIcon,
  NodejsIcon,
  ExpressIcon,
  BootstrapIcon,
  GitIcon,
  GithubIcon,
  MongoDBIcon,
  TailwindIcon,
  MaterialUiIcon,
];

const BackGround = () => {
  return (
    <div className="background-section">
      {/* ////////////// ------------//////////////////////*/}
      <div className="backgroundEffect py-5">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="background-icon-container p-2 rounded-lg bg-white bg-opacity-10 backdrop-filter hover-btn"
          >
            <img
              src={icon}
              alt="tech-icon"
              className="background-background-icon"
            />
          </div>
        ))}
        {icons.map((icon, index) => (
          <div
            key={index + icons.length}
            className="icon-container p-2 rounded-lg bg-white bg-opacity-10 backdrop-filter hover-btn"
          >
            <img
              src={icon}
              alt="tech-icon"
              className="background-background-icon"
            />
          </div>
        ))}
      </div>

      {/* ////////////// ------------//////////////////////*/}

      <div className="backgroundEffect-2 py-5">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="background-icon-container p-2 rounded-lg bg-white bg-opacity-10 backdrop-filter hover-btn "
          >
            <img src={icon} alt="tech-icon" className="background-icon" />
          </div>
        ))}
        {icons.map((icon, index) => (
          <div
            key={index + icons.length}
            className="icon-container p-2 rounded-lg bg-white bg-opacity-10 backdrop-filter hover-btn"
          >
            <img src={icon} alt="tech-icon" className="background-icon" />
          </div>
        ))}
      </div>
      {/* ////////////// ------------//////////////////////*/}
    </div>
  );
};

export default BackGround;

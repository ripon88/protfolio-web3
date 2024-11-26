import React from "react";
import "./BreakingNews.css";
import ganache from "../../assets/skills2/ganache-seeklogo.svg";
import hardhat from "../../assets/skills2/hardhat-seeklogo.svg";
import metamask from "../../assets/skills2/metamask-seeklogo.svg";
import opensea from "../../assets/skills2/opensea-seeklogo.svg";
import openzippelin from "../../assets/skills2/openzeppelin-seeklogo.svg";
import polygon from "../../assets/skills2/polygon-matic-seeklogo.svg";
import solidity from "../../assets/skills2/solidity-seeklogo.svg";
import web3 from "../../assets/skills2/web3js-seeklogo.svg";
import alchemy from "../../assets/skills2/alchemy-seeklogo.svg";
import ethereum from "../../assets/skills2/ethereum-eth-seeklogo.svg";

const icons = [
  ganache,
  hardhat,
  metamask,
  opensea,
  openzippelin,
  polygon,
  solidity,
  web3,
  alchemy,
  ethereum,
];

const BreakingNews2 = () => {
  return (
    <section>
      {/* ////////////// ------------//////////////////////*/}
      <div className="scrollEffect-2 py-5">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="icon-container p-2 rounded-lg bg-white bg-opacity-10 backdrop-filter hover-btn"
          >
            <img src={icon} alt="tech-icon" className="icon" />
          </div>
        ))}
        {icons.map((icon, index) => (
          <div
            key={index + icons.length}
            className="icon-container p-2 rounded-lg bg-white bg-opacity-10 backdrop-filter hover-btn"
          >
            <img src={icon} alt="tech-icon" className="icon" />
          </div>
        ))}
      </div>

      {/* ////////////// ------------//////////////////////*/}
    </section>
  );
};

export default BreakingNews2;

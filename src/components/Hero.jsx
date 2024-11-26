// import React from "react";
import Typewriter from "typewriter-effect";
import heroImage from "../assets/heroimage.jpg";
import heroImage1 from "../assets/heroimage1.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import heroBg from "../assets/heroBg.png";

const Hero = () => {
  return (
    <div className="" id="Hero">
      <div
        className="w-full h-screen mx-auto grid grid-cols-6  items-center p-5 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg}) ` }}
      >
        {/* part-1  */}
        <div className="col-span-3">
          <h1 className="text-5xl text-gredient">
            Hi, I am <span className="text-5xl font-bold ">Rezaul Karim</span>
          </h1>

          <div className="hidden md:block py-3">
            <div className="text-5xl font-medium py-1 ">
              <Typewriter
                options={{
                  strings: [
                    "A Solidity Ethereum Developer",
                    "A MERN Stack developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
          {/* end  here*/}
          {/* animation text */}

          {/* <h1 className="py-2 text-2xl text-gredient">
            {" "}
            I am a passionate{" "}
            <span className="bg-gradient-to-r text-white"> MERN stack </span>
            developer and{" "}
            <span className="bg-gradient-to-r text-white">
              {" "}
              Web3 enthusiast{" "}
            </span>{" "}
            .
          </h1> */}
          <h1 className="py-3 md:text-xl text-gredient ">
            As a Web3 and MERN Stack developer, I specialize in building secure
            decentralized applications (dApps) with Solidity, Ethereum, and
            modern web technologies.
          </h1>

          {/* <span className="py-2 text-2xl text-white bg-gradient-to-r hover:opacity-90"> */}
          {/* <h1 className="py-2 text-2xl text-gredient">
            <span className="text-gredient"> I am a passionate</span>{" "}
            <span className="py-2 text-2xl text-white "> MERN stack </span>{" "}
            <span className="text-gredient"> developer and </span>
            <span className="py-2 text-2xl text-white ">Web3 enthusiast</span>.
          </h1> */}

          {/* //////// */}
          {/* ////-----ICONS  */}
          <div>
            <div className="flex items-center gap-5 py-3">
              <p className="py-5">Find me on:</p>
              <Link
                target="_blank"
                to={"https://github.com/rezaulkarim7080"}
                className="p-3 rounded-xl glass-effect"
              >
                <FaGithub size={35} className=" hover-btn" />
              </Link>
              <Link
                target="_blank"
                to={"https://www.linkedin.com/in/rezaulkarim7080/"}
                className="p-3 rounded-xl glass-effect"
              >
                <FaLinkedin size={35} className="text-cyan-600  hover-btn" />
              </Link>
            </div>
          </div>
        </div>

        {/* //// Hero Image--/// */}
        <div className=" justify-center flex items-center col-span-3 ">
          <img
            src={heroImage}
            alt="heroImage"
            className="w-[65%] rounded-full border-[5px] border-cyan-600  shadow-inner bg-white bg-opacity-10 backdrop-filter scale-up-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

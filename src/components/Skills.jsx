import React from "../assets/skills/react.svg";

import BreakingNews from "./BreakingNews/BreakingNews";
import BreakingNews2 from "./BreakingNews/BreakingNews2";

const Skills = () => {
  return (
    <div className="px-5 mt-[100px] " id="Skills">
      <h1 className=" text-center text-3xl font-semibold text-gredient md:py-10">
        Skills & Tools
      </h1>

      {/* //////-----------------/////////////////////////////// */}
      <BreakingNews2 />
      <BreakingNews />
      {/* //////////  */}
    </div>
  );
};

export default Skills;

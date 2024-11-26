// MyProjects.js
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { MdOndemandVideo } from "react-icons/md";
import { projects } from "./projects";
import { useState } from "react";

const MyProjects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleFilter = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === category)
      );
    }
  };

  return (
    <div className="md:px-5 px-2 mt-10" id="MyProjects">
      {/* Add filter buttons */}
      <h1 className="text-gredient text-center text-4xl font-bold md:py-5">
        PROJECTS
      </h1>
      <div className="flex flex-wrap justify-center gap-4 md:py-10 py-5">
        {["All", "Web3", "ReactJS", "NextJS", "HTML/CSS/JS"].map((category) => (
          <button
            key={category}
            onClick={() => handleFilter(category)}
            className={`px-5 py-3 rounded-lg text-lg ${
              activeCategory === category
                ? "bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-500 via-teal-500 to-green-500  "
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Render filtered projects */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="hover:shadow-xl md:grid-cols-3 grid-cols-1 gap-2 justify-center items-center py-2 rounded-2xl glass-effect scale-up-center"
          >
            <div className="image-wrap">
              <Link to={"/"}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl"
                />
              </Link>
            </div>
            <div className="px-5">
              <h1 className="font-medium text-[16px] py-3">{project.title}</h1>
              <h1 className="pb-2 text-[13px] text-slate-400 text-gredient">
                {project.description}
              </h1>
              <div className="flex gap-5 pb-5">
                <Link
                  target="_blank"
                  to={project.links.code}
                  className="flex gap-3 items-center hover:text-[#00df9a] duration-400 cursor-pointer"
                >
                  <h1 className=" text-[14px]">Code</h1>
                  <FiGithub size={20} />
                </Link>
                <Link
                  target="_blank"
                  to={project.links.live}
                  className="flex gap-3 items-center hover:text-[#00df9a] duration-400 cursor-pointer"
                >
                  <h1 className="text-[14px]">Live</h1>
                  <FaExternalLinkAlt size={15} />
                </Link>
                {project.links.video && (
                  <Link
                    target="_blank"
                    to={project.links.video}
                    className="flex gap-3 items-center hover:text-[#00df9a] duration-400 cursor-pointer"
                  >
                    <h1 className="text-[14px] hover:text-red-500">
                      Project Video
                    </h1>
                    <div className="bg-red-500 border-[1px] hover:bg-white border-red-500 p-1 rounded-full">
                      <MdOndemandVideo
                        size={15}
                        className="text-white hover:text-red-500"
                      />
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;

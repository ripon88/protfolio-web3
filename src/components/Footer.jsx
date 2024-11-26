import { CiLinkedin } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";
const Footer = () => {
  return (
    <div>
      <div className="text-slate-700 py-5">
        <hr />
      </div>

      <div className="flex items-center justify-center gap-10 py-3 px-5">
        <div>Copyright © 2023. All rights are reserved</div>
        <div>Made with ❤️ by Rezaul Karim.</div>
        <div className="flex gap-3">
          <CiLinkedin size={30} />
          <LuGithub size={30} />
        </div>
      </div>
    </div>
  );
};

export default Footer;

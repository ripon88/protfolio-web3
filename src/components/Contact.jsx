import { FaMapLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
const Contact = () => {
  return (
    <div className="px-5 pb-10  " id="Contact">
      <h1 className="text-white text-center text-3xl font-semibold pt-10 text-gredient">
        Contact
      </h1>
      <h1 className="text-center py-5  text-2xl">Hit me up! 👇</h1>
      <div className="  md:flex justify-center items-center gap-6 py-10">
        {/* location  */}

        <div className="w-full flex gap-5 items-center glass-effect p-5 rounded-3xl my-5">
          <div className="bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-500 via-teal-500 to-green-500 p-3 rounded-full">
            <FaMapLocationDot size={25} className="text-black" />
          </div>
          <div>
            <h1 className="text-2xl">Location</h1>
            <h1>Chittagong,Bangladesh</h1>
          </div>
        </div>
        {/* Email  */}

        <div className="w-full flex gap-5 items-center glass-effect p-5 rounded-3xl my-5">
          <div className="bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-500 via-teal-500 to-green-500 p-3 rounded-full">
            <IoIosMail size={25} className="text-black" />
          </div>
          <div>
            <h1 className="text-2xl">Mail</h1>
            <h1>rkrezaulkarim88@gmail.com</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import { FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faUpwork } from "@fortawesome/free-brands-svg-icons";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#0B1120] to-[#0B1120] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Ali Raza</h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        I design and develop end-to-end web solutions, handling both front-end and back-end tasks.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+92 3145903695</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">alirazaf75439@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://github.com/ALI-RAZA75" target="_blank">
            <span className="bannerIcon">
            <FontAwesomeIcon icon={faSquareGithub} />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/ali-raza-739724243/"
            target="_blank"
          >
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
          <a href="https://www.upwork.com/freelancers/~01900a0003bfcb75d2" target="_blank">
            <span className="bannerIcon">
            <FontAwesomeIcon icon={faUpwork} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;

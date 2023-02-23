import getStartImg from "../../../assets/getStart.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../landinPage.css";
import { useState } from "react";
const GetStarted = (props) => {
  const [showArrow, setShowArrow] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center mt-[1rem]">
      <img src={getStartImg} className="w-[20rem] mb-4" />
      <h1 className="text-blue text-lg mb-2">STEP 1</h1>
      <h1 className="font-bold mb-5 text-3xl">
        Check Your Job Stress Level For Today
      </h1>
      <p className="font-sans text-lg mb-5">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <button
        className=" text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-[0.8rem] md:mb-1 ease-linear transition-all duration-150"
        onMouseEnter={() => setShowArrow((prev) => !prev)}
        onMouseLeave={() => setShowArrow((prev) => !prev)}
        onClick={props.move}
      >
        Check Now
        {showArrow && 
          <i className="ml-[0.5rem] arrowIcon">
            <FontAwesomeIcon icon={faArrowRight} />
          </i>
        }
      </button>
    </div>
  );
};
export default GetStarted;

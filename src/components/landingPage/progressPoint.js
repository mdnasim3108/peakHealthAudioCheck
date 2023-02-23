import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./landinPage.css"
const progressPoint = (props) => {
  const classes = `${
    props.progress.working ? "text-[#6ed1f9]" : "text-gray-400"
  }`;
  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="hidden lg:flex lg:flex-row flex-col w-max">  
        <FontAwesomeIcon
          icon={props.icon}
          className={`text-xl mt-2 mr-4 ${classes} transition-all duration-300 ease-linear`}
        />
        <div>
          {/* <h1
            className={`text-left text-sm ${classes} transition-all duration-300 ease-linear`}
          >
            Step 1
          </h1> */}
          <p
            className={` font-[4rem] ${classes} transition-all duration-300 ease-linear w-[8rem]`}
          >
            {props.progress.label}
          </p>
        </div>
      </div>

      <div className="flex flex-row lg:flex-col  lg:w-[3rem] w-full items-center"> 
        <div
          class={`w-[15px] h-[15px] md:w-[20px] md:h-[20px] ${
            props.progress.working ? "bg-[#6ed1f9]" : "bg-gray-200"
          } rounded-full flex items-center justify-center transition-all duration-300 ease-linear`}
        >
          <div
            class={` flex items-center justify-center md:w-[15px] md:h-[15px] relative md:left-[0.3px] ${
              props.progress.working  ? "bg-white" : "bg-gray-200"
            } 
            ${props.progress.animate && "pulse"}
            ${
              props.progress.completed ? "h-[20px] w-[20px] bg-[#6ed1f9]" : "" 
            } rounded-full transition-all duration-600 ease-linear`}
          >
            {props.progress.completed && <FontAwesomeIcon className="text-[0.7rem] text-white" icon={faCheck}/>}
          </div>
        </div>

        <div class="lg:h-[6.5rem] lg:w-[0.15rem] h-[0.18rem] w-[85%] bg-gray-200 border-0 rounded">
          <div
            className={`w-full   transition-all duration-[600ms] ease-linear bg-[#6ed1f9] ${
              props.progress.completed ? "lg:w-full h-full" : "lg:h-[0rem] w-[0rem]"  
            }`}
          />
        </div>  

      </div>
    </div>
  );
};
export default progressPoint;

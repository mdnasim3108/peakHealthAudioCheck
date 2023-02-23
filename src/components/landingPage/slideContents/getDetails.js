import { Player } from "@lottiefiles/react-lottie-player";
import getDetailsImg from "../../../assets/loading.gif";
import { Seek } from "react-loading-indicators";
import processing from "../../../processing1.json";
import { useState } from "react";
import "../landinPage.css"
const GetDetails = (props) => {
  const [yearIsValid,setYearIsValid]=useState(true)
  return (
    <div className="flex md:flex-row flex-col-reverse md:mt-20 mt-5 justify-around">
      <div className="flex flex-col justify-center items-center ">
        {/* <img src={getDetailsImg} /> */}
        <div className="ml-10 mt-5 md:m-0">
          <Player
            autoplay
            loop
            src={processing}
            className="w-[20rem] h-[20rem] relative bottom-5 ml-20"
          ></Player>
        </div>
        <h1 className="text-2xl font-bold font-serif">
          We are Processing your Results
        </h1>
      </div>
      <div className="">
        <h1 className="text-xl font-bold font-sans relative top-5">
          Give your details to send your results
        </h1>
        <form className="mt-10" onSubmit={props.move}>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none mb-5 focus:border-blue-500 "
            id="username"
            type="text"
            placeholder="Your Name"
            required={true}
          />
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none mb-5 focus:border-blue-500"
            id="email"
            type="text"
            placeholder="Your Email"
            required={true}
          />
          <select
            id="countries"
            class=" border border-gray-300 text-gray-400 text-[17px] shadow focus:outline-none  rounded  focus:border-blue-500 block w-full py-1 px-3 mb-5"
          >
            <option selected>Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <input
            className={`yearInput shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none mb-5 ${yearIsValid?"focus:border-blue-500":"focus:border-red-500"} `}
            id="email"
            type="number"
            onChange={(event)=>setYearIsValid(event.target.value.length===4)}
            placeholder="Year of birth"
            required={true}
          />
          {!yearIsValid && <p className="text-sm text-red-300 relative bottom-5 font-sans text-left">Enter a four digit Number</p>}
          <button
            className=" text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white font-bold uppercase mt-5 w-full py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="submit"
          >
            Send my scores
          </button>
        </form>
      </div>
    </div>
  );
};
export default GetDetails;

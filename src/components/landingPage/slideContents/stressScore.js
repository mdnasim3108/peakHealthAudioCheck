import ReactSpeedometer from "react-d3-speedometer";
import { useState, useEffect } from "react";
import "../landinPage.css";
const StressScore = (props) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);
  const labels = [
    {
      text: "Very Bad",
      position: "INSIDE",
      color: "#555",
    },
    {
      text: "Bad",
      position: "INSIDE",
      color: "#555",
    },
    {
      text: "Ok",
      position: "INSIDE",
      color: "#555",
      fontSize: "19px",
    },
    {
      text: "Good",
      position: "INSIDE",
      color: "#555",
    },
    {
      text: "Very Good",
      position: "INSIDE",
      color: "#555",
    },
  ];
  const results = (
    <div className="py-10 px-0 md:px-10 recording">
      <h1 className="text-4xl font-bold font-serif">
        Your Work Stress Score for today
      </h1>
      <div className="bg-gray-400 w-full h-8 rounded-full mt-10">
        <div className="h-full transition-all duration-500 ease-linear w-[70%] rounded-full bg-gradient-to-r from-red-600 to-green-500 scoreFill" />
      </div>
      <div className="flex justify-between">
        <p className="text-lg">Low</p>
        <p className="text-lg">Average</p>
        <p className="text-lg">High</p>
      </div>
      <div className="flex justify-center items-center md:justify-around mt-10 md:flex-row flex-col">
        <ReactSpeedometer
          value={600}
          currentValueText="Happiness Level"
          customSegmentLabels={labels}
          labelFontSize="10px"
        />
        <ReactSpeedometer
          value={600}
          currentValueText="Happiness Level"
          customSegmentLabels={labels}
          labelFontSize="10px"
        />
      </div>
      <div className="relative bottom-20">
      <h1 className="text-xl font-sans font-bold mb-10">Unmanaged Stress can lead to Burnout</h1>
      <button
        className="rounded bg-green-500 p-2 text-white text-lg font-sans"
        onClick={props.move}
      >
        Check my Burnout Level 
      </button>
      </div>
    </div>
  );
  const loadContent = (
    <div className="bg-gray-200 opacity-50 flex justify-center items-center h-full">
      <h1 className="text-lg font-sans font-bold">Getting Your Results....</h1>
    </div>
  );

  return loading ? loadContent : results;
};
export default StressScore;

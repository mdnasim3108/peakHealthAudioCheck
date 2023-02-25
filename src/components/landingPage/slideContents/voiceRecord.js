import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import "../landinPage.css";
import AudioReactRecorder, { RecordState } from "audio-react-recorder";
import { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import audioWave from "../../../AudioWave.json";
import { Player } from "@lottiefiles/react-lottie-player";
const VoiceRecord = (props) => {
  const [record, setRecord] = useState({ audio: null, isRecording: false });
   const voiceClickHandler = async() => {
   await navigator.mediaDevices.getUserMedia({ audio: true })
    .then((stream) => {
      setRecord({ audio: RecordState.START, isRecording: true });
    })
    .catch((err) => {
      alert(`you got an error: ${err}`)})
  }
  const onStop = (audio) => {
    console.log(audio);
  };
  return (
    <div className="voiceRecord relative flex md:flex-row flex-col-reverse sm:mt-0 mt-8">
      <div className="px-10 py-5 mt-10 w-full lg:h-[28rem] sm:h-[27rem] border-2  shadow-lg">
        <div className="">
          <h1 className="text-lg font-bold tracking-wide">INSTRUCTIONS</h1>
          <ul className="text-left list-disc mt-8">
            <li className="mb-6">
              {/* <div className="w-[2rem] mr-3"><img src={starImg} className=" text-sm"/></div> */}
              <p className="">Approx Time-5minutes</p>
            </li>
            <li className="mb-6">
              {/* <div className="w-[2rem] mr-3"><img src={starImg} className=" text-sm"/></div> */}
              <p className="">
                Review your work and life in past one month and select right
                options.
              </p>
            </li>
            <li className="mb-6">
              {/* <div className="w-[2rem] mr-3"><img src={starImg} className=" text-sm"/></div> */}
              <p className="">
                Be honest.The value of this self check is negligible if you
                dont't
              </p>
            </li>
            <li className="mb-6">
              {/* <div className="w-[2rem] mr-3"><img src={starImg} className=" text-sm"/></div> */}
              <span className="">
                We value your privacy. Your scores are confidential and no
                personal information is shared with your organization or anyone
                else.
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`${
          !record.isRecording ? "sm:mt-[8rem]" : "sm:mt-[6rem]"
        } transition-all duration-[300] ease-linear`}
      >
        <h1 className="text-xl  font-sans">Question Of The Day</h1>
        <p className="mt-5 font-bold text-xl">
          What would you like the leadership team to know about your
          oppurtunities for promotion?
        </p>
        <AudioReactRecorder
          canvasWidth={0}
          canvasHeight={0}
          state={record.audio}
          onStop={onStop}
        />
        {!record.isRecording && (
          <div
            onClick={voiceClickHandler}
            class="w-[6rem] h-[6rem] bg-violet-500 hover:bg-violet-600 hover:scale-125 transition-all duration-75 ease-linear  cursor-pointer shadow-2xl rounded-full flex items-center justify-center mt-10 mx-auto"
          >
            <FontAwesomeIcon
              icon={faMicrophone}
              className="text-4xl text-white"
            />
          </div>
        )}

        {record.isRecording && (
          <div className="flex justify-end flex-col mt-10 recording">
            <p className="font-sans text-lg">Please speak for 30 seconds</p>
            <Player
              autoplay
              loop
              src={audioWave}
              className="w-[150px] h-[150px] relative bottom-5"
            ></Player>
            <div className="flex justify-center relative bottom-10">
              <CountdownCircleTimer
                isPlaying
                duration={30}
                colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                colorsTime={[7, 5, 2, 0]}
                size={80}
                strokeWidth={5}
                onComplete={() =>{
                  setRecord({ audio: RecordState.STOP, isRecording: true })
                  setTimeout(() => {
                    props.move()
                  }, 300);
                }
              }
              >
                {({ remainingTime }) => {
                  return (
                    <div
                      onClick={() => {
                        setRecord({
                          audio: RecordState.STOP,
                          isRecording: true,
                        });
                        setTimeout(() => {
                          props.move();
                        }, 300);
                      }}
                      class="w-[4.2rem] h-[4rem] mr-2 bg-violet-500 hover:bg-violet-600 transition-all duration-75 ease-linear  cursor-pointer shadow-lg rounded-full flex items-center justify-center  ml-2"
                    >
                      <FontAwesomeIcon
                        icon={faSquare}
                        mask="sharp"
                        className="text-white text-3xl"
                      />
                    </div>
                  );
                }}
              </CountdownCircleTimer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default VoiceRecord;

import { useState } from "react";
const MoreDetails = (props) => {

  const [stresses,setStresses]=useState([
    { id: "s0", name: "work pressure",selected:false },
    { id: "s1", name: "work pressure",selected:false },
    { id: "s2", name: "work pressure",selected:false },
    { id: "s3", name: "work pressure",selected:false },
    { id: "s4", name: "work pressure",selected:false },
    { id: "s5", name: "work pressure",selected:false },
    { id: "s6", name: "work pressure",selected:false },
    { id: "s7", name: "work pressure",selected:false },
    { id: "s8", name: "work pressure",selected:false },
    { id: "s9", name: "work pressure",selected:false },
  ])
  const stressClickHandler=(event)=>{
    const index=stresses.findIndex((el)=>el.id===event.target.id)
    const newStresses=[...stresses]
    const obj=newStresses[index]
    newStresses[index]={...obj,selected:!obj.selected}
    setStresses(newStresses)
 }

  return (
    <div className="py-5 px-0 lg:px-5">
      <h1 className="font-bold text-2xl font-sans tracking-wide">
        Tell Us More About Your Work.
      </h1>
      <form onSubmit={(event)=>{
          event.preventDefault();
          props.move()
      }} className="lg:mt-[3rem]">
        {/* <label
          class="block text-gray-700 text-lg font-bold mb-2 text-left"
          for="username"
        >
          Age
        </label> */}
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none mb-5 focus:border-blue-500"
          id="username"
          type="text"
          placeholder="Age"
          required
        />
        {/* <label
          class="block text-gray-700 text-lg font-bold mb-2 text-left"
          for="username"
        >
          Gender
        </label> */}
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none mb-5 focus:border-blue-500"
          id="username"
          type="text"
          placeholder="Gender"
          required
        />
        {/* <label
          class="block text-gray-700 text-lg font-bold mb-2 text-left"
          for="username"
        >
          Job Role
        </label> */}
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none mb-5 focus:border-blue-500"
          id="username"
          type="text"
          placeholder="Job Role"
          required
        />
        <label
          class="block text-gray-700 text-lg font-bold mb-2 text-left"
          for="username"
        >
          Key Problems
        </label>
        <div className="grid grid-cols-2  xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 gap-0">{
        stresses.map((el) => {
    return(
    <div
      id={el.id}
      className={`border-2 mx-auto sm:mx-0 px-3 py-1 w-max rounded-full flex p-1 items-center mt-3 hover:border-violet-400 cursor-pointer transition-all ease-linear ${
        el.selected ? "bg-violet-400 text-white" : ""
      }`}
      onClick={stressClickHandler}
    >
      {el.name}
    </div>
    );
  })}
        </div>
        <button
            className="  border border-blue-50 bg-violet-500 text-white font-bold uppercase mt-5 w-[15rem] py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="submit"
          >
            submit
          </button>
      </form>
    </div>
  );
};
export default MoreDetails;

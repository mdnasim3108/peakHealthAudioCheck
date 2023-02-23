const reviewBurnout = (props) => {
  return (
    <div>
      <h1 className="text-xl font-[500]">Your Burnout score</h1>
      <div className="bg-gray-400 w-full h-8 rounded-full mt-20">
        <div className="h-full transition-all duration-500 ease-linear w-[70%] rounded-full bg-gradient-to-r from-red-600 to-green-500 scoreFill" />
      </div>
      <div className="flex justify-between">
        <p className="text-gray-500">Professionall fit</p>
        <p className="text-gray-500">In Burnout</p>
      </div>
      <h1 className="text-xl font-[500] text-left mt-[5rem]">What It Means</h1>
      <p className="font-sans text-left">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <button
        className="rounded border-2 bg-green-500 p-2 text-white text-lg font-sans"
        onClick={props.move}
      >
        Check my recommondations 
      </button>
    </div>
  );
};
export default reviewBurnout;

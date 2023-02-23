import YouTube from 'react-youtube';
const recommendations = () => {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
  return (
    <div className="relative bottom-10">
      <h1 className="text-xl font-[500]">Best recommendations for You</h1>
      <div>
        <img />
        <div className="rounded border-2 shadow-lg p-5 mt-5 hover:bg-[#6ed1f9] cursor-pointer hover:text-white hover:scale-105 transition-all duration-200 ease-linear ">
          <h1 className="font-bold text-xl font-sans text-left">Stress Burster</h1>
          <p className="text-sm text-left">Prof. s kayley</p>
          <p className="text-lg text-left leading-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </p>
        </div>
        <div className="rounded border-2 shadow-lg p-5 mt-5 hover:bg-[#6ed1f9] cursor-pointer hover:text-white hover:scale-105 transition-all duration-200 ease-linear ">
          <h1 className="font-bold text-xl font-sans text-left">Stress Burster</h1>
          <p className="text-sm text-left">Prof. s kayley</p>
          <p className="text-lg text-left leading-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </p>
        </div>
        <div className="rounded border-2 shadow-lg p-5 mt-5 hover:bg-[#6ed1f9] cursor-pointer hover:text-white hover:scale-105 transition-all duration-200 ease-linear ">
          <h1 className="font-bold text-xl font-sans text-left">Stress Burster</h1>
          <p className="text-sm text-left">Prof. s kayley</p>
          <p className="text-lg text-left leading-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </p>
        </div>
      </div>
      {/* <YouTube videoId="2g811Eo7K8U" opts={opts}/> */}
    </div>
  );
};
export default recommendations;

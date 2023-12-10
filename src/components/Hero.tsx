import { useHistory } from "react-router";

interface Props {
  heading: string;
}

const Hero = ({ heading }: Props) => {
  const history = useHistory();
  return (
    <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img">
      {/* Overlay */}
      <div className="flex items-center w-full h-screen z-[2]" style={{
        background: "rgb(193 46 46 / 50%)"
      }}>
        {/* Content */}
        <div className="p-5 text-white z[2] max-w-2xl md:ml-[10%]">
          <h1 className="text-5xl font-sans font-bold md:text-7xl">
            {heading}
          </h1>
          <p className="text-xl mt-6 md:text-2xl">
            Discover a wealth of articles, tools, and support for teenage mental
            health.
          </p>
          <button
            className="text-white border border-gray-800 bg-blue-950 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-md text-md px-5 py-2.5 text-center mr-2 mt-6"
            onClick={() => {
              history.push("/discover");
            }}
          >
            Discover Content
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

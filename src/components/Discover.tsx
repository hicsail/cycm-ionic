import { useHistory } from "react-router";

const Discover = () => {
  const history = useHistory();
  return (
    <div className="flex justify-center my-16">
      <div className="p-8 max-w-7xl md:grid md:gap-16 md:grid-cols-4 md:p-12">
        <div className="col-span-3 flex flex-col items-start justify-center">
          <h5 className="text-4xl font-bold font-sans mb-4 md:mb-6 md:text-5xl">
            Discover Mental Health Resources for Teens
          </h5>
          <p className="text:md font-sans mb-4 md:mb-6 md:text-lg italic">
            Explore our wide range of articles and resources for teens.
          </p>
        </div>
        <div>
          <button
            type="button"
            className="text-gray-900 hover:text-white bg-gray-200 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-md px-5 py-2.5 text-center mr-2"
            onClick={() => {
              history.push("/resource");
            }}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discover;

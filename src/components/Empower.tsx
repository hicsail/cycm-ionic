import { useHistory } from "react-router";

interface EmpowerProps {
  title: string;
  description: string;
  source: string;
  image: string;
}

const Empower = ({ title, description, image }: EmpowerProps) => {
  const history = useHistory();
  return (
    <div className="flex justify-center my-16">
      <div className="p-8 max-w-3xl md:px-20 md:py-16" style={{ backgroundColor: "#f76a51", borderRadius: 40 }}>
        <div className="flex flex-col items-start justify-center my-4">
          <h5 className="text-4xl font-bold font-sans mb-4 md:mb-6 md:text-5xl">{title}</h5>
          <p className="text-md font-sans mb-4 md:mb-10 md:text-lg">{description}</p>
          <button
            type="button"
            className="text-white border border-gray-800 bg-blue-950 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-md text-md px-5 py-2.5 text-center mr-2"
            onClick={() => {
              history.push("/about-us");
            }}
          >
            Learn More about the Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default Empower;

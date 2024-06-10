import CenterDescriptionCards from "../components/CenterDescriptionCards";
import Empower from "../components/Empower";
import HelpInfographics from "../components/HelpInfographics";
import NewHero from "../components/NewHero";
import SocialInfographics from "../components/SocialInfographics";
import { useHistory } from "react-router";

const Index: React.FC = () => {
  const history = useHistory();

  return (
    <div>
      <NewHero />
      <div className="bg-gradient-to-b from-[#FFE2E2] to-[#FFFFFF]">
        <div className="h-12 md:h-64"/>
        <CenterDescriptionCards />
        <div className="relative max-w-5xl mx-auto my-16">
          <img className="w-full h-auto" alt="Vector" src="vector.svg" />
          <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="font-sans text-[#101066] text-[calc(6vw)] lg:text-[42px] text-center font-[600] tracking-wide">
              Teens need
              <br />
              mental health support
            </h1>
          </div>
        </div>
        <HelpInfographics />
        <Empower
          description="Discover helpful resources and articles to promote mental health awareness and support for teens. Together, we can create a safe and nurturing environment for their well-being."
          bgColor="#FC8D3D"
          btnElement={
            <button
              type="button"
              className={`text-white border border-gray-800 bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-md px-5 py-2.5`}
              onClick={() => {
                history.push("/discover");
              }}
            >
              Read More
            </button>
          }
        />
      </div>
      <div className="relative bg-gradient-to-b from-[#FB4B45] to-[#FFABE1] pb-32">
        <img className="w-full h-auto z-[10]" alt="union-1" src="union-1.png" />
        <SocialInfographics />
        <Empower
          description="Learn more about the Center for Young Colorful Minds and efforts being undertaken to address the teen mental health crisis."
          bgColor="#FF6565"
          rounded
          btnElement={
            <button
              type="button"
              className={`text-white border border-gray-800 bg-orange-400 hover:bg-orange-300 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-md px-5 py-2.5`}
              onClick={() => {
                history.push("/about-us");
              }}
            >
              Read More
            </button>
          }
        />
      </div>
    </div>
  );
};

export default Index;

import React from "react";
import CenterDescriptionCards from "../components/CenterDescriptionCards";
import Empower from "../components/Empower";
import HelpInfographics from "../components/HelpInfographics";
import NewHero from "../components/NewHero";
import SocialInfographics from "../components/SocialInfographics";
import { useHistory } from "react-router";
import TempFunctions from "../components/TempFunctions";
import Button from "../components/Button";

const Index: React.FC = () => {
  const history = useHistory();

  return (
    <div>
      <NewHero />
      <div className="bg-gradient-to-b from-[#FFE2E2] to-[#FFFFFF]">
        <div className="h-12 md:h-64" />
        <CenterDescriptionCards/>
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
          textColor="white"
          btnElement={
            <Button
              text="Read More"
              backgroundColor="orangered"
              size="xs"
              px="1em"
              py="0.5em"
              onClick={() => {
                history.push("/discover");
              }}
            />
          }
        />
      </div>
      <div className="relative bg-gradient-to-b from-[#FB4B45] to-[#FFABE1] pb-32">
        <img className="w-full h-auto z-[10]" alt="union-1" src="union-1.png" />
        <SocialInfographics />
        <Empower
          
          description="Avoid misinformation provided on social media by accessing our mental health information for teens, reviewed by trusted mental health experts"

          bgColor="#FF6565"
          rounded
          textColor="white"
          btnElement={
            <Button
              text="Read More"
              backgroundColor="darkorange"
              px={"1em"}
              py={"0.5em"}
              onClick={() => {
                history.push("/about-us");
              }}
            />
          }
        />
      </div>
    </div>
  );
};

export default Index;

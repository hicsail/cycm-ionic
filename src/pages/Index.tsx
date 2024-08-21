import React from "react";
import CenterDescriptionCards from "../components/CenterDescriptionCards";
import Empower from "../components/Empower";
import HelpInfographics from "../components/HelpInfographics";
import NewHero from "../components/NewHero";
import SocialInfographics from "../components/SocialInfographics";
import { useHistory } from "react-router";
import Button from "../components/Button";
import ImageSlideshow from "../components/ImageSlideshow";

const Index: React.FC = () => {
  const history = useHistory();

  return (
    <div>
      <ImageSlideshow />
      {/* <NewHero /> */}
      <div className="bg-gradient-to-b from-[#FFE2E2] from-60% to-[#FFFFFF]">
        <div className="h-12 md:h-64" />
        <CenterDescriptionCards />
        <div className="relative max-w-5xl mx-auto pt-32">
          <img className="w-full h-auto" alt="Vector" src="vector.svg" />
          <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="font-sans text-[#101066] text-[calc(6vw)] lg:text-[42px] text-center font-[600] tracking-wide pt-32">
              Teens need
              <br />
              mental health support
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#FFFFFF] from-25% to-[#FFABE1] from-30% via-[#FB4B45]">
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
      
      <div className="relative pb-32">
        {/* <img className="w-full h-auto z-[10]" alt="union-1" src="union-1.png" /> */}
        <SocialInfographics />
        <Empower
          description="Learn more about the Center for Young Colorful Minds and efforts being undertaken to address the teen mental health crisis."
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
    </div>
  );
};

export default Index;

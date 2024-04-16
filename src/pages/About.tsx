import { IonCard, IonCardHeader } from "@ionic/react";
import DualColumnImageText from "../components/DualColumnImageText";
import DualColumnText from "../components/DualColumnText";
import Profile from "../components/Profile";
import PaddedHeaderText from "../components/PaddedHeaderText";
import AboutMissionSection from "../components/AboutMissionSection";
import AboutTeamProfiles from "../components/AboutTeamProfiles";
import AboutFutureVisionSections from "../components/AboutFutureVisionSections";

const About: React.FC = () => {
  return (
    <div className="pt-12 mb-48">
      <PaddedHeaderText />
      <AboutMissionSection />
      <AboutTeamProfiles />
      <AboutFutureVisionSections />
    </div>
  );
};

export default About;

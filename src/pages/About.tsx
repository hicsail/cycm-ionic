import { IonPage, IonContent } from "@ionic/react";
import PaddedHeaderText from "../components/PaddedHeaderText";
import AboutMissionSection from "../components/AboutMissionSection";
import AboutTeamProfiles from "../components/AboutTeamProfiles";
import AboutFutureVisionSections from "../components/AboutFutureVisionSections";
import Footer from "../components/Footer";

const About: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="pt-36 md:pt-12 mb-48">
        <PaddedHeaderText />
        <AboutMissionSection />
        <AboutTeamProfiles />
        <AboutFutureVisionSections />
        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default About;

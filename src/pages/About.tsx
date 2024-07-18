import { IonCard, IonCardHeader, IonContent, IonPage } from "@ionic/react";
import DualColumnImageText from "../components/DualColumnImageText";
import DualColumnText from "../components/DualColumnText";
import Profile from "../components/Profile";
import PaddedHeaderText from "../components/PaddedHeaderText";
import AboutMissionSection from "../components/AboutMissionSection";
import AboutTeamProfiles from "../components/AboutTeamProfiles";
import AboutFutureVisionSections from "../components/AboutFutureVisionSections";
import Footer from "../components/Footer";

const About: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div className="pt-36 md:pt-12 mb-48">
          <PaddedHeaderText />
          <AboutMissionSection />
        </div>
        <AboutTeamProfiles />
        <AboutFutureVisionSections />
        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default About;

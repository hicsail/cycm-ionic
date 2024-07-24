import React from "react";
import TempFunction from "./TempFunction";
import { IonButton, IonIcon } from "@ionic/react";
import { chevronForwardOutline } from "ionicons/icons";

export default function TempFunctions() {
  const [slide, setSlide] = React.useState(0);
  const descriptions = [
    "Create educational content approved by mental health licensed clinicians and teens",
    "Build community partnerships to support youth through mental health programs and training",
    "Partner with researchers to design youth mental health programs targetting needs of diverse youth",
  ];
  const backgroundtemp = [
    "bg-[url('public/TempFunctionImage.png')]",
    "",
    "",
  ];
  const nextSlide = () => {
    setSlide(slide > descriptions.length - 2 ? 0 : slide + 1);
  };

  return (
   <div className="flex flex-col max-w-7xl items-center mt-8 mx-auto gap-4 md:gap-14 px-8 z-[1] justify-center">
      <TempFunction description={descriptions[slide]}  />
      <TempFunction backgroundtemp={backgroundtemp[slide]}  />
      <IonButton
        className="absolute mt-[23%] ml-[80%] justify-end w-[4rem] h-[3rem] "
        onClick={nextSlide}
        color = "transparent">
        
        <IonIcon icon={chevronForwardOutline} style={{ color:'red'}}/>
      </IonButton>
    </div>
  );
}

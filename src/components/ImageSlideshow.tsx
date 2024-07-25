import React from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonIcon,
} from "@ionic/react";
import { arrowForwardOutline } from "ionicons/icons";

export default function ImageSlideshow() {
  const [slide, setSlide] = React.useState(0);
  const descriptions = [
    "Create educational content approved by mental health licensed clinicians and teens",
    "Build community partnerships to support youth through mental health programs and training",
    "Partner with researchers to design youth mental health programs targetting needs of diverse youth",
  ];
  const backgroundtemp = ["public/TempFunctionImage.png", "", ""];
  const nextSlide = () => {
    setSlide(slide > descriptions.length - 2 ? 0 : slide + 1);
  };

  return (
    <div className="mt-8 mx-auto w-3/4 px-8 justify-center">
      <div>
        <IonCard
          className={`flex flex-col items-center w-auto h-96 object-stretch bg-[url('${backgroundtemp[slide]}')] mx-auto `}
        >
          <IonCardContent className="align-middle py-8 px-6">
            <IonCardSubtitle
              style={{
                fontSize: 26,
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {descriptions[slide]}
            </IonCardSubtitle>
          </IonCardContent>
          <IonButton
              className="absolute top-[83%] right-[0.5rem] justify-end w-[4rem] h-[3rem] "
              onClick={nextSlide}
              color="light"
              size="small"
              shape="round"
              style={{
                "--box-shadow": "none",
                "--ripple-color": "transparent",
                "transition": "width 2s, height 4s"
              }}
            >
              <IonIcon size="large" icon={arrowForwardOutline} style={{ color: "red" }} />
            </IonButton>
        </IonCard>
      </div>
    </div>
  );
}

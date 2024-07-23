import { IonButton, IonCard, IonCardContent, IonCardSubtitle } from "@ionic/react";
import nextSlide from "./TempFunctions";

interface ResourceCardProps {
  description: string;
}

export default function TempFunction({
    description,
  }: ResourceCardProps) {
    return (
      <div>
        <IonCard className="flex flex-col items-center w-8/9 h-96 bg-[] mx-auto ">{/* image here!!!!! */}
        
          <IonCardContent className="align-middle py-8 px-6">
            <IonCardSubtitle
              style={{
                fontSize: 16,
                color: "black",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {description}
            </IonCardSubtitle>
            {/* <IonButton onClick = {nextSlide}>Next Slide</IonButton> */}
            </IonCardContent>
          <div>
          </div>
        </IonCard>
      </div>
    );
  }
  
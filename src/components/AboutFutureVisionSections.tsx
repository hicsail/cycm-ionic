import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";
import React from "react";

const headers = [
  "COLLABORATIVE CREATION",
  "COMMUNITY ENGAGEMENT",
  "NATIONAL LEADERSHIP",
];
const content = [
  "Create opportunities for trainees in all disciplines to collaborate and develop content for the website and social media.",
  "Design training toolkits to be used at schools and community-based organizations to engage with youth outside of the clinical setting and in the community.",
  "BMC Department of Psychiatry: National go-to resource for mental health in diverse teens.",
];

export default function AboutFutureVisionSections() {
  return (
    <div className="flex flex-col items-center justify-center py-24 pb-36 bg-[#FFE2E2] text-center text-base text-[#101066]">
      <div className="text-5xl font-bold mb-8">
        <h1>FUTURE VISION</h1>
      </div>
      <div className="container px-0 md:px-8 mx-auto flex flex-col gap-1 xl:gap-4 w-3/4 lg:w-full lg:flex-row">
        {headers.map((header, index) => {
          return (
            <IonCard className="flex-1 bg-white text-[#100f66] rounded-lg shadow-md pl-0 py-16">
              <IonCardHeader className="text-left text-center">
                <IonCardTitle className="text-[#100f66] font-bold text-3xl">
                  {header}
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent className="text-left text-xl text-center">
                {content[index]}
              </IonCardContent>
            </IonCard>
          );
        })}
      </div>
    </div>
  );
}

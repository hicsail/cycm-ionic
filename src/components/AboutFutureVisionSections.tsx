import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";
import React from "react";

export default function AboutFutureVisionSections() {
  return (
    <div className="flex flex-col items-center justify-center p-5 bg-[#FFE2E2] min-h-screen box-border text-center text-base text-[#101066]">
      <div className="text-5xl font-bold mb-8">
        <h1>FUTURE VISION</h1>
      </div>
      <div className="container sm:px-2 md:px-12 px-36 mx-auto flex flex-col gap-5 w-19/20 box-border md:flex-row">
        <IonCard className="flex-1 bg-white text-[#100f66] rounded-lg shadow-md pb-5 pl-0 pr-10 mb-0 ml-0">
          <IonCardHeader className="text-left">
            <IonCardTitle className="text-[#100f66] font-bold text-3xl mb-4">
              COLLABORATIVE CREATION
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="text-left text-xl mb-24">
            Create opportunities for trainees in all disciplines to collaborate
            and develop content for the website and social media.
          </IonCardContent>
        </IonCard>
        <IonCard className="flex-1 bg-white text-[#100f66] rounded-lg shadow-md pb-5 pl-0 pr-10 mb-0 ml-0">
          <IonCardHeader className="text-left">
            <IonCardTitle className="text-[#100f66] font-bold text-3xl mb-4">
              COMMUNITY ENGAGEMENT
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="text-left text-xl mb-24">
            Design training toolkits to be used at schools and community-based
            organizations to engage with youth outside of the clinical setting
            and in the community.
          </IonCardContent>
        </IonCard>
        <IonCard className="flex-1 bg-white text-[#100f66] rounded-lg shadow-md pb-5 pl-0 pr-10 mb-0 ml-0 ">
          <IonCardHeader className="text-left">
            <IonCardTitle className="text-[#100f66] font-bold text-3xl mb-4">
              NATIONAL LEADERSHIP
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="text-left text-xl mb-24">
            BMC Department of Psychiatry: <br />
            National "go-to" resource for
            <br />
            mental health in diverse teens.
            <br />
          </IonCardContent>
        </IonCard>
      </div>
    </div>
  );
}

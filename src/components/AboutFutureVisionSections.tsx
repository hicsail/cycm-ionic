import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";
import React from "react";


export default function AboutFutureVisionSections() {
  return (
    <div className="flex flex-col items-center justify-center p-5 bg-gradient-to-b from-[#ec9898] to-[#e45341] min-h-screen box-border text-center text-base text-[#101066]">
      <div className="text-4xl font-bold mb-8">
        <h1>FUTURE VISION</h1>
      </div>
      <div className="flex flex-col gap-5 w-4/5 box-border md:flex-row">
        <IonCard className="flex-1 bg-white text-[#100f66] rounded-lg p-5 shadow-md mb-5">
            <IonCardTitle className="text-[#100f66] font-bold">COLLABORATIVE CREATION</IonCardTitle>
          <IonCardContent>
            <ul>
              <li>Opportunities for trainees in all disciplines to collaborate</li>
              <li>Create content for website and social media</li>
            </ul>
          </IonCardContent>
        </IonCard>
        <IonCard className="flex-1 bg-white text-[#100f66] rounded-lg p-5 shadow-md mb-5">
          <IonCardHeader >
            <IonCardTitle className="text-[#100f66] font-bold">COMMUNITY ENGAGEMENT</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <ul>
              <li>Design training toolkits to be used at schools and community-based organizations</li>
              <li>Engage with youth outside of the clinical setting and in the community</li>
            </ul>
          </IonCardContent>
        </IonCard>
        <IonCard className="flex-1 bg-white text-[#100f66] rounded-lg p-5 shadow-md mb-5">
          <IonCardHeader>
            <IonCardTitle className="text-[#100f66] font-bold">NATIONAL LEADERSHIP</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <ul>
              <li>BMC Department of Psychiatry: National "go-to" resource for mental health in diverse teens</li>
            </ul>
          </IonCardContent>
        </IonCard>
      </div>
    </div>
  );
}

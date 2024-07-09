import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";
import React from "react";

export default function AboutFutureVisionSections() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center md:px-0">
        {/* <img className="w-full h-auto z-[10]" alt="union-1" src="red-union.svg" /> */}
        <div className="p-4 max-w-6xl w-full pt-36">
          <div className="flex md:flex-col md:items-start justify-center">
            <h1 className="text-[#101066] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none mb-4">
              Future Vision
            </h1>
          </div>
        </div>
        <div className="flex flex-col max-w-7xl items-center mt-8 mx-auto">
          <div className="flex gap-4 md:px-8 flex-col lg:flex-row z-[1]">
            <IonCard
              color="light"
              style={{
                width: 380,
              }}
              className="ion-padding"
            >
              <div className="flex justify-center">
                <img
                  src="./public/undraw_development_re_g5hq.svg"
                  style={{
                    width: 300,
                    height: 300,
                  }}
                />
              </div>
              <IonCardHeader className="text-2xl text-[#101066] font-bold">
                Collaborative Creation
              </IonCardHeader>
              <IonCardContent className="text-[#101066]">
                Opportunities for trainees in all disciplines to collaborate and
                to create content for website and social media
              </IonCardContent>
            </IonCard>
            <IonCard
              color="light"
              style={{
                width: 380,
              }}
              className="ion-padding"
            >
              <div className="flex justify-center">
                <img
                  src="./public/undraw_real_time_collaboration_c62i (1).svg"
                  style={{
                    width: 300,
                    height: 300,
                  }}
                />
              </div>
              <IonCardHeader className="text-2xl text-[#101066] font-bold">
                Community Engagement
              </IonCardHeader>
              <IonCardContent className="text-[#101066]">
                Design training toolkits to be used at schools and
                community-based organizations and engage with youth outside of
                the clinical setting and in the community.
              </IonCardContent>
            </IonCard>
            <IonCard
              color="light"
              style={{
                width: 380,
              }}
              className="ion-padding"
            >
              <div className="flex justify-center">
                <img
                  src="public/undraw_gravitas_d-3-ep (1).svg"
                  style={{
                    width: 300,
                    height: 300,
                  }}
                />
              </div>
              <IonCardHeader className="text-2xl text-[#101066] font-bold">
                National Leadership
              </IonCardHeader>
              <IonCardContent className="text-[#101066]">
                BMC Department of Psychiatry: National “go-to” resource for
                mental health in diverse teens
              </IonCardContent>
            </IonCard>
          </div>
        </div>
      </div>
    </div>
  );
}

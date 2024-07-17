import { IonCard, IonCardHeader } from "@ionic/react";
import React from "react";

export default function AboutMissionSection() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-[#FFE2E2] min-h-screen px-12 md:px-0">
        {/* <img className="w-full h-auto z-[10]" alt="union-1" src="red-union.svg" /> */}
        <div className="p-4 max-w-4xl w-full my-24">
          <h1 className="text-[#101066] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-center leading-none mb-4">
            Mission Statement
          </h1>
          <br />
          <p className="text-[#101066] font-semibold text-base sm:text-lg md:text-xl lg:text-xl tracking-tight leading-tight mb-8">
            At the Center for Young Colorful Minds, we're on a mission to
            revolutionize how teens access accurate mental health information
            and to empower teens with resources needed to advocate for their
            mental health. In a world where mental health content and
            discussions are gaining momentum, our primary goal is to offer teens
            and young adults reliable and relatable mental health resources,
            especially for youth who scroll through social media seeking
            guidance.
          </p>
          <p className="text-[#101066] font-semibold text-base sm:text-lg md:text-xl lg:text-xl tracking-tight leading-tight mb-8">
            Join us at the Center for Young Colorful Minds where we're not just
            changing the conversation, but we are driving the conversation for
            how to break down stigma and build resilient communities.
          </p>
          <br />
          <div className="flex flex-col max-w-7xl items-center mt-8 mx-auto">
            <div className="flex gap-4 px-8 flex-col lg:flex-row z-[1]">
              <IonCard>
                <img src="trusted-info.svg" />
                <IonCardHeader className="justify-center items-center">
                  <h4 className="text-[#101066] font-semibold">
                    Trusted Information
                  </h4>
                </IonCardHeader>
              </IonCard>
              <IonCard>
                <img src="collaboration.svg" />
                <IonCardHeader className="justify-center items-center">
                  <h4 className="text-[#101066] font-semibold">
                    Collaboration
                  </h4>
                </IonCardHeader>
              </IonCard>
              <IonCard>
                <img src="youth-empowerment.svg" />
                <IonCardHeader className="justify-center items-center">
                  <h4 className="text-[#101066] font-semibold">
                    Youth Empowerment
                  </h4>
                </IonCardHeader>
              </IonCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

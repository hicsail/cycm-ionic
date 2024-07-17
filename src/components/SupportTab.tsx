import { IonCard, IonCardHeader } from "@ionic/react";
import React from "react";

export default function SupportTab() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-[#FFE2E2] min-h-screen px-12 md:px-0">
        <div className="p-4 max-w-4xl w-full my-24">
          <h1 className="text-[#101066] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-center leading-none mb-4">
          We Are Here for you
          </h1>
          <br />
          <p className="text-center text-[#101066] font-semibold text-base sm:text-lg md:text-xl lg:text-xl tracking-tight leading-tight mb-8">
            Connect with us 24/7, 
            from anywhere in the U.S via chat or phone.
          </p>
          <br />
          <div className="flex flex-col max-w-7xl items-center mt-8 mx-auto">
            <div className="flex gap-4 px-8 flex-col lg:flex-row z-[1]">
              <IonCard>
                <img src="BackgroundSupport.png" />
                <IonCardHeader className="justify-center items-center">
                  <h4 className="text-[#101066] font-bold">
                  Call us
                  </h4>
                </IonCardHeader>
              </IonCard>
              <IonCard>
                <img src="BackgroundSupport.png" />
                <IonCardHeader className="justify-center items-center">
                  <h4 className="text-[#101066] font-bold">
                  Chat with us
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

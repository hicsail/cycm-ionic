import { IonCard, IonCardContent, IonCardHeader } from '@ionic/react'
import React from 'react'

export default function AboutFutureVisionSections() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center px-12 md:px-0">
        {/* <img className="w-full h-auto z-[10]" alt="union-1" src="red-union.svg" /> */}
        <div className="p-4 max-w-6xl w-full pt-36">
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-[#101066] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none mb-4">
              Future Vision
            </h1>
          </div>
        </div>
        <div className="flex flex-col max-w-7xl items-center mt-8 mx-auto">
          <div className="flex gap-4 px-8 flex-col lg:flex-row z-[1]">
            <IonCard color="danger" style={{
              width: 300,
              height: 300
            }}>
              <IonCardHeader className="justify-center items-center text-xl">
                <h2 className="text-[#101066] font-bold">
                  Collaborative Creation
                </h2>
              </IonCardHeader>
              <br />
              <IonCardContent>
                <ul>
                  <li>Opportunities for trainees in all disciplines to collaborate</li>
                  <br />
                  <li>Create content for website and social media</li>
                </ul>
              </IonCardContent>
            </IonCard>
            <IonCard color="danger" style={{
              width: 300,
              height: 300
            }}>
              <IonCardHeader className="justify-center items-center text-xl">
                <h3 className="text-[#101066] font-bold">
                  Community Engagement
                </h3>
              </IonCardHeader>
              <br />
              <IonCardContent>
                <ul>
                  <li>Design training toolkits to be used at schools and community-based organizations</li>
                  <br />
                  <li>Engage with youth outside of the clinical setting and in the community</li>
                </ul>
              </IonCardContent>
            </IonCard>
            <IonCard color="danger" style={{
              width: 300,
              height: 300
            }}>
              <IonCardHeader className="justify-center items-center text-xl font-bold">
                <h3 className="text-[#101066]">
                  National Leadership
                </h3>
              </IonCardHeader>
              <br />
              <IonCardContent>
                BMC Department of Psychiatry: National “go-to” resource for mental health in diverse teens
              </IonCardContent>
            </IonCard>
          </div>
        </div>
      </div>
    </div>
  )
}

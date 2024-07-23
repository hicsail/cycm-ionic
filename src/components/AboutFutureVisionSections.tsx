import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";
import React from "react";

export default function AboutFutureVisionSections() {
  return (
    <div className="future-vision-container">
      <div className="future-vision-header">
        <h1>FUTURE VISION</h1>
      </div>
      <div className="future-vision-cards">
        <IonCard className="future-vision-card">
          <IonCardHeader>
            <IonCardTitle>COLLABORATIVE CREATION</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <ul>
              <li>
                Opportunities for trainees in all disciplines to collaborate
              </li>
              <li>Create content for website and social media</li>
            </ul>
          </IonCardContent>
        </IonCard>
        <IonCard className="future-vision-card">
          <IonCardHeader>
            <IonCardTitle>COMMUNITY ENGAGEMENT</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <ul>
              <li>
                Design training toolkits to be used at schools and
                community-based organizations
              </li>
              <li>
                Engage with youth outside of the clinical setting and in the
                community
              </li>
            </ul>
          </IonCardContent>
        </IonCard>
        <IonCard className="future-vision-card">
          <IonCardHeader>
            <IonCardTitle>NATIONAL LEADERSHIP</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <ul>
              <li>
                BMC Department of Psychiatry: National "go-to" resource for
                mental health in diverse teens
              </li>
            </ul>
          </IonCardContent>
        </IonCard>
      </div>
    </div>
  );
}

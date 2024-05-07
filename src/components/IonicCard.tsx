import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonLabel,
} from "@ionic/react";
import React, { useState } from "react";
import CardModal from "./CardModal";

interface CardProps {
  id: string;
  title: string;
  body: string;
  image: string;
  voiceId: string;
  isExpanded: boolean;
  setIsExpandedArray: any;
  index: number;
  manual_id: string;
  author: string;
  tag: string;
}

export default function IonicCard({
  id,
  title,
  body,
  image,
  voiceId,
  isExpanded,
  setIsExpandedArray,
  index,
  manual_id,
  author,
  tag,
}: CardProps) {
  const [summary, setSummary] = useState<string>(body.split(".")[0]);
  const [sentences, setSentences] = useState<string[]>(body.split("."));

  return (
    <div>
      <IonCard
        color={"tertiary"}
        style={{
          height: 500,
          maxWidth: 350,
          borderRadius: 20,
          padding: 20,
        }}
      >
        {/* <img alt="Silhouette of mountains" height={200} src="https://ionicframework.com/docs/img/demos/card-media.png" /> */}
        <IonCardHeader>
          <IonCardTitle
            style={{
              // font color
              color: "orange",
              fontSize: "1.6rem",
              fontWeight: "bold",
            }}
          >
            {title}
          </IonCardTitle>
          <IonCardSubtitle
            style={
              {
                // font color
              }
            }
          >
            {/* {author && `By ${author}`} */}
          </IonCardSubtitle>
          {/* {tag && (
            <>
              <IonChip color="warning">{tag}</IonChip>
            </>
          )} */}
        </IonCardHeader>
        <IonCardContent style={{
          fontSize: "1.2rem",
          lineHeight: "1.75rem"
        }}>
          {summary.length > 120
            ? `${summary.substring(0, 120)}...`
            : `${summary}.`}
        </IonCardContent>
        {/* have card modal button at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 20,
            left: 20,
            width: "100%",
          }}
        >
          <CardModal
            title={title}
            sentences={sentences}
            id={id}
            voiceId={voiceId}
            manual_id={manual_id}
          />
        </div>
      </IonCard>
    </div>
  );
}

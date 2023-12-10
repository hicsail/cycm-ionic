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
          height: 375,
          maxWidth: 400,
          borderRadius: 20,
        }}
      >
        <IonCardHeader>
          <IonCardTitle
            style={{
              // font color
              color: "orange",
              fontSize: 18,
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
            {author && `By ${author}`}
          </IonCardSubtitle>
          {tag && (
            <>
              <IonChip color="warning">{tag}</IonChip>
            </>
          )}
        </IonCardHeader>
        <IonCardContent>
          {summary.length > 400
            ? `${summary.substring(0, 400)}...`
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

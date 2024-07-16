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
  teaser: string;
  speech_generated: number;
  video: boolean;
}

export default function IonicCard({
  id,
  title,
  body,
  voiceId,
  manual_id,
  teaser,
  speech_generated,
  video,
  image,
}: CardProps) {
  const [summary, setSummary] = useState<string>(body.split(".")[0]);
  const [sentences, setSentences] = useState<string[]>(body.split("."));
  const [hover, setHover] = useState(false);

  return (
    <div style = {{minHeight:"100%", display: "flex", alignItems: "stretch", margin: "auto"}}>
      <IonCard
        color={"tertiary"}
        style={{
          borderRadius: 20,
        }}
        className = "hoverCard"
        button
        onClick={(e) => {
          e.preventDefault();
          window.location.href = video ? `https://www.youtube.com/watch?v=${id}` : `/post/${id}`;
        }}
      >
        {/* <img alt="Silhouette of mountains" height={200} src="https://ionicframework.com/docs/img/demos/card-media.png" /> */}
        { image!== null ?  <img style = {{height: "15rem", objectFit: "cover"}} width="100%" height="100%" src={image} title="Article image" ></img> : <div></div>}
        <IonCardHeader>
          <IonCardTitle
            style={{
              // font color
              color: "orange",
              fontSize: "1.6rem",
              fontWeight: "bold",
              paddingLeft: 20,
              paddingRight:20,
              marginTop: video ? "0rem" : "2rem",
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
        <IonCardContent
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.75rem",
            paddingLeft: 40,
            paddingRight:40,
          }}
        >
          {teaser.length > 200 ? `${teaser.substring(0, 200)}...` : `${teaser}`}
        </IonCardContent>
        {/* have card modal button at bottom */}
        <div
          style={{
            position: "relative",
            bottom: 20,
            left: 20,
            width: "100%",
            marginTop: "1rem",
            marginLeft:20,
            alignSelf: "flex-end"
          }}
          onClick={(e) => {
            // prevent routing to post page
            e.stopPropagation();
            e.preventDefault();
          }}
        >
          <IonButton
            fill= { hover ? "outline": "solid"}
            shape="round"
            size="small"
            color={"warning"}
            className="hoverButton"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = video ? `https://www.youtube.com/watch?v=${id}` : `/post/${id}`;
            }}
            onMouseEnter = {() => setHover(true)}
            onMouseLeave = {() => setHover(false)}
          >
            {video? "Watch": "Read"}
          </IonButton>
          {speech_generated === 1 && (
            <CardModal
              title={title}
              sentences={sentences}
              id={id}
              voiceId={voiceId}
              manual_id={manual_id}
            />
          )}
        </div>
      </IonCard>
    </div>
  );
}

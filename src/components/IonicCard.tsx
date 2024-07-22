import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import React, { useState } from "react";
import CardModal from "./CardModal";
import { playCircle, playCircleOutline } from "ionicons/icons";
import Button from "./Button";

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
  const [playCircleColor, setPlayCircleColor] = useState("invert(1.0)");

  return (
    <div
      style={{
        minHeight: "100%",
        display: "flex",
        alignItems: "stretch",
        margin: "auto",
      }}
    >
      <IonCard
        // color={"light"}
        style={{
          // borderRadius: 20,
        }}
        className="hoverCard"
        button
        onClick={(e) => {
          e.preventDefault();
          window.open(
            video ? `https://www.youtube.com/watch?v=${id}` : `/post/${id}`,
            "_blank"
          );
        }}
      >
        {/* <img alt="Silhouette of mountains" height={200} src="https://ionicframework.com/docs/img/demos/card-media.png" /> */}
        {image !== null ? (
          <div
            onMouseEnter={() => setPlayCircleColor("invert(0.9)")}
            onMouseLeave={() => setPlayCircleColor("invert(1.0)")}
          >
            <img
              style={{ height: "17rem", objectFit: "cover" }}
              width="100%"
              height="100%"
              src={image}
              title="Article image"
            />
            {video === true ? (
              <img
                src={playCircle}
                style={{
                  filter: playCircleColor,
                  position: "absolute",
                  top: "17.5%",
                  left: "42.5%",
                  height: "3rem",
                }}
              />
            ) : (
              <div></div>
            )}
          </div>
        ) : (
          <div></div>
        )}
        <IonCardHeader>
          <IonCardTitle
            style={{
              // font color
              color: "pink",
              fontSize: "1.6rem",
              fontWeight: "bold",
              paddingLeft: 20,
              paddingRight: 20,
              marginTop: video || image !== null ? "0rem" : "2rem",
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
            paddingRight: 40,
            paddingBottom: 80,
          }}
        >
          {teaser.length > 200 ? `${teaser.substring(0, 200)}...` : `${teaser}`}
        </IonCardContent>
        {/* have card modal button at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 30,
            left: 20,
            width: "100%",
            marginLeft: 20,
          }}
          onClick={(e) => {
            // prevent routing to post page
            e.stopPropagation();
            e.preventDefault();
          }}
        >
          <Button
            text={video ? "Watch" : "Read"}
            backgroundColor={`deepskyblue`}
            size={"xs"}
            px={"1em"}
            py={"0.25em"}
            onClick={(e) => {
              e.preventDefault();
              window.location.href = video
                ? `https://www.youtube.com/watch?v=${id}`
                : `/post/${id}`;
            }}
          />
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

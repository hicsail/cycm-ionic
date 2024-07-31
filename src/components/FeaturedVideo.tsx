import React, { useEffect, useState } from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonButton,
} from "@ionic/react";

const token = import.meta.env.VITE_STRAPY_TOKEN;
const apiKey = import.meta.env.VITE_ELEVEN_LABS_API_KEY;

interface VideoInputProps {
  id: string;
  src: string;
  title: string;
  allow: string;
  referrerPolicy?: string;
  btnRounded: boolean;
}

type VideoData = {
  viewCount: number;
  likeCount: number;
  title: string;
  description: string;
  publishedAt: Date;
};

function FeaturedVideo({
  id,
  src,
  title,
  allow,
  referrerPolicy,
  btnRounded,
}: VideoInputProps) {
  const vid = "https://www.youtube.com/watch?v=u2zbcZBI0Do";
  const [videoData, setVideoData] = useState<VideoData>();
  const [videos, setVideos] = useState<string[]>([vid]);

  const limitSentences = (text: string, maxSentences: number): string => {
    const sentences = text.split(".");
    const limitedSentences = sentences.slice(0, maxSentences).join("");
    return limitedSentences;
  };

  const backgroundVideo = vid;
  const videoID = backgroundVideo.split("v=")[1];
  const url = backgroundVideo.replace("watch?v=", "embed/");

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?id=${videoID}&key=AIzaSyAi1dPx0fqC8EP9YoaNo1WPsykq_yVczCY&part=snippet,contentDetails,statistics,status&regionCode=us`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((resp) => {
        console.log(resp);
        const maxSentences = 1;
        const fullDescription = resp.items[0].snippet.description;
        const limitedDescription = limitSentences(
          fullDescription,
          maxSentences
        );
        const data: VideoData = {
          viewCount: parseInt(resp.items[0].statistics.viewCount),
          likeCount: parseInt(resp.items[0].statistics.likeCount),
          title: resp.items[0].snippet.title,
          description: limitedDescription,
          publishedAt: new Date(resp.items[0].snippet.publishedAt),
        };
        setVideoData(data);
        console.log(resp.items[0].snippet.title);
      });
  }, []);

  useEffect(() => {
    setVideos(
      videos.map((video: string) => video.replace("watch?v=", "embed/"))
    );
  }, []);

  const cardStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "350px",
    maxWidth: "350px",
    margin: "auto",
  };

  const iframeContainerStyler: React.CSSProperties = {
    position: "relative",
    width: "100%",
    height: "200px",
  };

  const videoFrameStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };

  function shortNumber(value?: number): string {
    if (value === undefined) return "N/A";

    if (value >= 1_000_000_000) {
      return `${Math.trunc(value / 1_000_000_000)}B`;
    } else if (value >= 1_000_000) {
      return `${Math.trunc(value / 1_000_000)}M`;
    } else if (value >= 1_000) {
      return `${Math.trunc(value / 1_000)}K`;
    } else {
      return value.toString();
    }
  }

  return (
    <IonCard id={id} style={cardStyle}>
      <div style={iframeContainerStyler}>
        <iframe
          width="100%"
          height="100%"
          src={url}
          title="Featured Videos"
          className="video-frame"
          allowFullScreen={true}
          style={{
            border: "none",
            margin: "auto",
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; fullscreen;"
        ></iframe>
      </div>
      <IonCardHeader>
        <IonCardTitle>{videoData?.title}</IonCardTitle>
        <IonCardSubtitle>
          {shortNumber(videoData?.viewCount)} Views
        </IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>{videoData?.description}.</IonCardContent>
    </IonCard>
  );
}

export default FeaturedVideo;

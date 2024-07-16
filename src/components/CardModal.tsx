import React, { useState, useEffect, useRef } from "react";
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonSpinner,
  IonIcon,
  IonFab,
  IonFabButton,
  IonText,
  IonToggle,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { Share } from "@capacitor/share";
import {
  share,
  shareOutline,
  playCircle,
  add,
  closeCircle,
  pauseCircle,
} from "ionicons/icons";

interface Props {
  title: string;
  sentences: string[];
  id: string;
  voiceId: string;
  manual_id: string;
}

const CardModal: React.FC<Props> = ({
  title,
  sentences,
  id,
  voiceId,
  manual_id,
}) => {
  const modal = useRef<any>(null);
  const input = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef(null);
  const [audioLoading, setAudioLoading] = useState<boolean>(false);
  const [hasFetchedAudios, setHasFetchedAudios] = useState(false);
  const sentenceRefs = useRef<(HTMLIonTextElement | null)[]>([]);
  const [displayVideo, setDisplayVideo] = useState<boolean>(false);

  const fetchAudio = async (index: number) => {
    try {
      const response = await fetch(
        `https://cycm.s3.amazonaws.com/article_audios/article_${manual_id}/${voiceId}/audio_${
          index + 1
        }.mp3`
      );

      if (!response.ok) {
        const errorData = await response.text();
        console.error("Error response from server:", errorData);
        return null;
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      audio.playbackRate = 1.05;
      return audio;
    } catch (error) {
      console.error("Error occurred while making request:", error);
      return null;
    }
  };

  // Create a new state variable to store the audio streams
  const [audios, setAudios] = useState<HTMLAudioElement[]>([]);

  // Fetch the audio streams when the sentences prop changes
  useEffect(() => {
    const fetchAudios = async () => {
      const fetchedAudios: (HTMLAudioElement | null)[] = [];
      setAudioLoading(true);
      for (let i = 0; i < sentences.length; i++) {
        if (sentences[i].length === 0) continue;
        const audio: any = await fetchAudio(i);
        if (audio) {
          fetchedAudios.push(audio);
        }
      }
      setAudioLoading(false);
      setAudios(fetchedAudios as HTMLAudioElement[]);
      setHasFetchedAudios(true);
    };
    if (isPlaying && !hasFetchedAudios) fetchAudios();
  }, [sentences, isPlaying]);

  useEffect(() => {
    if (isPlaying && currentIndex < sentences.length) {
      const currentAudio = audios[currentIndex];
      if (currentAudio) {
        currentAudio.onended = () => {
          setCurrentIndex((prevIndex) => prevIndex + 1);
        };
        currentAudio.play();
      }
    } else if (currentIndex === sentences.length) {
      setIsPlaying(false); // Set isPlaying to false when the last sentence has been played
    } else if (!isPlaying && currentIndex < sentences.length) {
      const currentAudio = audios[currentIndex];
      if (currentAudio) {
        currentAudio.pause();
      }
    }
  }, [isPlaying, currentIndex, sentences.length, audios]);

  useEffect(() => {
    const currentSentenceRef = sentenceRefs.current[currentIndex];
    currentSentenceRef?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [currentIndex]);

  const [message, setMessage] = useState(
    "This modal example uses triggers to automatically open a modal when the button is clicked."
  );

  const [hover, setHover] = useState(false);

  function confirm() {
    modal.current?.dismiss(input.current?.value, "confirm");
  }

  async function shareUrl() {
    // get current url
    const url = window.location.href;

    await Share.share({
      url: url,
    });
  }

  return (
    <>
      <IonButton
        id={`${id}open-modal`}
        fill= { hover ? "outline": "solid"}
        shape="round"
        color="success"
        size="small"
        onClick={(e) => {
          e.preventDefault();
          //modal.current?.present();
        }}
        onMouseEnter = {() => setHover(true)}
        onMouseLeave = {() => setHover(false)}
      >
        Listen
      </IonButton>
      <IonModal
        keepContentsMounted={true}
        ref={modal}
        trigger={`${id}open-modal`}
        color={"dark"}
      >
        <IonHeader translucent={true}>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton
                onClick={() => {
                  if (currentIndex < audios.length) {
                    const currentAudio = audios[currentIndex];
                    if (currentAudio) {
                      currentAudio.pause();
                      currentAudio.currentTime = 0; // Reset audio to start
                    }
                  }
                  setCurrentIndex(0);
                  setIsPlaying(false);
                  setHasFetchedAudios(false);
                  setAudios([]);
                  modal.current?.dismiss();
                }}
              >
                <IonIcon icon={closeCircle}></IonIcon>
              </IonButton>
            </IonButtons>
            <IonTitle>{title}</IonTitle>
            <IonButtons slot="end">
              <IonButton strong={true} onClick={shareUrl}>
                <IonIcon icon={shareOutline}></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonHeader>
          <IonToolbar>
            <IonItem slot="end">
              <IonLabel>Display Video</IonLabel>
              <IonToggle
                checked={displayVideo}
                onIonChange={(e: any) => setDisplayVideo(e.detail.checked)}
              />
            </IonItem>
          </IonToolbar>
        </IonHeader>
        <IonContent color={"dark"}>
          <div
            ref={containerRef}
            style={{
              position: "relative",
              height: "100vh",
              width: "100%",
              overflow: "hidden",
            }}
          >
            {displayVideo && (
              <video
                src="./calm-video1.mp4"
                autoPlay
                loop
                muted
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            )}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "white",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                padding: "1rem",
                paddingTop: "3rem", // Add some padding to the top
                boxSizing: "border-box",
                overflowY: "auto",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Add semi-transparent background
              }}
            >
              {sentences.map((sentence, index) => (
                <IonText
                  style={{
                    display: "block",
                    padding: "1rem",
                    fontSize: "1.5rem",
                    lineHeight: "2rem",
                    fontWeight: "bold",
                  }}
                  onClick={() => {
                    if (currentIndex < audios.length) {
                      const currentAudio = audios[currentIndex];
                      if (currentAudio) {
                        currentAudio.pause();
                        currentAudio.currentTime = 0; // Reset audio to start
                      }
                    }
                    setCurrentIndex(index);
                    setIsPlaying(true);
                  }}
                  ref={(el) => (sentenceRefs.current[index] = el)}
                  className={index == currentIndex ? "highlight" : ""}
                  color={index <= currentIndex ? "success" : "medium"}
                  key={index}
                >
                  <h3>{sentence}.</h3>
                </IonText>
              ))}
            </div>
          </div>
        </IonContent>
        <IonFab horizontal="end" vertical="bottom">
          <IonFabButton
            onClick={() => {
              setIsPlaying((prev) => !prev);
            }}
          >
            {audioLoading ? (
              <IonSpinner name="crescent" />
            ) : (
              <IonIcon icon={isPlaying ? pauseCircle : playCircle}></IonIcon>
            )}
          </IonFabButton>
        </IonFab>
      </IonModal>
    </>
  );
};

export default CardModal;

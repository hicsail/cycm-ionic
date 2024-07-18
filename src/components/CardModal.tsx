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
  caretForwardCircleOutline,
  caretBackOutline,
  caretForwardOutline,
  pauseOutline,
  playOutline,
  pauseCircleOutline,
  playCircleOutline,
  closeOutline,
  eyeOutline,
  eyeOffOutline,
} from "ionicons/icons";
import Button from "./Button";

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
  const [displayVideo, setDisplayVideo] = useState<boolean>(true);
  const [videoURL, setVideoURL] = useState<string>("");

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

  const getURL = () => {
    fetch(
      `https://pixabay.com/api/videos/?key=44999838-9bd6745d743d992a9a1fa46eb&q=nature&category=nature`
    )
      .then((response) => response.json())
      .then((data) => {
        const id = Math.floor(Math.random() * data.hits.length);
        setVideoURL(data.hits[id].videos.large.url);
        console.log(videoURL);
      });
  };

  const [message, setMessage] = useState(
    "This modal example uses triggers to automatically open a modal when the button is clicked."
  );

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
      <Button
        id={`${id}open-modal`}
        text={"Listen"}
        backgroundColor={`salmon`}
        size={"xs"}
        px={"1em"}
        py={"0.25em"}
        onClick={(e) => {
          e.preventDefault();
          getURL();
          //modal.current?.present();
        }}
      />
      <IonModal
        keepContentsMounted={true}
        ref={modal}
        trigger={`${id}open-modal`}
        color={"dark"}
        style={{
          "--width": "70%",
          "--height": "70%",
          "--border-radius": "1rem",
        }}
      >
        <IonContent
          color={"dark"}
          style={{
            width: "calc(100% + 15px)",
          }}
        >
          <div
            ref={containerRef}
            style={{
              position: "relative",
              height: "100%",
              width: "100%",
              overflow: "hidden",
            }}
          >
            {displayVideo && (
              <video
                src={videoURL}
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
                paddingTop: "1.5rem", // Add some padding to the top
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
        <IonToolbar
          style={{
            "--background": "white",
            marginBottom: "-0.1rem",
            paddingLeft: "0.7rem",
            paddingRight: "0.5rem",
          }}
        >
          <IonButtons
            slot="end"
            style={{ width: "7rem", display: "flex", justifyContent: "right" }}
          >
            <IonButton strong={true} onClick={shareUrl}>
              <IonIcon size="small" icon={shareOutline}></IonIcon>
            </IonButton>
          </IonButtons>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <div
              style={{
                borderRadius: "2rem",
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
                alignItems: "center",
                paddingTop: "0.2rem",
              }}
            >
              <button
                style={{ color: "black" }}
                onClick={() => {
                  if (currentIndex > 0) {
                    setCurrentIndex(currentIndex - 1);
                  }
                }}
              >
                <IonIcon size="large" icon={caretBackOutline}></IonIcon>
              </button>
              <button
                onClick={() => {
                  setIsPlaying((prev) => !prev);
                }}
                style={{ color: "black" }}
              >
                {audioLoading ? (
                  <IonSpinner name="crescent" />
                ) : (
                  <IonIcon
                    size="large"
                    icon={isPlaying ? pauseCircleOutline : playCircleOutline}
                  ></IonIcon>
                )}
              </button>
              <button
                style={{ color: "black" }}
                onClick={() => {
                  if (currentIndex < sentenceRefs.current.length - 1) {
                    setCurrentIndex(currentIndex + 1);
                  }
                }}
              >
                <IonIcon size="large" icon={caretForwardOutline}></IonIcon>
              </button>
            </div>
          </div>
          <div
            slot="start"
            style={{ display: "flex", gap: "0.25rem", alignContent: "center" }}
          >
            <IonLabel style={{ fontSize: "0.75rem" }}> Display Video </IonLabel>
            <IonToggle
              checked={displayVideo}
              onIonChange={(e: any) => setDisplayVideo(e.detail.checked)}
            />
          </div>
        </IonToolbar>
        <button
          style={{
            position: "absolute",
            top: "1%",
            right: "1%",
            color: "white",
          }}
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
            setDisplayVideo(true);
            modal.current?.dismiss();
          }}
        >
          <IonIcon size="large" icon={closeOutline}></IonIcon>
        </button>
      </IonModal>
    </>
  );
};

export default CardModal;

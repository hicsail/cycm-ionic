import React, { useState, useEffect } from "react";
import CardModal from "./CardModal";
import { IonButton, IonIcon, IonSpinner } from "@ionic/react";

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
}

const Card: React.FC<CardProps> = ({
  id,
  title,
  body,
  image,
  voiceId,
  isExpanded,
  setIsExpandedArray,
  index,
  manual_id,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sentences, setSentences] = useState<string[]>([]);
  const [audios, setAudios] = useState<HTMLAudioElement[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  //const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // set sentences
  useEffect(() => {
    setSentences(body.split("."));
  }, [body]);

  useEffect(() => {
    audios.forEach((audio, index) => {
      audio.onended = () => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % sentences.length;
          if (nextIndex === 0) {
            setIsPaused(true);
            return 0;
          }
          if (audios[nextIndex]) {
            audios[nextIndex].play();
          }
          return nextIndex;
        });
      };
    });
  }, [audios]);

  const fetchAudio = async (sentence: string, index: number) => {
    //console.log(`https://cycm.s3.amazonaws.com/article_audios/article_${manual_id}/${voiceId}/audio_${index + 1}.mp3`);

    try {
      const response = await fetch(
        `https://cycm.s3.amazonaws.com/article_audios/article_${manual_id}/${voiceId}/audio_${
          index + 1
        }.mp3`
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error response from server:", errorData);
        return null;
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      return new Audio(url);
    } catch (error) {
      console.error("Error occurred while making request:", error);
      return null;
    }
  };

  const handlePlayClick = async () => {
    if (isPaused && audios[currentIndex]) {
      audios[currentIndex].play();
      setIsPaused(false);
    } else {
      setIsLoading(true);
      const fetchedAudios: (HTMLAudioElement | null)[] = [];
      let i = 0;
      for (const sentence of sentences) {
        const audio = await fetchAudio(sentence, i++);
        if (audio) {
          fetchedAudios.push(audio);
        }
      }
      setAudios(fetchedAudios as HTMLAudioElement[]);
      setIsLoading(false);
      if (fetchedAudios[0]) {
        fetchedAudios[0].play();
      }
    }
  };

  const handlePauseClick = () => {
    const audio = audios[currentIndex];
    if (audio) {
      audio.pause();
      setIsPaused(true);
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <div
        className={`relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300 ${
          isExpanded ? "w-full" : ""
        }`}
        style={
          isExpanded
            ? {
                minHeight: 500,
                minWidth: "100%",
              }
            : {
                minHeight: 320,
                minWidth: 360,
              }
        }
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-3 z-10">
          <h2 className="text-white text-xl font-semibold mb-2">{title}</h2>
          {isExpanded && currentIndex > 0 && (
            <p className="text-white">{sentences[currentIndex - 1]}</p>
          )}
          <p className="text-white font-bold">
            {!isExpanded &&
            sentences[currentIndex] &&
            sentences[currentIndex].length > 400
              ? `${sentences[currentIndex].substring(0, 400)}...`
              : sentences[currentIndex]}
          </p>
          {isExpanded && currentIndex < sentences.length - 1 && (
            <p className="text-white">{sentences[currentIndex + 1]}</p>
          )}
        </div>
        {/* <div className="absolute top-0 right-20 p-4 z-30">
        <button onClick={() => router.push(`/article?id=${id}`)}>
          See full article
        </button>
      </div> */}
        <div className="absolute top-0 right-0 p-4 z-30">
          {/* <FaExpand className="text-4xl text-white" onClick={() => {
          // set the value at position index to opposite of the set boolean value
          setIsExpandedArray((prevArray: any) => {
            const newArray = [...prevArray];
            newArray[index] = !newArray[index];
            return newArray;
          });
        }} /> */}

          <IonButton
            onClick={() => {
              // set the value at position index to opposite of the set boolean value
              setIsExpandedArray((prevArray: any) => {
                const newArray = [...prevArray];
                newArray[index] = !newArray[index];
                return newArray;
              });
            }}
            color="medium"
            fill="outline"
            className="text-white"
          >
            Expand
          </IonButton>
        </div>
        <div className="absolute top-0 right-24 p-4 z-30">
          <CardModal
            title={title}
            sentences={sentences}
            backgroundVideo={null}
            id={id}
            voiceId={voiceId}
            manual_id={manual_id}
          />
        </div>
        <div className="absolute top-0 left-0 right-0 bg-transparent p-4 z-20">
          {isLoading ? (
            <IonSpinner />
          ) : !isPaused ? (
            <IonIcon
              name="pause-outline"
              className="text-4xl"
              onClick={handlePauseClick}
            />
          ) : (
            <IonIcon
              name="play-outline"
              className="text-4xl"
              onClick={handlePlayClick}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

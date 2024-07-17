import React, { useEffect, useState } from "react";
import IonicCard from "../components/IonicCard";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonChip,
  IonContent,
  IonIcon,
  IonItemDivider,
  IonLabel,
  IonSearchbar,
  IonText,
} from "@ionic/react";
import {
  closeOutline,
  flag,
  informationCircleOutline,
  play,
} from "ionicons/icons";
const token = import.meta.env.VITE_STRAPY_TOKEN;
const apiKey = import.meta.env.VITE_ELEVEN_LABS_API_KEY;

type ArticleComponent = {
  id: string;
  video: boolean;
  title: string;
  teaser: string;
  link: string;
  imageURL?: string;
  speech_generated?: string;
  tag: string;
  author: string;
  manual_id: string;
  body?: string;
};

const Discover: React.FC = () => {
  const [selectedVoiceId, setSelectedVoiceId] = useState(
    "21m00Tcm4TlvDq8ikWAM"
  );
  const [isExpandedArray, setIsExpandedArray] = useState<any>([]);
  const [articles, setArticles] = useState<ArticleComponent[]>([]);
  const [filters, setFilters] = useState<String[]>([]);
  const [usedVoiceIds, setUsedVoicesIds] = useState<any>([
    "D38z5RcWu1voky8WS1ja",
    "21m00Tcm4TlvDq8ikWAM",
  ]);
  const [usedVoices, setUsedVoices] = useState<any>([]);
  const [filteredArticles, setFilteredArticles] = useState<any>([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // fetch from localhost:1337/api/articles
    fetch(`${import.meta.env.VITE_STRAPI_URL}/api/articles?populate=*`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((resp) => {
        const data = resp.data;
        let resources: ArticleComponent[] = data.map((resource: any) => {
          return {
            id: resource.id,
            video: false,
            title: resource.attributes.title,
            teaser: resource.attributes.teasers,
            link: resource.attributes.link,
            imageURL: null,
            tag: "article",
            speech_generated: resource.attributes.speech_generated,
            body: resource.attributes.body,
          };
        });
        fetch(`${import.meta.env.VITE_STRAPI_URL}/api/videos?populate=*`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((response) => {
            const videoData = response.data;
            videoData.map((videoURL: any) => {
              const videoID = videoURL.attributes.url.split("v=")[1];
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
                  const videoTitle = resp.items[0].snippet.title;
                  const videoDescription = resp.items[0].snippet.description
                    .split(".")
                    .splice(0, 2)
                    .join(".");
                  resources.push({
                    id: videoID,
                    video: true,
                    title: videoTitle,
                    teaser: videoDescription,
                    link: videoURL.attributes.url,
                    tag: "video",
                    speech_generated: videoDescription,
                    author: resp.items[0].snippet.channelID,
                    imageURL: resp.items[0].snippet.thumbnails.high.url,
                    manual_id: "0",
                  });
                  resources = resources.sort((a, b) =>
                    a.title.localeCompare(b.title)
                  );
                  setArticles(resources);
                  setFilteredArticles(resources);
                  setIsExpandedArray(new Array(resources.length).fill(false));
                });
            });
          });
      });
  }, []);

  useEffect(() => {
    fetch(`https://api.elevenlabs.io/v1/voices`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "xi-api-key": apiKey,
      },
    })
      .then((res) => res.json())
      .then((resp) => {
        const filteredVoices = resp.voices.filter((voice: any) =>
          usedVoiceIds.includes(voice.voice_id)
        );
        setUsedVoices(filteredVoices);
        console.log(filteredVoices);
      });
  }, []);

  useEffect(() => {
    if (searchText === "") {
      setFilteredArticles(articles);
      return;
    }
    const filteredArticles = articles.filter((article: any) =>
      article.attributes.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredArticles(filteredArticles);
    console.log(filteredArticles);
  }, [searchText]);

  useEffect(() => {
    if (filters.length !== 0) {
      let filteredArticles = articles;
      filters.forEach((filter) => {
        filteredArticles = filteredArticles.filter(
          (article: any) => article.tag === filter
        );
      });
      setFilteredArticles(filteredArticles);
    } else {
      setFilteredArticles(articles);
    }
  }, [filters]);

  const handleVoiceChange = (event: any) => {
    setSelectedVoiceId(event.target.value);
  };

  const handlePlayPreview = () => {
    const selectedVoice = usedVoices.find(
      (voice: any) => voice.voice_id === selectedVoiceId
    );
    if (selectedVoice) {
      const audio = new Audio(selectedVoice.preview_url);
      audio.play();
    }
  };

  const handleExpandCard = (index: number) => {
    setIsExpandedArray((prevArray: any) => {
      const newArray = [...prevArray];
      newArray[index] = !newArray[index];
      return newArray;
    });
  };
  return (
    <>
      <div
        className="pt-48"
        style={{
          background:
            "linear-gradient(180deg, #FFF 26.5%, #FD9390 87.5%, #FB4B45 100%)",
        }}
      >
        <div>
          <div className="flex flex-col justify-center items-center  px-12 md:px-0">
            <div className="p-4 max-w-4xl w-full">
              <h1 className="text-[#101066] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none mb-4">
                Informative Mental Health
              </h1>
              <br />
              <p className="text-[#101066] font-semibold text-base sm:text-lg md:text-xl lg:text-xl tracking-tight leading-tight mb-8">
                Explore our collection of informative mental health resources
                designed to help teens navigate their emotional well-being and
                find support.
              </p>
            </div>
          </div>
          <div className="curve z-[-1]" />

          <div className="md:ml-24 my-1">
            <div
              style={{
                margin: "auto",
              }}
            >
              <div style={{ maxWidth: "fit-content", margin: "auto" }}>
                <IonChip
                  outline={false}
                  color={filters.includes("article") ? "tertiary" : "medium"}
                  onClick={() =>
                    !filters.includes("article")
                      ? setFilters(filters.concat(["article"]))
                      : setFilters(
                          filters.filter((filter) => filter !== "article")
                        )
                  }
                >
                  {filters.includes("article") ? (
                    <IonIcon icon={closeOutline} />
                  ) : (
                    <div />
                  )}
                  <IonLabel>Articles</IonLabel>
                </IonChip>
                <IonChip
                  outline={false}
                  color={filters.includes("video") ? "tertiary" : "medium"}
                  onClick={() =>
                    !filters.includes("video")
                      ? setFilters(filters.concat(["video"]))
                      : setFilters(
                          filters.filter((filter) => filter !== "video")
                        )
                  }
                >
                  {filters.includes("video") ? (
                    <IonIcon icon={closeOutline} />
                  ) : (
                    <div />
                  )}
                  <IonLabel>Videos</IonLabel>
                </IonChip>
                <IonChip
                  outline={false}
                  color={filters.includes("audio") ? "tertiary" : "medium"}
                  onClick={() =>
                    !filters.includes("audio")
                      ? setFilters(filters.concat(["audio"]))
                      : setFilters(
                          filters.filter((filter) => filter !== "audio")
                        )
                  }
                >
                  {filters.includes("audio") ? (
                    <IonIcon icon={closeOutline} />
                  ) : (
                    <div />
                  )}
                  <IonLabel>Audio Available</IonLabel>
                </IonChip>
              </div>
              <div className="h-6" />
            </div>
            <div className="mt-12 text-center">
              <div
                className="my-12 flex justify-center md:justify-start items-center"
                style={{
                  margin: "auto",
                  maxWidth: 1000,
                }}
              >
                <IonText className="mx-2">Select your voice</IonText>
                <IonButton
                  size="small"
                  color="success"
                  shape="round"
                  onClick={handlePlayPreview}
                >
                  <IonIcon icon={play} />
                </IonButton>
                <select
                  id="countries"
                  value={selectedVoiceId}
                  onChange={handleVoiceChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-12"
                >
                  {usedVoices.map((voice: any, index: number) => (
                    <option key={index} value={voice.voice_id}>
                      {voice.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="container mx-auto grid gap-5 auto-cols-min sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr items-stretch justify-center p-4 center">
            {filteredArticles &&
              filteredArticles.length > 0 &&
              filteredArticles.map((article: any, index: number) => (
                <div key={index}>
                  <IonicCard
                    id={article.id}
                    title={article.title}
                    body={article.video ? " " : article.body}
                    author={article.author}
                    tag={article.tag}
                    image={article.imageURL}
                    voiceId={selectedVoiceId}
                    isExpanded={isExpandedArray[index]}
                    setIsExpandedArray={() => handleExpandCard(index)}
                    index={index}
                    manual_id={article.manual_id}
                    teaser={article.teaser}
                    speech_generated={article.speech_generated}
                    video={article.video}
                  />
                </div>
              ))}
          </div>
          <div
            style={{
              height: 100,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Discover;

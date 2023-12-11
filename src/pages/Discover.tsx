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
import { informationCircleOutline, play } from "ionicons/icons";
const token = import.meta.env.VITE_STRAPY_TOKEN;
const apiKey = import.meta.env.VITE_ELEVEN_LABS_API_KEY;

const Discover: React.FC = () => {
  const [selectedVoiceId, setSelectedVoiceId] = useState(
    "21m00Tcm4TlvDq8ikWAM"
  );
  const [isExpandedArray, setIsExpandedArray] = useState<any>([]);
  const [articles, setArticles] = useState<any>([]);
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
        setArticles(resp.data);
        setFilteredArticles(resp.data);
        setIsExpandedArray(new Array(resp.data.length).fill(false));
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
    <IonContent>
      <div className="pt-12">
        <div>
          <section className="z-[-1]">
            <div>
              <div className="pt-24">
                <div className="p-12 z-50">
                  <IonText color="dark">
                    <h1 className="text-3xl font-bold font-sans mb-4 md:mb-6 md:text-4xl">
                      Informative Mental Health
                    </h1>
                  </IonText>
                  <div className="max-w-lg">
                    <IonText
                      color="dark"
                      style={{
                        fontSize: 18,
                        fontWeight: 500,
                      }}
                    >
                      Explore our collection of informative mental health
                      resources designed to help teens navigate their emotional
                      well-being and find support.
                    </IonText>
                  </div>
                </div>
              </div>
            </div>
            <div className="curve z-[-1]" />
          </section>
          <div className="md:ml-24 my-4">
            <div
              style={{
                maxWidth: 800,
                borderRadius: 20,
                margin: "auto",
              }}
            >
              <IonCard
                color={"danger"}
                style={{
                  borderRadius: 40,
                  // width: 600,
                  // margin: 'auto'
                }}
              >
                <div className="flex justify-center">
                  <IonCardHeader>
                    <IonCardTitle className="text-2xl font-bold font-sans mb-2 md:mb-1 md:text-4xl">
                      Explore what we have
                    </IonCardTitle>
                  </IonCardHeader>
                </div>
                <IonCardContent>
                  <IonChip outline={false} color={"light"}>
                    <IonLabel>Articles</IonLabel>
                  </IonChip>
                  <IonChip outline={false} color={"light"}>
                    <IonLabel>TikToks</IonLabel>
                  </IonChip>
                  <IonChip outline={false} color={"light"}>
                    <IonLabel>Short Facts</IonLabel>
                  </IonChip>
                  <IonChip outline={false} color={"light"}>
                    <IonLabel>Instagram Posts</IonLabel>
                  </IonChip>
                  <IonChip outline={false} color={"light"}>
                    <IonLabel>Articles</IonLabel>
                  </IonChip>
                  <IonChip outline={false} color={"light"}>
                    <IonLabel>TikToks</IonLabel>
                  </IonChip>
                  <IonChip outline={false} color={"light"}>
                    <IonLabel>Short Facts</IonLabel>
                  </IonChip>
                </IonCardContent>
              </IonCard>
              <div className="h-6" />
              <IonSearchbar
                onInput={(event: any) => {
                  console.log(event.target.value);
                  setSearchText(event.target.value);
                }}
                mode="ios"
                animated={true}
                placeholder="Search for what you are looking for..."
                color={"warning"}
                style={{
                  borderRadius: 40,
                  maxWidth: 600,
                  margin: "auto",
                }}
              ></IonSearchbar>
            </div>
            <div className="mt-12 text-center">
              <div
                className="my-12 flex justify-center md:justify-start"
                style={{
                  margin: "auto",
                  maxWidth: 1000,
                }}
              >
                <IonText>Select your reading voice</IonText>
                <IonButton size="small" color="warning" shape="round">
                  <IonIcon icon={informationCircleOutline} />
                </IonButton>
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
          <div className="flex flex-wrap justify-center p-4">
            {filteredArticles &&
              filteredArticles.length > 0 &&
              filteredArticles.map((article: any, index: number) => (
                <div key={index}>
                  <IonicCard
                    id={article.id}
                    title={article.attributes.title}
                    body={article.attributes.body}
                    author={article.attributes.author}
                    tag={article.attributes.tag}
                    image={""}
                    voiceId={selectedVoiceId}
                    isExpanded={isExpandedArray[index]}
                    setIsExpandedArray={() => handleExpandCard(index)}
                    index={index}
                    manual_id={article.attributes.manual_id}
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
    </IonContent>
  );
};

export default Discover;

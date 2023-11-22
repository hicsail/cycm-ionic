import React, { useEffect, useState } from "react";
import Card from "../components/Card";
const token =
import.meta.env.VITE_STRAPY_TOKEN;
const apiKey = import.meta.env.VITE_ELEVEN_LABS_API_KEY;


const Discover: React.FC= () => {

  const [selectedVoiceId, setSelectedVoiceId] = useState('21m00Tcm4TlvDq8ikWAM');
  const [isExpandedArray, setIsExpandedArray] = useState<any>([]);
  const [articles, setArticles] = useState<any>([]);
  const [voices, setVoices] = useState<any>([
    'D38z5RcWu1voky8WS1ja',
    '21m00Tcm4TlvDq8ikWAM',
  ]);

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
        setIsExpandedArray(new Array(resp.data.length).fill(false));
      });
  }, []);

  const handleVoiceChange = (event: any) => {
    setSelectedVoiceId(event.target.value);
  };

  const handleExpandCard = (index: number) => {
    setIsExpandedArray((prevArray: any) => {
      const newArray = [...prevArray];
      newArray[index] = !newArray[index];
      return newArray;
    });
  };
  return (
    <div>
      <div className="flex flex-column items-start justify-center mt-40">
        <select id="countries" value={selectedVoiceId} onChange={handleVoiceChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          {voices.map((voice: any, index: number) => (
            <option key={index} value={voice.voice_id}>
              {voice.name}
            </option>
          ))}
          {
            selectedVoiceId
          }
        </select>
      </div>
      <div className="flex flex-wrap justify-center">
        {articles && articles.length > 0 && articles.map((article: any, index: number) => (
          <div key={article.id} className={`rounded overflow-hidden shadow-lgs m-5 ${isExpandedArray[index] ? 'w-3/4' : 'max-w-md'}`}>
            <Card
              id={article.id}
              title={article.attributes.title}
              body={article.attributes.body}
              image={article.attributes.header_image.data ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${article.attributes.header_image.data[0].attributes.url}` : ""}
              voiceId={selectedVoiceId}
              isExpanded={isExpandedArray[index]}
              setIsExpandedArray={() => handleExpandCard(index)}
              index={index}
              manual_id={article.attributes.manual_id}
            />
          </div>
        ))}
      </div>
      <div style={{
        height: 200
      }}/>
    </div>
  )
};

export default Discover;
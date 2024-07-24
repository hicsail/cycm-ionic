import { IonButton, IonIcon } from "@ionic/react";
import { chevronForward, chevronForwardCircle } from "ionicons/icons";
import React, { useEffect, useState } from "react";

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

function FeaturedVideo({
  id,
  src,
  title,
  allow,
  referrerPolicy,
  btnRounded
}: VideoInputProps) {
  const [videoData, setVideoData] = useState<any>([]);
  const [slide, setSlide] = useState(0);

  const [ videos, setVideos ] = useState<string[]>([
    "https://www.youtube.com/watch?v=LDU_Txk06tM", 
    "https://www.youtube.com/watch?v=2nlSD0zD8Gk"
  ]);

  useEffect(() => {
    fetch(`https://www.youtube.com/embed/2nlSD0zD8Gk?si=GrZ7m1oT-Ax-Jyk5`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "xi-api-key": apiKey,
      },
    })
      .then((res) => res.json())
      .then((resp) => {
        setVideoData(resp.data);
        console.log(resp.data);
      });
  }, []);

  useEffect(() => {
   setVideos(videos.map((video: string) => video.replace("watch?v=", "embed/")))
  }, [])

  useEffect(() => {
    if(slide > videos.length - 1) setSlide(0)
    if(slide < 0) setSlide(videos.length - 1)
  })

  return (
    <div
      id={id}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <iframe
        width="560"
        height="315"
        src={videos[slide]}
        title={title}
        allow={allow}
        allowFullScreen
        style={{ border: "none" }}
      ></iframe>
      <div className="flex flex-col items-start justify-center my-4">
      <div className={`flex ${btnRounded ? 'rounded' : ''} mx-auto`}>
        <button
      type='button'
      className={`text-orange-500 hover:text-orange-700 focus:ring-3 focus:outline-none focus:ring-orange-600 font-medium rounded-full text-md px-5 py-2.5`}
      onClick={() => {
       setSlide(slide + 1)
      }}
    >
    
    <IonIcon icon = {chevronForward}
    size="large" 
    ></IonIcon>
    </button>
    </div>
    </div>
    </div>
    
  );
}

export default FeaturedVideo;

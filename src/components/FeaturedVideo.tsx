import React, { useEffect, useState } from "react";

const token = import.meta.env.VITE_STRAPY_TOKEN;

interface VideoInputProps {
    id: string;
    src: string;
    title: string;
    allow: string;
    referrerPolicy: string;
  }

const apiKey = import.meta.env.VITE_ELEVEN_LABS_API_KEY;

function FeaturedVideo({id, src, title, allow, referrerPolicy}: VideoInputProps) {  
    const [videos, setVideos] = useState<any>([]);
    const [filteredVideos, setFilteredVideos] = useState<any>([
    "D38z5RcWu1voky8WS1ja",
    "21m00Tcm4TlvDq8ikWAM",
]); 

const [isExpandedArray, setIsExpandedArray] = useState<any>([]);

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
      setVideos(resp.data);
      setFilteredVideos(resp.data);
      setIsExpandedArray(new Array(resp.data.length).fill(false));
      console.log(resp.data);
    });
}, []);

return (
    <div id={id} style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
        <iframe width="560" height="315" 
            src={src} 
            title={title} 
            allow={allow} 
            allowFullScreen
            style={{ border: "none"}}>
        </iframe>
    </div>
)};

export default FeaturedVideo;
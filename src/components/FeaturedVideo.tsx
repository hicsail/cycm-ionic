import { IonFabButton, IonIcon } from "@ionic/react";
import {
  arrowBack,
  arrowForward,
  chevronCollapseOutline,
  chevronForward,
} from "ionicons/icons";
import React, { useEffect, useState } from "react";

function FeaturedVideo() {
  const [videos, setVideos] = useState<string[]>([]);
  const token = import.meta.env.VITE_STRAPY_TOKEN;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_STRAPI_URL}/api/main-page-videos?populate=*`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((resp) => {
        const data = resp.data;
        const urls = data.map((video: any) => video.attributes.url);
        const embedUrls: string[] = urls.map((video: string) =>
          video.replace("watch?v=", "embed/")
        );
        setVideos(embedUrls);
        console.log(videos);
      });
  }, []);

  return (
    <div>
      <div className="flex justify-center">
        <iframe
          src={videos[index]}
          title="Featured Videos"
          allowFullScreen={true}
          className="mx-0 rounded-lg w-10/12 md:w-9/12 lg:w-8/12 xl:w-6/12 2xl:w-5/12 mx-auto h-72 md:h-96"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; fullscreen;"
        ></iframe>
      </div>
      <div className="w-10/12 md:w-9/12 lg:w-8/12 xl:w-6/12 2xl:w-5/12 mx-auto flex justify-between">
        {/* <IonFabButton
          className="-mt-16 ml-2"
          style={{ "--background": "orangered" }}
        >
          <IonIcon
            icon={arrowBack}
            onClick={() => {
              console.log(index);
              setIndex(index === 0 ? videos.length - 1 : index - 1);
            }}
          />
        </IonFabButton> */}
        <div></div>
        <IonFabButton
          className="-mt-16 mr-2"
          style={{ "--background": "orangered" }}
        >
          <IonIcon
            icon={arrowForward}
            onClick={() => {
              console.log(index);
              setIndex(index === videos.length - 1 ? 0 : index + 1);
            }}
          />
        </IonFabButton>
      </div>
    </div>
  );
}

export default FeaturedVideo;

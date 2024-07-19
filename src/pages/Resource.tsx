import ReactMarkdown from "react-markdown";
import DualColumnImageText from "../components/DualColumnImageText";
import { articles } from "../dummyArticles";
import { generateTitleId } from "../utils";
import DualColumnText from "../components/DualColumnText";
import ResourceCard from "../components/ResourceCard";

import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonText,
} from "@ionic/react";
import { useEffect, useState } from "react";

const token = import.meta.env.VITE_STRAPY_TOKEN;

const Resource: React.FC = () => {
  const [resources, setResources] = useState<any>([]);

  useEffect(() => {
    // Fetch resources from API
    fetch(`${import.meta.env.VITE_STRAPI_URL}/api/resources?populate=*`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((resp) => {
        setResources(resp.data);
      });
  }, []);

  return (
    <div className="">
      <div className="pt-36 flex flex-col justify-center items-center bg-[#FFE2E2] min-h-screen px-12 md:px-0">
        <div className="p-4 max-w-4xl w-full my-24">
          <h1 className="text-[#101066] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none mb-4">
            Mental Health Resources for Teenagers
          </h1>
          <br />
          <p className="text-[#101066] font-semibold text-base sm:text-lg md:text-xl lg:text-xl tracking-tight leading-tight mb-8">
            Here at the Center of Young Colorful Minds, we are dedicated to
            supporting the mental well-being of teenagers. Below, you'll find a
            curated list of resources designed to help you navigate the
            challenges of adolescence and prioritize your mental health.
          </p>
        </div>
        <div className="max-w-6xl mx-auto mb-24">
          <div className="grid gap-1 xl:gap-24 lg:gap-12 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 md:mb-16 m-24 sm:m-8">
            {resources.map((resource: any) => (
              <IonCard
                button={true}
                style = {{
                  "--background" : "transparent",
                  boxShadow: "none",  
                }}
                onClick={() => {
                  window.open(resource.attributes.link, "_blank");
                }}
              >
                <img
                  src={`${import.meta.env.VITE_STRAPI_URL}${
                    resource.attributes.image.data.attributes.url
                  }`}
                  alt={resource.attributes.title}
                  className="mx-auto lg:w-full sm:w-3/4"
                />
                <IonCardHeader style = {{paddingTop: "0rem"}}>
                  <IonCardTitle style = {{textAlign: "center", marginTop: "0rem", lineHeight:"1rem", paddingTop: "0rem"}}>{resource.attributes.name}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent style = {{textAlign: "center", marginTop: "0rem", lineHeight:"1rem"}}>
                  {resource.attributes.description}
                </IonCardContent>
              </IonCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resource;

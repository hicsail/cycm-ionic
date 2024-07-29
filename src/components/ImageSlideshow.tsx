import React, { useEffect } from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonIcon,
} from "@ionic/react";
import { arrowForwardOutline } from "ionicons/icons";

// Type definition for the slide component
type SlideComponent = {
  background: string;
  description: string;
};

// Get the token from environment variables
const token = import.meta.env.VITE_STRAPY_TOKEN;

export default function ImageSlideshow() {
  const [slide, setSlide] = React.useState(0); // State to keep track of the current slide
  const [slides, setSlides] = React.useState<SlideComponent[]>([]); // State to store the slides

  useEffect(() => {
    // Fetch the slides data from the Strapi API
    fetch(`${import.meta.env.VITE_STRAPI_URL}/api/slides?populate=*`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((resp) => {
        const data = resp.data;
        console.log(data);
        // Map the fetched data to the SlideComponent format
        let slides: SlideComponent[] = data.map((slide: any) => {
          console.log(slide);
          console.log(slide.attributes.background.data[0].attributes.name);
          return {
            background: slide.attributes.background.data[0].attributes.name,
            description: slide.attributes.description,
          };
        });
        setSlides(slides); // Update the slides state
      });
  }, []);

  // Function to move to the next slide
  const nextSlide = () => {
    setSlide(slide > slides.length - 2 ? 0 : slide + 1);
  };

  return (
    <div className="mt-8 mx-auto w-3/4 px-8 justify-center">
      <div>
        <IonCard
          className={`flex flex-col items-center w-auto h-72 sm:h-96 md:h-[28rem] lg:h-[32rem] xl:h-[36rem] object-stretch mx-auto justify-center overflow-hidden`}
        >
          {slides.length > 0 && (
            <>
              <img
                src={slides[slide].background}
                alt="slide"
                className="object-cover shrink-0 min-w-full min-h-[115%]"
              />
              <IonCardSubtitle
                className="md:text-lg lg:text-2xl xl:text-3xl text-md w-full md:w-3/4"
                style={{
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                {slides[slide].description}
              </IonCardSubtitle>
              <IonButton
                className="absolute bottom-[0.5rem] right-[0.5rem] justify-end w-[4rem] h-[3rem] "
                onClick={nextSlide}
                color="light"
                size="small"
                shape="round"
                style={{
                  "--box-shadow": "none",
                  "--ripple-color": "transparent",
                  transition: "width 2s, height 4s",
                }}
              >
                <IonIcon
                  size="large"
                  icon={arrowForwardOutline}
                  style={{ color: "red" }}
                />
              </IonButton>
            </>
          )}
        </IonCard>
      </div>
    </div>
  );
}

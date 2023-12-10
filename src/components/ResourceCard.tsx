import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";

interface ResourceCardProps {
  title: string;
  description: string;
  image: string;
  action: { text: string; link: string };
  color?: string;
}

const ResourceCard = ({
  title,
  description,
  image,
  action,
  color,
}: ResourceCardProps) => {
  return (
    <IonCard color="tertiary">
      <img src={image} alt="CYCM Circle" className="mx-auto mt-6" width={250} />


      <IonCardHeader className="text-center">
        <IonCardTitle className="text-2xl">{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent className="text-center">
        <div style={{ height: "100%" }}>
          <p className="text-md font-sans h-12">{description}</p>
          <button
            type="button"
            className="text-gray-900 hover:text-white bg-gray-200 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-md text-md px-5 py-2 text-center my-2"
          >
            {action.text}
          </button>
        </div>
      </IonCardContent>
    </IonCard>
  );
}

export default ResourceCard;
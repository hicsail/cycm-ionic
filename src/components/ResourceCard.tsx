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
}

const ResourceCard = ({
  title,
  description,
  image,
  action,
}: ResourceCardProps) => {
  return (
    <IonCard color="warning">
      <img src={image} alt="CYCM Circle" />
      <IonCardHeader className="text-center">
        <IonCardTitle className="text-2xl">{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent className="text-center">
        <p className="text-md font-sans my-2">{description}</p>
        <button
          type="button"
          className="mt-auto text-gray-900 hover:text-white bg-gray-200 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-md text-md px-5 py-2 text-center my-2"
        >
          {action.text}
        </button>
      </IonCardContent>
    </IonCard>
  );
};

export default ResourceCard;

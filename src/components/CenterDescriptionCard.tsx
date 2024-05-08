import { IonCard, IonCardContent, IonCardSubtitle } from "@ionic/react";

interface ResourceCardProps {
  description: string;
}

export default function CenterDescriptionCard({
  description,
}: ResourceCardProps) {
  return (
    <div>
      <IonCard className="bg-gradient-to-t from-[#FB4B45] to-[#FC8D3D] rounded-[12px] w-[18rem] h-[20rem]">
        <IonCardContent className="align-middle py-8 px-6">
          <IonCardSubtitle
            style={{
              fontSize: 16,
              color: "#fff",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {description}
          </IonCardSubtitle>
        </IonCardContent>
        <div>
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute md:bottom-[-9rem] bottom-[-3rem] md:right-[-7rem] right-[-1rem] md:w-[20rem] w-[14rem] md:h-[20rem] h-[14rem]"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 112.215v.188c.033 26.196 13.765 51.631 38.2 65.462A77.29 77.29 0 0044.399 181H213V19.507a75.388 75.388 0 00-13.481-9.724l-.017-.005C187.807 3.157 175.091.008 162.546 0h-.088c-26.214.015-51.673 13.748-65.511 38.197-.343.607-.657 1.24-.982 1.852-32.685-9.372-68.71 4.392-86.188 35.264C3.166 86.99.016 99.687 0 112.215zm158.919-6.168c5.508 14.285-1.362 30.444-15.583 36.351s-30.506-.63-36.742-14.621l-9.17 3.807c8.205 19.306 30.474 28.419 49.875 20.349 19.417-8.066 28.669-30.259 20.791-49.693l-9.171 3.807z"
              fill="#fff"
            />
          </svg>
        </div>
      </IonCard>
    </div>
  );
}

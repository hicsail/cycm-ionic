import CenterDescriptionCard from "./CenterDescriptionCard";

export default function CenterDescriptionCards() {
  return (
    <div>
      <div className="flex flex-col items-center mt-8">
        <div className="flex gap-8 justify-center max-w-7xl px-8 flex-col md:px-12 md:flex-row z-[1]">
          <CenterDescriptionCard description="Create educational content approved by mental health licensed clinicians and teens" />
          <CenterDescriptionCard description="Build community partnerships to support youth through mental health programs and training" />
          <CenterDescriptionCard description="Partner with researchers to design youth mental health programs targetting needs of diverse youth" />
        </div>
      </div>
    </div>
  );
}

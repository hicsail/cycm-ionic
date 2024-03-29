import CenterDescriptionCard from "./CenterDescriptionCard";

export default function CenterDescriptionCards() {
  return (
    <div className="flex flex-col max-w-7xl items-center mt-8 mx-auto">
      <div className="flex gap-4 px-8 flex-col lg:flex-row z-[1]">
        <CenterDescriptionCard description="Create educational content approved by mental health licensed clinicians and teens" />
        <CenterDescriptionCard description="Build community partnerships to support youth through mental health programs and training" />
        <CenterDescriptionCard description="Partner with researchers to design youth mental health programs targetting needs of diverse youth" />
      </div>
    </div>
  );
}

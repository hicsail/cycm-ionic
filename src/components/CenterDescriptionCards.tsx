import CenterDescriptionCard from "./CenterDescriptionCard";

export default function CenterDescriptionCards() {
  return (
    <div className="flex md:flex-row md:flex-wrap flex-col max-w-7xl items-center mt-8 mx-auto md:gap-4 px-8 z-[1] justify-center">
      <CenterDescriptionCard description="Create educational content approved by mental health licensed clinicians and teens" />
      <CenterDescriptionCard description="Build community partnerships to support youth through mental health programs and training" />
      <CenterDescriptionCard description="Partner with researchers to design youth mental health programs targetting needs of diverse youth" />
    </div>
  );
}

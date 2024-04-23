import BlueGraphic from "./BlueGraphic";
import PinkGraphic from "./PinkGraphic";
import RedGraphic from "./RedGraphic";

export default function HelpInfographics() {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-7xl px-8 my-28 mx-auto gap-16">
      <BlueGraphic />
      <PinkGraphic />
      <RedGraphic />
    </div>
  );
}

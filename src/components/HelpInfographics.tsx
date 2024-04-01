import BlueGraphic from "./BlueGraphic";
import PinkGraphic from "./PinkGraphic";
import RedGraphic from "./RedGraphic";

export default function HelpInfographics() {
  return (
    <div className="mt-28">
      <div className="w-full mb-36">
        <BlueGraphic />
      </div>
      <div className="w-full mb-36">
        <PinkGraphic />
      </div>
      <div className="w-full mb-36">
        <RedGraphic />
      </div>
    </div>
  );
}

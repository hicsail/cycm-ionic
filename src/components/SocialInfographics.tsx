export default function SocialInfographics() {
  return (
    <div className="flex flex-col md:flex-row justify-between max-w-7xl py-16 my-16 mx-auto">
      <div className="relative max-w-[70%] md:max-w-[50%] mx-auto md:mx-0">
        <img className="w-auto h-auto" alt="Vector" src="mobile-info.svg" />
        <div className="absolute w-full top-[20%] px-10 md:px-16">
          <div className="[font-family:'Montserrat',Helvetica] font-bold text-white">
            <h1 className="text-7xl md:text-[120px] lg:text-[180px] leading-none">18</h1>
            <h1 className="text-5xl md:text-[72px] lg:text-[100px] leading-none">BILLION</h1>
            <h4 className="text-2xl md:text-4xl lg:text-5xl leading-tight">
              views have been garnered by #mentalhealth on TikTok.
            </h4>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-evenly max-w-[70%] md:max-w-[50%] space-y-4 p-4 mx-auto md:mx-0">
        {/* Assuming these divs contain the other two graphics, adjust as necessary */}
        <div className="w-full [font-family:'Montserrat',Helvetica] font-bold">
          <img src="/clock.svg" alt="Graphic 1" className="md:w-1/2 h-auto mb-4" />
          <h1 className="text-6xl md:text-[72px] lg:text-[100px] leading-none text-white">3.5 hrs</h1>
          <h4 className="text-2xl md:text-3xl lg:text-4xl leading-tight text-white">
            is the average daily time spent on social media platforms by 8th and 10th graders.
          </h4>
        </div>
        <div className="w-full [font-family:'Montserrat',Helvetica] font-bold">
          <img src="/battery.svg" alt="Graphic 2" className="md:w-3/4 h-auto mb-4" />
          <h1 className="text-6xl md:text-[72px] lg:text-[100px] leading-none text-white">95%</h1>
          <h4 className="text-2xl md:text-3xl lg:text-2xl leading-tight text-white">
            of teens ages 13 to 17 use social media, with more than 1 in 3 reporting they use it “almost constantly.”
          </h4>
        </div>
      </div>
    </div>
  );
}

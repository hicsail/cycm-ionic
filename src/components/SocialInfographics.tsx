export default function SocialInfographics() {
  return (
    <div className="flex flex-col md:flex-row justify-evenly max-w-7xl md:px-16 py-16 my-16 mx-auto gap-16 md:gap-0">
      <div className="relative max-w-[70%] md:max-w-[50%] mx-auto md:mx-0">
        <img className="w-[25rem] md:w-[20rem] h-auto" alt="Vector" src="mobile-info.svg" />
        <div className="absolute w-full top-[40%] translate-y-[-50%] px-5">
          <div className="[font-family:'Montserrat',Helvetica] font-bold text-white">
            <h1 className="text-[12vw] sm:text-[10vw] md:text-[64px] leading-none">18</h1>
            <h1 className="text-[12vw] sm:text-[10vw] md:text-[64px] leading-none">BILLION</h1>
            <h4 className="text-[4vw] md:text-[16px] leading-tight">
              views have been garnered by #mentalhealth on TikTok.
            </h4>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-evenly max-w-[70%] md:max-w-[35%] space-y-4 p-4 mx-auto md:mx-0 gap-14 md:gap-8">
        {/* Assuming these divs contain the other two graphics, adjust as necessary */}
        <div className="w-full [font-family:'Montserrat',Helvetica] font-bold">
          <img src="/clock.svg" alt="Graphic 1" className="w-[20rem] md:w-[20vw] lg:w-2/3 h-auto mb-4 mx-auto" />
          <h1 className="text-[12vw] md:text-[60px] leading-none text-white">3.5 hrs</h1>
          <h4 className="text-[4vw] md:text-[16px] leading-tight text-white">
            is the average daily time spent on social media platforms by 8th and 10th graders.
          </h4>
        </div>
        <div className="w-full [font-family:'Montserrat',Helvetica] font-bold">
          <img src="/battery.svg" alt="Graphic 2" className="md:w-[30vw] lg:w-full h-auto mb-4" />
          <h1 className="text-[12vw] md:text-[60px] leading-none text-white">95%</h1>
          <h4 className="text-[4vw] md:text-[16px] leading-tight text-white">
            of teens ages 13 to 17 use social media, with more than 1 in 3 reporting they use it “almost constantly.”
          </h4>
        </div>
      </div>
    </div>
  );
}

export default function NewHero() {
  return (
    <div
      className="flex flex-col justify-center items-center h-screen"
      style={{
        background: "url('/union.png'), rgba(255, 226, 226, 1)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="p-8 max-w-7xl w-full">
        <h1 className="text-[#101066] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none mb-4">
          EMPOWERING TEENS
          <br />
          WITH MENTAL HEALTH
          <br />
          RESOURCES
        </h1>
        <p className="text-[#101066] font-semibold text-base sm:text-lg md:text-xl lg:text-2xl tracking-tight leading-tight mb-8">
          DISCOVER A WEALTH OF ARTICLES, TOOLS, AND SUPPORT <br /> FOR TEENAGE
          MENTAL HEALTH.
        </p>
      </div>
      <div className="w-full max-w-7xl relative">
        <img
          src="pic3.png"
          className="absolute lg:block hidden w-auto h-auto z-0 left-[53rem] top-[-15rem]"
          alt="Rectangle"
        />
        <div className="flex relative translate-x-[-50%] lg:left-2/3 left-[55%] lg:top-[-10rem] top-[-8rem]">
          <img
            src="pic1.png"
            className="absolute lg:w-auto w-[45%] h-auto z-0 lg:top-[9rem] top-[7rem]"
            alt="Rectangle"
          />
          <img
            src="pic2.png"
            className="absolute lg:w-auto w-[60%] h-auto z-10 lg:left-[21rem] left-[35%] lg:top-[14rem] top-[9rem]"
            alt="Rectangle"
          />
          <img
            src="pic3.png"
            className="absolute lg:hidden block w-[40%] h-auto z-0 left-[20%] sm:top-[20rem] top-[15rem]"
            alt="Rectangle"
          />
        </div>
      </div>
    </div>
  );
}

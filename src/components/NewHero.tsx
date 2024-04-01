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
      <div className="p-4 max-w-7xl w-full">
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
      <div className="flex relative w-full max-w-7xl lg:left-[15rem] md:left-[8rem] left-[5rem] md:top-[-10rem] top-[-8rem]">
        <img
          src="pic1.png"
          className="absolute md:w-auto w-[15rem] h-auto z-0 md:top-[9rem] top-[7rem]"
          alt="Rectangle"
        />
        <img
          src="pic2.png"
          className="absolute md:w-auto w-[20rem] h-auto z-10 md:left-[21rem] left-[12rem] md:top-[14rem] top-[9rem]"
          alt="Rectangle"
        />
        <img
          src="pic3.png"
          className="absolute md:w-auto w-[15rem] h-auto z-20 md:left-[40rem] left-[25rem]"
          alt="Rectangle"
        />
      </div>
    </div>
  );
}

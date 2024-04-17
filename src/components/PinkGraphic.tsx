export default function PinkGraphic() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center max-w-7xl mx-auto">
      <div className="w-full md:w-1/2 mb-4 md:mb-0">
        <img src="/purple-info.svg" className="w-2/3 md:w-auto mx-auto" />
      </div>
      <div className="text-[#101066] font-semibold text-center md:text-left md:pl-16">
        <h1 className="text-6xl md:text-[100px] leading-tight tracking-tighter mb-2 md:mb-0">
          1 in 5
        </h1>
        <p className="text-xl md:text-[22px] tracking-tight leading-tight">
          high school students seriously
          <br />
          considered attempting suicide
        </p>
      </div>
    </div>
  );
}

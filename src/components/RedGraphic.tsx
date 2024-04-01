export default function RedGraphic() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center max-w-7xl mx-auto">
      <div className="w-full md:w-1/2 mb-4 md:mb-0">
        <img src="/pie-graphic.svg" className="w-1/2 md:w-auto mx-auto" />
      </div>
      <div className="text-[#101066] font-semibold text-center md:text-left pl-16">
        <h1 className="text-6xl md:text-[100px] leading-tight tracking-tighter mb-2 md:mb-0">
          1 / 3
        </h1>
        <p className="text-xl md:text-[22px] tracking-tight leading-tight">
          of higher schoolers have
          <br />
          experienced poor mental health
        </p>
      </div>
    </div>
  );
}

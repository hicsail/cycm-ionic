export default function RedGraphic() {
  return (
    <div className="flex flex-col justify-center items-center max-w-7xl mx-auto">
      <div className="md:h-[15rem] mb-4 md:mb-0 content-center">
        <img src="/pie-graphic.svg" className="w-2/3 md:w-3/4 mx-auto" />
      </div>
      <div className="font-sans text-[#101066] font-semibold text-center">
        <h1 className="text-6xl md:text-7xl leading-tight tracking-tighter mb-2 md:mb-0">
          1 / 3
        </h1>
        <p className="text-xl md:text-2xl tracking-tight leading-tight">
          of higher schoolers have
          <br />
          experienced poor mental health
        </p>
      </div>
    </div>
  );
}

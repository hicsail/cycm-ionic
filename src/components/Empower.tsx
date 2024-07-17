interface EmpowerProps {
  title?: string;
  description?: string;
  bgColor?: string;
  btnElement?: JSX.Element;
  rounded?: boolean;
  textColor?: string;
}

const Empower = ({
  title,
  description,
  bgColor,
  btnElement,
  rounded = false,
  textColor,
}: EmpowerProps) => {
  return (
    <div className="flex justify-center p-8">
      <div
        className={`max-w-xs sm:max-w-lg md:max-w-3xl md:px-20 md:py-8 px-8 py-4 ${
          rounded ? "rounded-full" : "rounded-3xl"
        }`}
        style={{
          backgroundColor: bgColor ? bgColor : "#fff",
        }}
      >
        <div className="flex flex-col items-start justify-center my-4">
          <h1 className="text-4xl font-bold font-sans md:text-4xl mb-4">
            {title}
          </h1>
          <p className={`text-md font-sans font-semibold text-center md:text-lg mb-4 text-${textColor}`}>
            {description}
          </p>
          <div className="flex mx-auto">{btnElement}</div>
        </div>
      </div>
    </div>
  );
};

export default Empower;

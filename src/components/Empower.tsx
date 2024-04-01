interface EmpowerProps {
  title?: string;
  description?: string;
  bgColor?: string;
  btnElement?: JSX.Element;
}

const Empower = ({ title, description, bgColor, btnElement }: EmpowerProps) => {
  return (
    <div className="flex justify-center">
      <div
        className="max-w-xl md:max-w-3xl md:px-20 md:py-8 px-8 py-4 "
        style={{ backgroundColor: bgColor ? bgColor : "#fff", borderRadius: 40 }}
      >
        <div className="flex flex-col items-start justify-center my-4">
          <h1 className="text-4xl font-bold font-sans md:text-4xl mb-4">{title}</h1>
          <p className="text-md font-sans font-semibold text-center md:text-lg mb-4 text-white">{description}</p>
          <div className="flex mx-auto">{btnElement}</div>
        </div>
      </div>
    </div>
  );
};

export default Empower;

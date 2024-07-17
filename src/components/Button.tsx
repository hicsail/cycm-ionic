interface ButtonProps {
  text: string;
  backgroundColor: string;
  size: string;
}

const Button: React.FC<ButtonProps> = ({ text, backgroundColor, size }) => {
  return (
    <button
      className={`text-white hover:text-${backgroundColor} border border-solid border-2 border-${backgroundColor} bg-${backgroundColor} hover:bg-transparent focus:ring-4 focus:outline-none font-${size} rounded-full text-md px-5 py-2.5`}
    >
      {text}
    </button>
  );
};

export default Button;

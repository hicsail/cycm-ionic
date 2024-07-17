import { useState } from "react";

interface ButtonProps {
  id?: string;
  text: string;
  backgroundColor: string;
  textColor?: string;
  size?: string | number;
  py: string | number,
  px: string | number,
  onClick?: (e: any) => void;
}

let Button: React.FC<ButtonProps> = ({ id, text, backgroundColor, textColor, size, px, py, onClick }) => {
  const [hover, setHover] = useState(false);
  return (
    <button
      id={id}
      className={`text-white border border-solid border-2 hover:bg-transparent focus:ring-4 focus:outline-none font-medium rounded-full mr-2`}
      style={{
        backgroundColor : hover? 'transparent' : backgroundColor,
        color : hover? backgroundColor: textColor ? textColor : "white",
        borderColor : backgroundColor,
        fontSize: size,
        paddingLeft: px,
        paddingRight: px,
        paddingTop: py,
        paddingBottom: py,
      }} 
      onClick={onClick}
      onMouseEnter = {() => setHover(true)}
      onMouseLeave = {() => setHover(false)}
    >
      {text}
    </button>
  );
};

export default Button;

import { InputHTMLAttributes, useState } from "react";

type Modes = {
  withBorder: string;
  withoutBorder: string;
};

const modes: Modes = {
  withBorder: "border-solid border-2",
  withoutBorder: "",
};

interface Input {
  rightIcon?: JSX.Element;
  mode: keyof Modes;
}

type CustomInput = InputHTMLAttributes<HTMLInputElement> & Input;

export const Input = ({ rightIcon, mode, ...props }: CustomInput) => {
  const [showIcon, setShowIcon] = useState(true);
  const handleInputFocus = () => {
    setShowIcon(false);
  };
  const handleInputBlur = () => {
    setShowIcon(true);
  };
  return (
    <>
      <input
        className={`pr-10 pl-[20px] w-full h-full ${modes[mode]}`}
        {...props}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      {rightIcon && showIcon && (
        <div className="absolute top-[50%] -translate-y-[50%] right-3 cursor-pointer">
        {rightIcon}
      </div>
      )}
      
    </>
  );
};

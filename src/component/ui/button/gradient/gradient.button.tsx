import { ReactNode } from "react";

interface gradientButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const GradientButton = (props: gradientButtonProps) => {
  const { children, onClick, type = "button", disabled = false } = props;
  return (
    <button
      className={`py-3 font-bold text-base leading-relaxed flex justify-center align-middle w-full rounded-lg`}
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        background: `linear-gradient(91.55deg, #4D35E1, #9731C7)`,
      }}
    >
      {children}
    </button>
  );
};

export default GradientButton;

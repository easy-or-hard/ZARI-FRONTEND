import { ReactNode } from "react";

export type ConfirmProps = {
  children: ReactNode;
  onClick?: () => void;
  colorType: "accept" | "cancel" | "danger";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  isToggle?: boolean;
};

/**
 * @description 디자인된 버튼
 * @constructor
 */
export default function ConfirmButton({
  children,
  onClick,
  colorType,
  type,
  disabled = false,
  isToggle = false,
}: ConfirmProps) {
  const colorClass = {
    accept: "bg-zari_btn_primary",
    cancel: "border",
    danger: "bg-zari_danger",
  }[colorType];

  const disabledClass = "bg-zari_btn_disabled";

  return (
    <button
      className={`px-10 py-3 rounded-lg ${
        disabled && isToggle ? disabledClass : colorClass
      }`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

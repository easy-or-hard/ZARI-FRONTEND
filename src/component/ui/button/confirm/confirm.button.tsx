import { ReactNode } from "react";
import styles from "./confirm-button.module.css";

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
  type = "button",
  disabled = false,
  isToggle = false,
}: ConfirmProps) {
  return (
    <button
      className={`${styles.button} ${
        disabled && isToggle ? styles.disabled : styles[colorType]
      }`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

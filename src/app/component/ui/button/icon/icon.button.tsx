import { ReactNode } from "react";

export type IconProps = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

/**
 * @description 디자인된 버튼
 * @constructor
 */
export default function IconButton({
  children,
  onClick,
  disabled = false,
}: IconProps) {
  return (
    <button
      className="p-2 rounded-lg"
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  enabled?: boolean;
};

/**
 * 활성 비활성 가능한 버튼 컴포넌트
 * @param { ReactNode }children
 * @param { string } className
 * @param { Function }onClick
 * @param { "button" | "submit" | "reset" } type
 * @param { boolean } enabled
 * @constructor
 */
export function EnableButton({
  children,
  className,
  onClick,
  type = "button",
  enabled = true,
}: Props) {
  return (
    <button
      className={`px-10 py-3 rounded-lg w-full
        ${enabled ? "bg-zari_primary" : "bg-zari_btn_disabled"}
        ${className}`}
      type={type}
      onClick={onClick}
      disabled={!enabled}
    >
      {children}
    </button>
  );
}

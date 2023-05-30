import React from "react";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

export function CancelButton({ children, onClick }: Props) {
  return (
    <button
      className="px-10 py-3 rounded-lg border border-white"
      type="reset"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

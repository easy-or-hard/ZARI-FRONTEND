"use client";

import { createContext, ReactNode, useState } from "react";
import CreateByeol from "@/app/component/auth/byeol/create-byeol";

type CreateContextType = {
  show: (dimVisible: boolean) => void;
  hide: () => void;
  isVisible: boolean;
  isDimVisible: boolean;
};

type Props = {
  children: ReactNode;
};
export const CreateByeolContext = createContext<CreateContextType | null>(null);
export default function CreateByeolProvider({ children }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDimVisible, setIsDimVisible] = useState(false); // [1
  const show = (dimVisible = true) => {
    setIsVisible(true);
    setIsDimVisible(dimVisible);
  };
  const hide = () => {
    setIsVisible(false);
  };

  return (
    <CreateByeolContext.Provider
      value={{ show, hide, isVisible, isDimVisible }}
    >
      {children}
      <CreateByeol />
    </CreateByeolContext.Provider>
  );
}

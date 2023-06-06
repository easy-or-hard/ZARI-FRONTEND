"use client";

import { createContext, ReactNode, useState } from "react";
import SignIn from "@/app/component/auth/sign-in/sign-in";

type signInProps = {
  show: () => void;
  hide: () => void;
  isVisible: boolean;
  isDimVisible: boolean;
};
export const SignInContext = createContext<signInProps | null>(null);

type Props = {
  children: ReactNode;
};

export default function SignInProvider({ children }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDimVisible, setIsDimVisible] = useState(false); // [1

  const show = (isDimVisible = true) => {
    setIsVisible(true);
    setIsDimVisible(isDimVisible);
  };

  const hide = () => {
    setIsVisible(false);
  };

  return (
    <SignInContext.Provider value={{ show, hide, isVisible, isDimVisible }}>
      {children}
      <SignIn />
    </SignInContext.Provider>
  );
}

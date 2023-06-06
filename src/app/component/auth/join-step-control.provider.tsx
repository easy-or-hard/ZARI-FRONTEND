"use client";

import { createContext, ReactNode, useState } from "react";
import SignIn from "@/app/component/auth/sign-in/sign-in";
import CreateByeol from "@/app/component/auth/byeol/create-byeol";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Dim from "@/app/component/ui/popup/modal/dim";

type JoinStepControlContextType = {
  step: number;
  setStep: (step: number) => void;
};

export const JoinStepControlContext =
  createContext<JoinStepControlContextType | null>(null);

type Props = {
  children: ReactNode;
};

export default function JoinStepControlProvider({ children }: Props) {
  const [step, setStep] = useState(-1);

  return (
    <JoinStepControlContext.Provider value={{ step, setStep }}>
      {children}
      <TransitionGroup>
        {step !== -1 && (
          <CSSTransition timeout={300} classNames="dim">
            <Dim />
          </CSSTransition>
        )}

        {step === 0 && (
          <CSSTransition timeout={300} classNames="modal">
            <SignIn />
          </CSSTransition>
        )}
        {step === 1 && (
          <CSSTransition timeout={300} classNames="modal">
            <CreateByeol />
          </CSSTransition>
        )}
      </TransitionGroup>
    </JoinStepControlContext.Provider>
  );
}

import React from "react";
import JoinStepControlProvider from "@/app/component/auth/join-step-control.provider";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <JoinStepControlProvider>{children}</JoinStepControlProvider>;
}

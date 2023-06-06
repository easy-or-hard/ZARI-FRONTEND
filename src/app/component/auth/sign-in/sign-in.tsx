"use client";

import SignInList from "@/app/component/auth/sign-in/sign-in-list";

export default function SignIn() {
  return (
    <div className=" absolute top-0 w-full h-full">
      <div className="flex flex-col place-items-center h-1/2 justify-center">
        <div className="font-SUIT text-1xl font-normal leading-30 tracking-0 text-center">
          우리의 이야기
        </div>
        <div className="font-SUIT text-7xl font-bold leading-63 tracking-0.2 text-center">
          ZARI
        </div>
      </div>
      <div className="h-1/2 flex flex-col justify-end p-4">
        <SignInList />
      </div>
    </div>
  );
}

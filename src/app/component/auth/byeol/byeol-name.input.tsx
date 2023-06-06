"use client";

import React, { useEffect, useState } from "react";
import useIsNameAvailableByeol from "@/services/byeol/use.Is-name-available.byeol";

type ByeolNameInputProps = {
  name: string;
  setName: (name: string) => void;
  setIsNameAvailable: (isAvailable: boolean) => void;
};

export default function ByeolNameInput({
  name,
  setName,
  setIsNameAvailable,
}: ByeolNameInputProps) {
  const [namingGuide, setNamingGuide] = useState({
    message: "",
    color: "#FFFFFF",
  });
  const { data, error } = useIsNameAvailableByeol(name);

  useEffect(() => {
    if (error) {
      setNamingGuide({
        message: error.message,
        color: "#FF416E",
      });
      setIsNameAvailable(false);
    } else if (!data) {
      setNamingGuide({
        message: "",
        color: "#FFFFFF",
      });
      setIsNameAvailable(false);
    } else if (data) {
      setNamingGuide({
        message: "사용 가능한 이름이에요",
        color: "#00E577",
      });
      setIsNameAvailable(true);
    }
  }, [data, error, setIsNameAvailable]);

  return (
    <div className={"flex flex-col mb-8"}>
      <div
        className={
          "text-center mb-8 text-suit text-2xl font-bold leading-relaxed"
        }
      >
        별님의 이름과 생일을 알려주세요
      </div>
      <input
        className={`bg-[#3A2B4D] p-4 rounded-xl block w-full`}
        type={"text"}
        name={"name"}
        value={name}
        placeholder={"별님의 이름은 무엇인가요?"}
        onChange={(e) => setName(e.target.value.replace(/\s/g, ""))}
        required
        maxLength={8}
        minLength={2}
      />
      <div
        className={"h-4 text-sm px-4 mt-1"}
        style={{ color: namingGuide.color }}
      >
        {namingGuide.message}
      </div>
    </div>
  );
}
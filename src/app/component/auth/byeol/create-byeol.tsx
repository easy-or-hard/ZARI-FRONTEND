"use client";

import ByeolNameInput from "@/app/component/auth/byeol/byeol-name.input";
import BirthdaySelect from "@/app/component/auth/byeol/birthday.select";
import React, {
  FormEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import ConfirmButton from "@/app/component/ui/button/confirm/confirm.button";
import useByeol from "@/services/byeol/use.byeol";
import { PostByeolDto } from "@/services/byeol/dto/reuqest/post-byeol.dto";
import { useIsByeol, useIsUser } from "@/services/auth/use.auth";
import { JoinStepControlContext } from "@/app/component/auth/join-step-control.provider";

/**
 * 별 생성 페이지
 * @constructor
 */
export default function CreateByeol() {
  const joinStepControlContext = useContext(JoinStepControlContext);
  if (!joinStepControlContext) {
    throw new Error("joinStepControlContext is null");
  }
  const { setStep } = joinStepControlContext;

  const [name, setName] = useState<string>("");
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isNameAvailable, setIsNameAvailable] = useState(false);
  const [isSelectedBirthday, setIsSelectedBirthday] = useState(false);
  const { data, post } = useByeol(name ? { name } : undefined);
  const { data: isUser } = useIsUser();
  const { data: isByeol, mutate } = useIsByeol();

  const join = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      setIsClicked(true);
      const formData = new FormData(event.currentTarget);
      const postByeolDto = Object.fromEntries(
        formData.entries()
      ) as unknown as PostByeolDto;

      await post(postByeolDto);
      await mutate();
    },
    [post]
  );

  useEffect(() => {
    if (isByeol || !isUser) {
      setStep(-1);
    }
  }, [isByeol, isUser]);

  return (
    <form
      className="absolute top-0 h-full p-4 flex flex-col justify-between"
      onSubmit={join}
    >
      <div>
        <ByeolNameInput
          name={name}
          setName={setName}
          setIsNameAvailable={setIsNameAvailable}
        />
        <BirthdaySelect setIsSelectedBirthday={setIsSelectedBirthday} />
      </div>
      <ConfirmButton
        type={"submit"}
        colorType={"accept"}
        disabled={
          !!data || isClicked || !isNameAvailable || !isSelectedBirthday
        }
        isToggle={true}
      >
        자리 만들기!
      </ConfirmButton>
    </form>
  );
}

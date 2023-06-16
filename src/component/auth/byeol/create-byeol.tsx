"use client";

import ByeolNameInput from "@/app/component/auth/byeol/byeol-name.input";
import BirthdaySelect from "@/app/component/auth/byeol/birthday.select";
import React, { FormEvent, forwardRef, useCallback, useState } from "react";
import ConfirmButton from "@/app/component/ui/button/confirm/confirm.button";
import { usePostByeol } from "@/services/byeol/use.byeol";
import { PostByeolDto } from "@/services/byeol/dto/reuqest/post-byeol.dto";

/**
 * 별 생성 페이지
 * @constructor
 */
const CreateByeol = () => {
  const [name, setName] = useState<string | undefined>();
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isNameAvailable, setIsNameAvailable] = useState(false);
  const [isSelectedBirthday, setIsSelectedBirthday] = useState(false);
  const { trigger } = usePostByeol(name);

  const join = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      setIsClicked(true);
      const formData = new FormData(event.currentTarget);
      const postByeolDto = Object.fromEntries(
        formData.entries()
      ) as unknown as PostByeolDto;

      // 이미 별이 있는 유저가 만든다면 오류가 나지만, 그런 유저는 이 스텝까지 올 수 없기 때문에 무시한다.
      await trigger(postByeolDto);
    },
    [trigger]
  );

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
        disabled={isClicked || !isNameAvailable || !isSelectedBirthday}
        isToggle={true}
      >
        자리 만들기!
      </ConfirmButton>
    </form>
  );
};

export default forwardRef(CreateByeol);

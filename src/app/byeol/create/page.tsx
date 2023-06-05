"use client";

import { useRouter } from "next/navigation";
import ByeolNameInput from "@/app/component/byeol/byeol-name.input";
import BirthdaySelect from "@/app/component/byeol/birthday.select";
import React, { FormEvent, useCallback, useEffect, useState } from "react";
import { ZariError } from "@/services/common/fetcher";
import ConfirmButton from "@/app/component/ui/button/confirm/confirm.button";
import useByeol from "@/services/byeol/use.byeol";
import { PostByeolDto } from "@/services/byeol/dto/reuqest/post-byeol.dto";

/**
 * 별 생성 페이지
 * @constructor
 */
export default function CreatePage() {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isNameAvailable, setIsNameAvailable] = useState(false);
  const [isSelectedBirthday, setIsSelectedBirthday] = useState(false);
  const { post, error } = useByeol(name ? { name } : undefined);

  const join = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      setIsClicked(true);
      const formData = new FormData(event.currentTarget);
      const postByeolDto = Object.fromEntries(
        formData.entries()
      ) as unknown as PostByeolDto;

      await post(postByeolDto);
      router.replace(`/byeol/me`);
    },
    [post]
  );

  useEffect(() => {
    // 가입 실패
    if (error instanceof ZariError) {
      switch (error.statusCode) {
        case 400: // 이미 별이 있는 유저
          router.replace("/byeol/me");
          break;
        case 401: // 인증되지 않은 유저
          router.replace("/auth/sign-in");
          break;
        case 409: // 중복된 이름
          // TODO, 이름이 중복되었을 때 어떻게 처리할까? 이름이 중복 되었습니다. 토스트를 띄울까?
          break;
        default:
          // 이 케이스는 나와서는 안 됨
          console.error(error);
          throw error;
      }
    }
  }, [error]);

  return (
    <form className="h-full p-4 flex flex-col justify-between" onSubmit={join}>
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
}

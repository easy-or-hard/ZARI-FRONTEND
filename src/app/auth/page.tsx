"use client";

import { getOAuthUrlForProvider } from "@/services/byeol/api.byeol";
import { useRouter } from "next/navigation";
import { useIsByeol } from "@/services/auth/use.auth";

const openWindow = (provider: string) => {
  const width = 500;
  const height = 600;
  const left = window.screenLeft + window.innerWidth / 2 - width / 2;
  const top = window.screenTop + window.innerHeight / 2 - height / 2;

  window.open(
    getOAuthUrlForProvider(provider),
    "_blank",
    `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`
  );
};

export default function AuthPage() {
  const router = useRouter();
  const { data, isLoading, isValidating } = useIsByeol();

  if (data) {
    router.push("/byeol");
  }

  return (
    <div>
      <div className={"absolute top-20 left-0 right-0"}>
        <div className="text-1xl text-center">우리의 이야기</div>
        <div className="text-7xl font-bold text-center">ZARI</div>
      </div>
      <div className={"absolute p-4 bottom-0 w-full flex flex-col gap-4"}>
        <button
          type={"button"}
          className="border border-solid rounded-full p-4 text-center"
          onClick={() => (!isLoading || !isValidating) && openWindow("github")}
        >
          github
        </button>
        <button
          type={"button"}
          className="border border-solid rounded-full p-4 text-center"
          onClick={() => openWindow("github")}
        >
          github
        </button>
        <button
          type={"button"}
          className="border border-solid rounded-full p-4 text-center"
          onClick={() => openWindow("github")}
        >
          github
        </button>
      </div>
    </div>
  );
}

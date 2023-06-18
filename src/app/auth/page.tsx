"use client";

import { getOAuthUrlForProvider } from "@/services/byeol/api.byeol";
import { useRouter } from "next/navigation";
import { useIsByeol } from "@/services/auth/use.auth";
import styles from "./auth.module.css";
import KakaotalkIcon from "@/component/ui/icon/auth/kakaotalk";
import NaverIcon from "@/component/ui/icon/auth/naver";
import GoogleIcon from "@/component/ui/icon/auth/google";
import AppleIcon from "@/component/ui/icon/auth/apple";

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
    <div className={styles.wrap}>
      <div className={styles.wrapTitle}>
        <div className={styles.subTitle}>우리의 이야기</div>
        <div className={styles.title}>ZARI</div>
      </div>
      <div className={styles.wrapAuth}>
        <button
          type={"button"}
          className={styles.authButton}
          onClick={() => (!isLoading || !isValidating) && openWindow("github")}
        >
          <KakaotalkIcon />
          카카오톡
        </button>
        <button
          type={"button"}
          className={styles.authButton}
          onClick={() => openWindow("github")}
        >
          <NaverIcon />
          네이버
        </button>
        <button
          type={"button"}
          className={styles.authButton}
          onClick={() => openWindow("github")}
        >
          <GoogleIcon />
          Google
        </button>
        <button
          type={"button"}
          className={styles.authButton}
          onClick={() => openWindow("github")}
        >
          <AppleIcon />
          Apple
        </button>
      </div>
    </div>
  );
}

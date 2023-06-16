"use client";

import styles from "./main.module.css";
import Splash from "@/component/constellation/splash";
import { useIsByeol } from "@/services/auth/use.auth";
import { useRouter } from "next/navigation";

/**
 * @description 메인 페이지
 * @constructor
 */
export default function MainPage() {
  const router = useRouter();
  const { data } = useIsByeol();

  if (data === false) {
    router.push("/auth");
  }

  data &&
    setTimeout(() => {
      router.push("/byeol");
    }, 1000);

  return (
    <div className={styles.wrapMain}>
      <Splash />
      <div className={styles.title}>ZARI</div>
    </div>
  );
}

import styles from "./team-introduce.module.css";
import GithubIcon from "@/component/ui/icon/auth/github";
import BehanceIcon from "@/component/ui/icon/auth/behance";

export default function TeamIntroduce() {
  return (
    <div className={styles.wrapTeam}>
      <div className={styles.wrapTitle}>
        <div className={styles.subTitle}>team</div>
        <div className={styles.title}>AWAKE</div>
      </div>
      <ul className={styles.wrapMembers}>
        <li className={styles.wrapMember}>
          <div className={styles.wrapMemberInfo}>
            <div className={styles.teamName}>XIYO</div>
            <div className={styles.teamPosition}>developer</div>
          </div>
          <a href="https://github.com/XIYO" target={"_blank"}>
            <GithubIcon />
          </a>
        </li>
        <li className={styles.wrapMember}>
          <div className={styles.wrapMemberInfo}>
            <div className={styles.teamName}>CHI_MI</div>
            <div className={styles.teamPosition}>designer</div>
          </div>
          <a href="https://www.behance.net/Chi_mi" target={"_blank"}>
            <BehanceIcon />
          </a>
        </li>
      </ul>
    </div>
  );
}

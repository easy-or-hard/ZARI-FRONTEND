import styles from "./team-introduce.module.css";
import ChatIcon from "@/component/ui/icon/size24/chat";

export default function TeamIntroduce() {
  return (
    <div className={styles.wrapTeam}>
      <div className={styles.wrapTitle}>
        <div>team</div>
        <div>Easy or Hard</div>
      </div>
      <ul className={styles.wrapMembers}>
        <li className={styles.wrapMember}>
          <div className={styles.wrapMemberInfo}>
            <div className={styles.teamName}>XIYO</div>
            <div className={styles.teamPosition}>developer</div>
          </div>
          <ChatIcon />
        </li>
        <li className={styles.wrapMember}>
          <div className={styles.wrapMemberInfo}>
            <div className={styles.teamName}>BUTTER ROLL</div>
            <div className={styles.teamPosition}>designer</div>
          </div>
          <ChatIcon />
        </li>
        <li className={styles.wrapMember}>
          <div className={styles.wrapMemberInfo}>
            <div className={styles.teamName}>CHOGANGYEOL</div>
            <div className={styles.teamPosition}>developer</div>
          </div>
          <ChatIcon />
        </li>
      </ul>
    </div>
  );
}

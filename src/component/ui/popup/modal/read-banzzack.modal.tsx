import { useContext, useMemo } from "react";
import { BaseModalContext } from "@/component/ui/popup/modal/modal.provider";
import CloseButton from "@/component/ui/button/icon/close.button";
import ConfirmButton from "@/component/ui/button/confirm/confirm.button";
import { useBanzzack } from "@/services/banzzack/use.banzzack";
import styles from "./read-banzzack-modal.module.css";
import { usePathname, useRouter } from "next/navigation";
import { useMyByeol } from "@/services/byeol/use.byeol";
import { BanzzackTreeUniqueKey } from "@/services/banzzack/entities/banzzack.entity";

export type ReadBanzzackModalProps = {
  banzzackTreeUniqueKey: BanzzackTreeUniqueKey;
};

export default function ReadBanzzackModal({
  banzzackTreeUniqueKey,
}: ReadBanzzackModalProps) {
  const baseModalContext = useContext(BaseModalContext);
  if (!baseModalContext) {
    throw new Error("BaseModalContext is null");
  }
  const { closeModal } = useMemo(() => baseModalContext, [baseModalContext]);

  const router = useRouter();

  const pathName = usePathname();
  const lastSection = decodeURIComponent(pathName.split("/").pop() as string);

  const { data: myByeol } = useMyByeol();
  const { data } = useBanzzack(banzzackTreeUniqueKey);

  const handleAnswer = () => {
    alert(lastSection);
    if (!data) return;
    closeModal();
    router.push(`/byeol/${data.byeolName}`);
  };

  // TODO: 로딩 애니메이션 빠른 시일내로 구현하겠습니다!
  if (!data) return <>로딩 애니메이션 빠른 시일내로 구현하겠습니다!</>;
  return (
    <div className={styles.wrap}>
      <div className={styles.wrapTitle}>
        <div className={styles.title}>
          <span className={styles.byeolName}>{data.byeolName}</span> 의 반짝이
        </div>
        <CloseButton onClick={closeModal} />
      </div>
      <div className={styles.wrapContent}>
        <pre className={styles.content}>{data.content}</pre>
      </div>
      {/* TODO, 여기에서 컨트롤 하는 것 보다는 인자로 컨트롤 하는게 더 좋은듯 한데, 일딴 이렇게... 지켜보고 결정하자 */}
      {lastSection === myByeol?.name && (
        <ConfirmButton colorType={"accept"} onClick={handleAnswer}>
          나도 반짝이 붙이기
        </ConfirmButton>
      )}
    </div>
  );
}

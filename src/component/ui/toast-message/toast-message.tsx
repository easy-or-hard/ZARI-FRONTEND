import styles from "./toast.module.css";
import { forwardRef } from "react";

type Props = {
  children: React.ReactNode;
};

const ToastMessage = ({ children }: Props, ref: any) => {
  return (
    <div ref={ref} className={styles.toast}>
      {children}
    </div>
  );
};

export default forwardRef(ToastMessage);

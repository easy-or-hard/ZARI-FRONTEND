import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

/**
 * TODO, opacity 가 CSSTransition 과 겹치기 때문에 제거 해야하는데, 제거하면 opacity 100 의 딤이 나옴
 * @param children
 * @constructor
 */
export default function Dim({ children }: Props) {
  return (
    <div className="absolute top-0 w-full h-full bg-zari_default_black opacity-50">
      {children}
    </div>
  );
}

"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./carousel.module.css";
import LeftIcon from "@/component/ui/icon/arrow/left.icon";
import RightIcon from "@/component/ui/icon/arrow/right.icon";

type Props = {
  children: ReactNode;
  showItemCount: 1 | 3 | 5 | 7 | 9;
  setConstellationIAU: Dispatch<SetStateAction<string>>;
};

/**
 * 원래 여러곳에서 사용할 수있는 캐러셀 컴포넌트를 만들려고했으나,,,
 * 하다보니 요구사항이 공통 컴포넌트로 활용하기에 힘들게해서, 현재는 자리만들기에서만 사용하고있습니다.
 * @constructor
 */
export default function Carousel({
  children,
  showItemCount,
  setConstellationIAU,
}: Props) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [description, setDescription] = useState<{
    korName: string;
    date: string;
  }>({
    korName: "",
    date: "",
  });

  const findCenterItem = useCallback(() => {
    const slider = sliderRef.current as HTMLDivElement;

    const items = Array.from(slider.children);
    const centerPosition = slider.scrollLeft + slider.clientWidth / 2; // 슬라이더의 중앙 위치 계산
    const itemsTotalLength = slider.scrollWidth; // 전체 아이템들의 총 길이
    const itemSize = itemsTotalLength / items.length; // 각 아이템의 크기 계산

    const centerIndex = Math.floor(centerPosition / itemSize); // 중앙에 위치한 아이템의 인덱스 계산
    return items[centerIndex] as HTMLElement;
  }, []);

  const selectItem = useCallback(() => {
    const centerItem = findCenterItem();
    const slider = sliderRef.current as HTMLDivElement;

    const items = Array.from(slider.children) as HTMLElement[];

    if (centerItem) {
      // 형제 요소에 모두 'selected' 클래스를 제거
      items.forEach((item) => {
        item.classList.remove(styles.selected);
      });

      // 중앙 요소에 'selected' 클래스 추가
      centerItem.classList.add(styles.selected);
      setConstellationIAU(centerItem.dataset.name ?? "");
      setDescription({
        korName: centerItem.dataset.korName ?? "",
        date: centerItem.dataset.date ?? "",
      });
    }
  }, [findCenterItem, setConstellationIAU]);

  const handleScroll = useCallback(() => {
    if (scrollTimeoutRef.current !== null) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => selectItem(), 5);
  }, [selectItem, setConstellationIAU]);

  // 스크롤 감지 이벤트 붙이기
  useEffect(() => {
    const sliderElement = sliderRef.current;
    if (sliderElement) {
      sliderElement.addEventListener("scroll", handleScroll);

      return () => {
        sliderElement.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll]);

  const scrollMove = useCallback(
    (action: "prev" | "next") => {
      if (!sliderRef.current) return;
      const sliderRect = sliderRef.current.getBoundingClientRect();

      const sliderWidth = sliderRect.width;

      let scrollLeft;
      if (action === "prev") {
        scrollLeft = sliderRef.current.scrollLeft - sliderWidth / showItemCount;
      } else if (action === "next") {
        scrollLeft = sliderRef.current.scrollLeft + sliderWidth / showItemCount;
      }
      sliderRef.current.scrollTo({
        left: scrollLeft,
        behavior: "smooth", // 스크롤 애니메이션을 부드럽게 적용
      });
    },
    [showItemCount]
  );

  // 컴포넌트 최초 마운트시 별자리 설정
  useEffect(() => {
    selectItem();
  }, [selectItem]);

  const sliderStyle = {
    "--item-width": `${(1 / showItemCount) * 100}%`,
  } as React.CSSProperties;

  const emptyItem = () => {
    return Array.from({ length: showItemCount / 2 }).map((_, index) => (
      <div key={index} />
    ));
  };

  return (
    <>
      <div className={styles.wrapSlider}>
        <button
          type={"button"}
          className={`${styles.button}`}
          onClick={() => scrollMove("prev")}
        >
          <LeftIcon />
        </button>

        <div ref={sliderRef} className={styles.slider} style={sliderStyle}>
          {emptyItem()}
          {children}
          {emptyItem()}
        </div>

        <button
          type={"button"}
          className={`${styles.button}`}
          onClick={() => scrollMove("next")}
        >
          <RightIcon />
        </button>
      </div>
      {description && (
        <div className={styles.description}>
          <div className={styles.korName}>{description.korName}</div>
          <div className={styles.date}>{description.date}</div>
        </div>
      )}
    </>
  );
}

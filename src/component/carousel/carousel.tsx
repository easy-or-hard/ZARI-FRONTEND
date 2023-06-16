"use client";

import {
  Dispatch,
  forwardRef,
  ReactNode,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import styles from "./carousel.module.css";
import LeftIcon from "@/component/ui/icon/arrow/left.icon";
import RightIcon from "@/component/ui/icon/arrow/right.icon";

type Props = {
  children: ReactNode;
  showItemCount: 1 | 3 | 5 | 7 | 9;
  setConstellationIAU?: Dispatch<SetStateAction<string>>;
  showArrow?: boolean;
  isMouseDown?: boolean;
  setIsMouseDown: Dispatch<SetStateAction<boolean>>;
};

const Carousel = (
  {
    children,
    showItemCount,
    setConstellationIAU,
    showArrow = true,
    isMouseDown,
    setIsMouseDown,
  }: Props,
  sliderRef: any
) => {
  // const sliderRef = useRef<HTMLDivElement>(null);
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
  }, [sliderRef]);

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
      setConstellationIAU && setConstellationIAU(centerItem.dataset.name ?? "");

      setDescription({
        korName: centerItem.dataset.korName ?? "",
        date: centerItem.dataset.date ?? "",
      });
    }
  }, [findCenterItem, setConstellationIAU, sliderRef]);

  // 스크롤 감지 이벤트 붙이기
  useEffect(() => {
    const sliderElement = sliderRef.current;
    if (!sliderElement) return;
    const handleScroll = () => requestAnimationFrame(selectItem);

    sliderElement.addEventListener("scroll", handleScroll);
    return () => {
      sliderElement.removeEventListener("scroll", handleScroll);
    };
  }, [selectItem, sliderRef]);

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
    [showItemCount, sliderRef]
  );

  useEffect(() => {
    const sliderElement = sliderRef.current;

    // 외부에도 있는데, 내부에도 하나 더 만듬...
    // 외부는 스크롤 스냅 CSS 활성화용.
    // 내부는 마우스 드래그로 스크롤 이동시키기 위함.
    let isMouseDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const handleMouseDown = (e: MouseEvent) => {
      if (!sliderElement) return;

      isMouseDown = true;
      setIsMouseDown(isMouseDown);
      startX = e.pageX - sliderElement.offsetLeft;
      scrollLeft = sliderElement.scrollLeft;
      sliderElement.style.cursor = "grabbing";
      sliderElement.style.userSelect = "none";
    };

    const handleMouseUp = () => {
      if (!sliderElement) return;

      isMouseDown = false;
      setIsMouseDown(isMouseDown);
      sliderElement.style.cursor = "grab";
      sliderElement.style.removeProperty("user-select");
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMouseDown || !sliderElement) return;

      e.preventDefault();

      const x = e.pageX - sliderElement.offsetLeft;
      const walk = x - startX;
      sliderElement.scrollLeft = scrollLeft - walk;
    };

    if (sliderElement) {
      sliderElement.addEventListener("mousedown", handleMouseDown);
      sliderElement.addEventListener("mousemove", handleMouseMove);
      sliderElement.addEventListener("mouseup", handleMouseUp);
      sliderElement.addEventListener("mouseleave", handleMouseUp);

      return () => {
        sliderElement.removeEventListener("mousedown", handleMouseDown);
        sliderElement.removeEventListener("mousemove", handleMouseMove);
        sliderElement.removeEventListener("mouseup", handleMouseUp);
        sliderElement.removeEventListener("mouseleave", handleMouseUp);
      };
    }
  }, [setIsMouseDown, sliderRef]);

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
        {showArrow && (
          <button
            type={"button"}
            className={`${styles.button}`}
            onClick={() => scrollMove("prev")}
          >
            <LeftIcon />
          </button>
        )}

        <div
          ref={sliderRef}
          className={`${styles.slider} ${!isMouseDown && styles.sliderNoSnap}`}
          style={sliderStyle}
        >
          {emptyItem()}
          {children}
          {emptyItem()}
        </div>

        {showArrow && (
          <button
            type={"button"}
            className={`${styles.button}`}
            onClick={() => scrollMove("next")}
          >
            <RightIcon />
          </button>
        )}
      </div>
      {description && (
        <div className={styles.description}>
          <div className={styles.korName}>{description.korName}</div>
          <div className={styles.date}>{description.date}</div>
        </div>
      )}
    </>
  );
};

export default forwardRef(Carousel);

"use client";

import ConfirmButton from "@/app/component/ui/button/confirm/confirm.button";
import { useState } from "react";

/**
 * 버튼 컴포넌트 확인 페이지
 * @constructor
 */
export default function ButtonTestPage() {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <p>버튼 테스트</p>
      <hr />
      <h2>버튼(ConfirmButton 컴포넌트) ---------------</h2>
      <h3>수락 버튼</h3>
      <ConfirmButton colorType="accept">수락</ConfirmButton>
      <h3>취소 버튼</h3>
      <ConfirmButton colorType="cancel">취소</ConfirmButton>
      <h3>경고 버튼</h3>
      <ConfirmButton colorType="danger">위험</ConfirmButton>
      <h3>토글 버튼</h3>
      <ConfirmButton
        onClick={() => setClicked(!clicked)}
        disabled={clicked}
        colorType="danger"
        isToggle={true}
      >
        토글
      </ConfirmButton>
      <h3>일회성 수락 버튼</h3>
      <ConfirmButton
        onClick={() => setClicked(!clicked)}
        disabled={clicked}
        colorType="accept"
      >
        일회성 수락 {clicked.toString()}
      </ConfirmButton>
      <h3>초기화</h3>
      <ConfirmButton onClick={() => setClicked(false)} colorType="accept">
        초기화
      </ConfirmButton>
      <hr />
    </>
  );
}

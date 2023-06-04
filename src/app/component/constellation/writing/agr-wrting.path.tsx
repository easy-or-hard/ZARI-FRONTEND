"use client";

import { ConstellationWriterProps } from "@/app/component/constellation/map";
import WritingBanzzack from "@/app/component/banzzack/writing-banzzack";

export default function AqrWritingPath({ lockMap }: ConstellationWriterProps) {
  console.log("😎😎😎", lockMap.get(2));
  return (
    <>
      <defs>
        <radialGradient id="radial-gradient2" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#FFD700" />{" "}
          {/* 중앙 색상을 노란색으로 지정 */}
          <stop offset="1" stopColor="rgba(0, 0, 255, 0)" />{" "}
          {/* 테두리 색상을 투명 파란색으로 지정 */}
        </radialGradient>
      </defs>
      {lockMap.get(13) && <WritingBanzzack cx="257.9" cy="340.5" />}
      {lockMap.get(12) && <WritingBanzzack cx="161.3" cy="348.9" />}
      {lockMap.get(11) && <WritingBanzzack cx="340" cy="579.3" />}
      {lockMap.get(10) && <WritingBanzzack cx="267.5" cy="527.5" />}
      {lockMap.get(9) && <WritingBanzzack cx="210.1" cy="488.3" />}
      {lockMap.get(8) && <WritingBanzzack cx="124.5" cy="485.7" />}
      {lockMap.get(7) && <WritingBanzzack cx="65.7" cy="534.7" />}
      {lockMap.get(6) && <WritingBanzzack cx="20" cy="416.3" />}
      {lockMap.get(5) && <WritingBanzzack cx="54.5" cy="343.3" />}
      {lockMap.get(4) && <WritingBanzzack cx="75.7" cy="263.7" />}
      {lockMap.get(3) && <WritingBanzzack cx="144.1" cy="202.3" />}
      {lockMap.get(2) && <WritingBanzzack cx="184.7" cy="142.3" />}
      {lockMap.get(1) && <WritingBanzzack cx="220.5" cy="89.7" />}
    </>
  );
}

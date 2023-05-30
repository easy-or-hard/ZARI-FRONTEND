// TODO, 현재 반짝이를 읽음 플래그가 없어서 isRead 를 옵셔널로 했습니다. 반드시 BFF 플래그를 추가하고 수정하세요.
type Props = {
  cx: number | string;
  cy: number | string;
  isRead?: boolean;
};

export default function EffectBanzzack({ cx, cy, isRead = false }: Props) {
  const r = isRead ? 1.5 : 3;

  // svg 의 값이 string 이므로 number 로 변환
  // 효율을 위해서 ....
  cx = +cx;
  cy = +cy;
  return (
    <>
      <defs>
        <radialGradient id="radial-gradient" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#fff" /> {/* 중앙 색상을 밝게 지정 */}
          <stop offset="1" stopColor="rgba(255, 255, 255, 0)" />{" "}
          {/* 테두리 색상을 투명으로 지정 */}
        </radialGradient>
      </defs>
      <g
        className={
          "animate-pulse animate-infinite animate-duration-2000 animate-ease-in-out"
        }
      >
        <ellipse
          cx={cx}
          cy={cy}
          rx={r / 3}
          ry={r * 3}
          fill="url(#radial-gradient)"
        />
        <ellipse
          cx={cx}
          cy={cy}
          rx={r * 3}
          ry={r / 3}
          fill="url(#radial-gradient)"
        />
        <g transform={`rotate(-45 ${cx} ${cy})`}>
          <ellipse
            cx={cx}
            cy={cy}
            rx={r / 3}
            ry={r * 10}
            fill="url(#radial-gradient)"
          />
          <ellipse
            cx={cx}
            cy={cy}
            rx={r * 10}
            ry={r / 3}
            fill="url(#radial-gradient)"
          />
        </g>
      </g>
    </>
  );
}

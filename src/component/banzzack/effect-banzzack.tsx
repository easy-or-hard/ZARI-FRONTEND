// TODO, 현재 반짝이를 읽음 플래그가 없어서 isRead 를 옵셔널로 했습니다. 반드시 BFF 플래그를 추가하고 수정하세요.

type Props = {
  cx: number | string;
  cy: number | string;
  isRead?: boolean;
};

export default function EffectBanzzack({ cx, cy, isRead = false }: Props) {
  const r = isRead ? 1.5 : 2;

  // svg 의 값이 string 이므로 number 로 변환
  cx = +cx;
  cy = +cy;

  return (
    <>
      <defs>
        <radialGradient id="gradient" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#fff" /> {/* 중앙 색상을 밝게 지정 */}
          <stop offset="5" stopColor="rgba(255, 255, 255, 0)" />
          {/* 테두리 색상을 투명으로 지정 */}
        </radialGradient>
        <filter id="star-blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
        </filter>
      </defs>
      <g filter={"url(#star-blur)"}>
        <g>
          <ellipse cx={cx} cy={cy} rx={r * 3} ry={r * 5} />
          <ellipse cx={cx} cy={cy} rx={r * 5} ry={r * 3} />
        </g>
        <g transform={`rotate(-45 ${cx} ${cy})`}>
          <ellipse cx={cx} cy={cy} rx={r * 3} ry={r * 8} />
          <ellipse cx={cx} cy={cy} rx={r * 8} ry={r * 3} />
        </g>
      </g>
      <g fill="url(#gradient)">
        <g transform={`rotate(67.5 ${cx} ${cy})`}>
          <ellipse cx={cx} cy={cy} rx={r / 3} ry={r * 7} />
          <ellipse cx={cx} cy={cy} rx={r * 7} ry={r / 3} />
        </g>
        <g transform={`rotate(22.5 ${cx} ${cy})`}>
          <ellipse cx={cx} cy={cy} rx={r / 3} ry={r * 5} />
          <ellipse cx={cx} cy={cy} rx={r * 5} ry={r / 3} />
        </g>
        <g transform={`rotate(45 ${cx} ${cy})`}>
          <ellipse cx={cx} cy={cy} rx={r / 3} ry={r * 10} />
          <ellipse cx={cx} cy={cy} rx={r * 10} ry={r / 3} />
        </g>
        <g transform={`rotate(90 ${cx} ${cy})`}>
          <ellipse cx={cx} cy={cy} rx={r / 3} ry={r * 10} />
          <ellipse cx={cx} cy={cy} rx={r * 10} ry={r / 3} />
        </g>
      </g>
    </>
  );
}

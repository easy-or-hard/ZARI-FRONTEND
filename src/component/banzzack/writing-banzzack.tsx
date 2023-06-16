type Props = {
  cx: number | string;
  cy: number | string;
  isRead?: boolean;
};

export default function WritingBanzzack({ cx, cy, isRead = false }: Props) {
  const r = isRead ? 2 : 5;

  // svg 의 값이 string 이므로 number 로 변환
  cx = +cx;
  cy = +cy;
  return (
    <>
      <ellipse
        cx={cx}
        cy={cy}
        rx={r / 3}
        ry={r * 3}
        fill="url(#radial-gradient2)"
      />
      <ellipse
        cx={cx}
        cy={cy}
        rx={r * 3}
        ry={r / 3}
        fill="url(#radial-gradient2)"
      />
      <g transform={`rotate(-45 ${cx} ${cy})`}>
        <ellipse
          cx={cx}
          cy={cy}
          rx={r / 3}
          ry={r * 10}
          fill="url(#radial-gradient2)"
        />
        <ellipse
          cx={cx}
          cy={cy}
          rx={r * 10}
          ry={r / 3}
          fill="url(#radial-gradient2)"
        />
      </g>
    </>
  );
}

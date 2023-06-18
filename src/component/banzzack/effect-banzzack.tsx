type Props = {
  cx: number | string;
  cy: number | string;
  r?: number | string;
};

export default function EffectBanzzack({ cx, cy, r = 10 }: Props) {
  // svg 의 값이 string 이므로 number 로 변환
  cx = +cx;
  cy = +cy;
  r = +r;

  const largeRadius = r + 15;
  const mediumRadius = r + 10;
  const smallRadius = r + 5;
  const fixedRadius = 1.5;

  return (
    <>
      <defs>
        <radialGradient id="radial" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="white" stopOpacity={1} />
          <stop offset="100%" stopColor="white" stopOpacity={0} />
        </radialGradient>
        <filter id="myGradient" x="-20" y="-20" width="140" height="140">
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="5"
            result="blurred1"
          />
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation=".5"
            result="blurred2"
          />
          <feBlend in="blurred1" in2="blurred2" mode="normal" />
        </filter>
        <filter id="circleBlur" x="-20" y="-20" width="140" height="140">
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="2"
            result="blurred1"
          />
        </filter>
      </defs>
      <circle
        cx={cx}
        cy={cy}
        r={smallRadius}
        fill={"url(#radial)"}
        filter={"url(#circleBlur)"}
      />
      <g id="star_L">
        <g fill="url(#radial)" filter="url(#myGradient)">
          <ellipse cx={cx} cy={cy} rx={fixedRadius} ry={largeRadius} />
          <ellipse cx={cx} cy={cy} rx={largeRadius} ry={fixedRadius} />
        </g>
        <g
          fill="url(#radial)"
          transform={`rotate(45, ${cx}, ${cy})`}
          filter="url(#myGradient)"
        >
          <ellipse cx={cx} cy={cy} rx={fixedRadius} ry="25" />
          <ellipse cx={cx} cy={cy} rx="25" ry={fixedRadius} />
        </g>
        <g
          fill="url(#radial)"
          transform={`rotate(22.5, ${cx}, ${cy})`}
          filter="url(#myGradient)"
        >
          <g>
            <ellipse cx={cx} cy={cy} rx={fixedRadius} ry={mediumRadius} />
            <ellipse cx={cx} cy={cy} rx={mediumRadius} ry={fixedRadius} />
          </g>
        </g>
        <g
          fill="url(#radial)"
          transform={`rotate(67.5, ${cx}, ${cy})`}
          filter="url(#myGradient)"
        >
          <g>
            <ellipse cx={cx} cy={cy} rx={fixedRadius} ry={smallRadius} />
            <ellipse cx={cx} cy={cy} rx={smallRadius} ry={fixedRadius} />
          </g>
        </g>
      </g>
    </>
  );
}

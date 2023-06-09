type Props = {
  cx: number | string;
  cy: number | string;
};

export default function SpeakPath({ cx, cy }: Props) {
  // cx, cy를 숫자로 변환합니다.
  cx = +cx;
  cy = +cy;

  // cy 값을 2% 줄입니다.
  cy = cy - cy * 0.02;

  return (
    <svg
      x={cx - 11}
      y={cy - 20}
      width="22"
      height="14"
      viewBox="0 0 22 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="speakAnimation">
        <path
          d="M6.38917 0C3.40648 0 0.988525 2.41795 0.988525 5.40064C0.988525 8.38334 3.40648 10.8013 6.38917 10.8013H7.5415C8.08281 10.8013 8.60101 11.0207 8.97773 11.4094L10.4815 12.9612C10.7516 13.2913 11.2563 13.2913 11.5264 12.9612L13.0302 11.4094C13.4069 11.0207 13.9251 10.8013 14.4665 10.8013H15.6108C18.5935 10.8013 21.0114 8.38334 21.0114 5.40064C21.0114 2.41795 18.5935 0 15.6108 0H6.38917Z"
          fill="white"
        />
        <circle
          className="speakCircle1"
          cx="5.60138"
          cy="5.40064"
          r="1.35016"
          fill="#5C5C5C"
        />
        <circle
          className="speakCircle2"
          cx="11.002"
          cy="5.40064"
          r="1.35016"
          fill="#5C5C5C"
        />
        <circle
          className="speakCircle3"
          cx="16.4027"
          cy="5.40064"
          r="1.35016"
          fill="#5C5C5C"
        />
      </g>
    </svg>
  );
}

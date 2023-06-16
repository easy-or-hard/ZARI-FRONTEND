import EffectBanzzack from "@/component/banzzack/effect-banzzack";

export default function Splash() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 50 320 435"
      filter={`url(#blur)`}
    >
      <filter
        id="blur"
        x="-50%"
        y="-50%"
        width="200%"
        height="200%"
        filterUnits="userSpaceOnUse"
      >
        <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
        <feBlend mode="screen" in2="SourceGraphic" />
      </filter>
      <g id="star">
        <circle id="_4" data-name="4" cx="181" cy="402" r="2" fill="#fff" />
        <circle id="_3" data-name="3" cx="206" cy="277" r="2" fill="#fff" />
        <circle id="_2" data-name="2" cx="122" cy="169" r="3" fill="#fff" />
        <circle id="_1" data-name="1" cx="49" cy="79" r="2" fill="#fff" />
        <EffectBanzzack cx={49} cy={79} />
      </g>
      <g id="line">
        <line x1="60.57" y1="81.9" x2="122.08" y2="92.65" stroke="#fff" />
        <line x1="183.47" y1="104.18" x2="262.4" y2="131.86" stroke="#fff" />
        <line x1="268.53" y1="152.5" x2="195.51" y2="196.4" stroke="#fff" />
        <line x1="166.91" y1="196.4" x2="131.36" y2="172.37" stroke="#fff" />
        <line x1="112.81" y1="172.37" x2="43.3" y2="200.51" stroke="#fff" />
        <line x1="34.9" y1="223.05" x2="102.22" y2="295.62" stroke="#fff" />
        <line x1="131.36" y1="295.62" x2="192.75" y2="281.17" stroke="#fff" />
        <line x1="215.62" y1="284.18" x2="268.53" y2="340.8" stroke="#fff" />
        <line x1="131.36" y1="310.81" x2="245.57" y2="348.31" stroke="#fff" />
        <line x1="262.4" y1="361.51" x2="191.74" y2="395.8" stroke="#fff" />
        <line x1="175.99" y1="411.52" x2="162.83" y2="468.57" stroke="#fff" />
      </g>
      <g id="text">
        <text transform="translate(125.96 98.77)" fill="#fff" fontSize=".7rem">
          하나씩 이어진
        </text>
        <text transform="translate(251.32 144.5)" fill="#fff" fontSize=".7rem">
          별자리 처럼
        </text>
        <text transform="translate(172.42 205.39)" fill="#fff" fontSize=".7rem">
          나와
        </text>
        <text transform="translate(20.22 215.81)" fill="#fff" fontSize=".7rem">
          수많은
        </text>
        <text transform="translate(107.75 306.99)" fill="#fff" fontSize=".7rem">
          네가
        </text>
        <text transform="translate(253.29 354.3)" fill="#fff" fontSize=".7rem">
          이어가는
        </text>
        <text transform="translate(130 485)" fill="#fff" fontSize=".7rem">
          우리의 이야기
        </text>
      </g>
    </svg>
  );
}

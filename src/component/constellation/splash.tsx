import EffectBanzzack from "@/component/banzzack/effect-banzzack";

export default function Splash() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 340 521.81"
      width={340}
      height={521.81}
      preserveAspectRatio="xMidYMid meet"
    >
      <g id="star">
        <circle cx={64.43} cy={27.69} r={5} stroke="#fff" />
        <EffectBanzzack cx={64.43} cy={27.69} />

        <circle cx={156.05} cy={147.54} r={5} stroke="#fff" />
        <EffectBanzzack cx={156.05} cy={147.54} r={5} />

        <circle cx={250.16} cy={265.75} r={5} stroke="#fff" />
        {/* <EffectBanzzack cx={250.16} cy={265.75} r={5} />*/}

        <circle cx={215.99} cy={369.33} r={5} stroke="#fff" />
        <EffectBanzzack cx={215.99} cy={369.33} r={5} />
      </g>
      <g id="line">
        <line
          x1="209.07"
          y1="380.78"
          x2="171.02"
          y2="442.22"
          fill="none"
          opacity=".5"
          stroke="#fff"
        />
        <line
          x1="272.89"
          y1="341.32"
          x2="226.93"
          y2="363.96"
          fill="none"
          opacity=".5"
          stroke="#fff"
        />
        <line
          x1="255.32"
          y1="278.59"
          x2="272.89"
          y2="316.01"
          fill="none"
          opacity=".5"
          stroke="#fff"
        />
        <line
          x1="168.62"
          y1="295.18"
          x2="236.5"
          y2="269.09"
          fill="none"
          opacity=".5"
          stroke="#fff"
        />
        <line
          x1="67.32"
          y1="226.91"
          x2="131.09"
          y2="291.08"
          fill="none"
          opacity=".5"
          stroke="#fff"
        />
        <line
          x1="142.02"
          y1="154.71"
          x2="67.32"
          y2="207.09"
          fill="none"
          opacity=".5"
          stroke="#fff"
        />
        <line
          x1="193.76"
          y1="188.28"
          x2="167.62"
          y2="155.71"
          fill="none"
          opacity=".5"
          stroke="#fff"
        />
        <line
          x1="292.75"
          y1="127.55"
          x2="231.57"
          y2="189.86"
          fill="none"
          opacity=".5"
          stroke="#fff"
        />
        <line
          x1="225.85"
          y1="52.69"
          x2="292.75"
          y2="107.65"
          fill="none"
          opacity=".5"
          stroke="#fff"
        />
        <line
          x1="80.35"
          y1="32.19"
          x2="146.01"
          y2="51.94"
          fill="none"
          opacity=".5"
          stroke="#fff"
        />
        <line
          x1="168.62"
          y1="304.53"
          x2="252.16"
          y2="327.13"
          fill="none"
          opacity=".5"
          stroke="#fff"
        />
      </g>
      <g id="text">
        <text transform="translate(151.01 56.34)" fill="#fff" fontSize="12.8">
          <tspan x="0" y="0">
            서로가 연결된
          </tspan>
        </text>
        <text transform="translate(278.78 122.08)" fill="#fff" fontSize="12.8">
          <tspan x="0" y="0">
            하늘의
          </tspan>
        </text>
        <text transform="translate(189.89 203.03)" fill="#fff" fontSize="12.8">
          <tspan x="0" y="0">
            별들처럼
          </tspan>
        </text>
        <text transform="translate(40.7 221.69)" fill="#fff" fontSize="12.8">
          <tspan x="0" y="0">
            나와 네가
          </tspan>
        </text>
        <text transform="translate(132.42 304.9)" fill="#fff" fontSize="12.8">
          <tspan x="0" y="0">
            하나씩
          </tspan>
        </text>
        <text transform="translate(256.24 333.75)" fill="#fff" fontSize="12.8">
          <tspan x="0" y="0">
            이어가는
          </tspan>
        </text>
        <text transform="translate(130.59 460.85)" fill="#fff" fontSize="14.4">
          <tspan x="0" y="0">
            우리의 이야기
          </tspan>
        </text>
        <text transform="translate(101.26 509.33)" fill="#fff" fontSize="48">
          Z A R I
        </text>
      </g>
    </svg>
  );
}

import EffectBanzzack from "@/component/banzzack/effect-banzzack";

export default function EmptyPage() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 500 500"
      preserveAspectRatio="none"
    >
      <EffectBanzzack cx={100} cy={100} />
    </svg>
  );
}

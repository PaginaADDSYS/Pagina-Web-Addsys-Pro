export default function FenixHeroWaves() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[420px] overflow-hidden"
    >
      <svg
        viewBox="0 0 1440 240"
        preserveAspectRatio="none"
        className="absolute bottom-[50px] left-0 h-[240px] w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-120 90C180 5 390 5 650 90C900 170 1120 170 1560 50"
          stroke="rgba(14,165,233,0.16)"
          strokeWidth="50"
        />

        <path
          d="M-120 125C140 45 370 25 620 110C880 195 1150 180 1560 115"
          stroke="rgba(56,189,248,0.12)"
          strokeWidth="45"
        />

        <path
          d="M-120 165C220 75 430 50 690 145C940 230 1180 210 1560 150"
          stroke="rgba(14,116,144,0.08)"
          strokeWidth="40"
        />
      </svg>
    </div>
  );
}

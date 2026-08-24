"use client";

const whatsappNumber = "56968785641";

const whatsappMessage = encodeURIComponent(
  "Hola, quiero hablar de mi infraestructura sanitaria",
);

const nodes = [
  { x: 8, y: 62, delay: "0s" },
  { x: 22, y: 43, delay: "0.4s" },
  { x: 38, y: 55, delay: "0.8s" },
  { x: 54, y: 30, delay: "1.2s" },
  { x: 70, y: 45, delay: "1.6s" },
  { x: 86, y: 24, delay: "2s" },
];

export default function AddsysHomeHero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-white"
    >
      {/* =========================================================
          BACKGROUND — ADDSYS TECHNICAL LANGUAGE
          ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Base atmospheric gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(14,165,233,0.10),transparent_32%),radial-gradient(circle_at_85%_70%,rgba(29,114,255,0.08),transparent_30%)]" />

        {/* Technical grid */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.18]"
          viewBox="0 0 1600 900"
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            <pattern
              id="addsys-grid"
              width="64"
              height="64"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M64 0H0V64"
                stroke="#0B5FFF"
                strokeWidth="0.6"
              />
            </pattern>

            <linearGradient
              id="addsys-fade"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
            >
              <stop offset="0" stopColor="#0B5FFF" stopOpacity="0.35" />
              <stop offset="1" stopColor="#0B5FFF" stopOpacity="0" />
            </linearGradient>
          </defs>

          <rect width="1600" height="900" fill="url(#addsys-grid)" />

          <path
            d="M0 720 C280 610 420 790 690 670 C930 560 1090 720 1600 520"
            stroke="url(#addsys-fade)"
            strokeWidth="2"
          />

          <path
            d="M0 760 C280 650 440 820 720 710 C980 610 1180 760 1600 570"
            stroke="#8EC5FF"
            strokeOpacity="0.16"
            strokeWidth="1"
          />

          <path
            d="M0 800 C280 700 470 850 750 750 C1030 650 1240 800 1600 620"
            stroke="#1D72FF"
            strokeOpacity="0.10"
            strokeWidth="1"
          />
        </svg>

        {/* Telemetry network */}
        <svg
          className="absolute right-[-8%] top-[5%] h-[70%] w-[65%] opacity-[0.55]"
          viewBox="0 0 900 620"
          fill="none"
        >
          <defs>
            <linearGradient
              id="network-line"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
            >
              <stop offset="0" stopColor="#0B5FFF" stopOpacity="0" />
              <stop offset="0.5" stopColor="#0B5FFF" stopOpacity="0.45" />
              <stop offset="1" stopColor="#8EC5FF" stopOpacity="0.08" />
            </linearGradient>
          </defs>

          <path
            d="M70 410 L205 300 L350 365 L480 205 L625 275 L790 115"
            stroke="url(#network-line)"
            strokeWidth="1.5"
          />

          <path
            d="M205 300 L260 120 L480 205"
            stroke="url(#network-line)"
            strokeWidth="1"
          />

          <path
            d="M350 365 L525 480 L625 275"
            stroke="url(#network-line)"
            strokeWidth="1"
          />

          <path
            d="M525 480 L720 420 L790 115"
            stroke="url(#network-line)"
            strokeWidth="1"
          />

          {nodes.map((node, index) => (
            <g
              key={index}
              style={{
                transformOrigin: `${node.x * 10}% ${node.y * 10}%`,
              }}
              className="animate-pulse"
            >
              <circle
                cx={node.x * 9}
                cy={node.y * 6.2}
                r="5"
                fill="#0B5FFF"
                fillOpacity="0.75"
              />

              <circle
                cx={node.x * 9}
                cy={node.y * 6.2}
                r="11"
                stroke="#0B5FFF"
                strokeOpacity="0.18"
              />

              <circle
                cx={node.x * 9}
                cy={node.y * 6.2}
                r="18"
                stroke="#8EC5FF"
                strokeOpacity="0.10"
              />
            </g>
          ))}
        </svg>

        {/* Hexagonal geometry */}
        <svg
          className="absolute bottom-[-15%] right-[-5%] h-[55%] w-[45%] opacity-[0.12]"
          viewBox="0 0 700 500"
          fill="none"
        >
          <path
            d="M130 70L185 38L240 70V134L185 166L130 134V70Z"
            stroke="#0B5FFF"
          />
          <path
            d="M240 134L295 102L350 134V198L295 230L240 198V134Z"
            stroke="#0B5FFF"
          />
          <path
            d="M350 70L405 38L460 70V134L405 166L350 134V70Z"
            stroke="#0B5FFF"
          />
          <path
            d="M460 134L515 102L570 134V198L515 230L460 198V134Z"
            stroke="#0B5FFF"
          />
        </svg>

        {/* Soft white fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/20" />
      </div>

      {/* =========================================================
          CONTENT
          ========================================================= */}

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 sm:pt-20 md:pb-28 md:pt-28 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT */}
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-medium text-sky-800 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-sky-500" />
              Ingeniería sanitaria · Tecnología · Ejecución
            </div>

            {/* Main heading */}
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-slate-950 sm:text-5xl md:text-6xl lg:text-[4.4rem]">
              Ingeniería que conecta
              <span className="block text-sky-600">
                agua, infraestructura
              </span>
              y tecnología.
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              Diseñamos y ejecutamos soluciones sanitarias para proyectos
              domiciliarios, urbanos e industriales, integrando experiencia
              técnica, terreno y nuevas tecnologías.
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-sky-600 px-6 py-3.5 font-medium text-white shadow-lg shadow-sky-600/20 transition hover:-translate-y-0.5 hover:bg-sky-700"
              >
                Conversemos
              </a>

              <a
                href="#proyectos"
                className="rounded-2xl border border-slate-300 bg-white/80 px-6 py-3.5 font-medium text-slate-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
              >
                Ver proyectos
              </a>
            </div>

            {/* Key facts */}
            <div className="mt-12 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="border-l-2 border-sky-500 pl-4">
                <div className="text-2xl font-semibold tracking-tight text-slate-900">
                  8 años
                </div>
                <div className="mt-1 text-sm text-slate-500">
                  de experiencia
                </div>
              </div>

              <div className="border-l-2 border-sky-300 pl-4">
                <div className="text-2xl font-semibold tracking-tight text-slate-900">
                  Nacional
                </div>
                <div className="mt-1 text-sm text-slate-500">
                  cobertura
                </div>
              </div>

              <div className="border-l-2 border-sky-200 pl-4">
                <div className="text-2xl font-semibold tracking-tight text-slate-900">
                  Sanitaria
                </div>
                <div className="mt-1 text-sm text-slate-500">
                  ingeniería especializada
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — TECHNICAL VISUAL */}
          <div className="relative hidden min-h-[500px] lg:block">
            <div className="absolute inset-8 rounded-[3rem] border border-sky-100 bg-white/40 backdrop-blur-[2px]" />

            <div className="absolute inset-16 rounded-[2.5rem] border border-slate-200/70 bg-white/50 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm" />

            <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-200/60 bg-white/60 shadow-[0_20px_70px_rgba(14,165,233,0.12)] backdrop-blur-sm">
              <div className="absolute inset-8 rounded-full border border-sky-100" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xs font-medium uppercase tracking-[0.25em] text-sky-600">
                    ADDSYS
                  </div>
                  <div className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
                    Ingeniería
                  </div>
                  <div className="mt-1 text-sm text-slate-500">
                    que conecta
                  </div>
                </div>
              </div>
            </div>

            {/* Orbit lines */}
            <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-200/40" />
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200/60" />

            {/* Floating technical labels */}
            <div className="absolute left-6 top-20 rounded-xl border border-slate-200 bg-white/85 px-4 py-3 shadow-sm backdrop-blur">
              <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
                Sistema
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-800">
                Agua potable
              </div>
            </div>

            <div className="absolute right-4 top-36 rounded-xl border border-slate-200 bg-white/85 px-4 py-3 shadow-sm backdrop-blur">
              <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
                Infraestructura
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-800">
                Agua servida
              </div>
            </div>

            <div className="absolute bottom-24 left-16 rounded-xl border border-slate-200 bg-white/85 px-4 py-3 shadow-sm backdrop-blur">
              <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
                Tecnología
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-800">
                Telemetría
              </div>
            </div>

            <div className="absolute bottom-10 right-12 rounded-xl border border-slate-200 bg-white/85 px-4 py-3 shadow-sm backdrop-blur">
              <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
                Ejecución
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-800">
                Terreno
              </div>
            </div>
          </div>
        </div>

        {/* Bottom transition */}
        <div className="mt-16 flex items-center gap-4 md:mt-20">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-sky-200 to-transparent" />

          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
            ADDSYS
          </div>

          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-sky-200 to-transparent" />
        </div>
      </div>
    </section>
  );
}
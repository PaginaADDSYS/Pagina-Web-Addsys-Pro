import { publicaciones } from "@/data/actualidad";

import Link from "next/link";

function InsightsNetwork() {
  return (
    <svg
      viewBox="0 0 900 520"
      className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-[270px]
                  z-20
                  h-[390px]
                  w-[145%]
                  -translate-x-1/2
                  opacity-75

                  md:left-auto
                  md:right-[-15%]
                  md:top-[-2%]
                  md:h-[500px]
                  md:w-[72%] 
                  md:translate-x-0
                  md:opacity-60

                  lg:h-[610px]
                  lg:w-[70%]
"
    >
      {" "}
      <g fill="none" stroke="#0ea5e9" strokeWidth="1.4" opacity="0.72">
        {" "}
        <path d="M40 170 L105 110 L195 125 L230 185 L140 220 Z" />{" "}
        <path d="M105 110 L140 220" />{" "}
        <path d="M340 80 L430 45 L515 55 L490 145 L380 155 Z" />{" "}
        <path d="M430 45 L380 155" /> <path d="M515 55 L490 145" />{" "}
        <path d="M545 155 L625 120 L700 160 L665 235 L585 220 Z" />{" "}
        <path d="M780 95 L870 105 L900 190 L825 215 L760 170 Z" />{" "}
        <path d="M330 265 L400 235 L465 255 L450 325 L350 330 Z" />{" "}
        <path d="M400 235 L350 330" />{" "}
        <path d="M535 345 L600 290 L675 315 L690 410 L605 445 Z" />{" "}
        <path d="M600 290 L605 445" />{" "}
        <path d="M720 330 L790 285 L850 325 L820 395 L750 420 Z" />{" "}
        <path d="M195 125 L380 155" /> <path d="M490 145 L585 220" />{" "}
        <path d="M625 120 L760 170" /> <path d="M465 255 L585 220" />{" "}
        <path d="M450 325 L535 345" /> <path d="M690 410 L750 420" />{" "}
      </g>{" "}
      {/* Nodos */}{" "}
      <g fill="white" stroke="#0ea5e9" strokeWidth="2">
        {" "}
        {[
          [40, 170],
          [105, 110],
          [195, 125],
          [230, 185],
          [140, 220],
          [340, 80],
          [430, 45],
          [515, 55],
          [490, 145],
          [380, 155],
          [545, 155],
          [625, 120],
          [700, 160],
          [665, 235],
          [585, 220],
          [780, 95],
          [870, 105],
          [825, 215],
          [760, 170],
          [330, 265],
          [400, 235],
          [465, 255],
          [450, 325],
          [350, 330],
          [535, 345],
          [600, 290],
          [675, 315],
          [690, 410],
          [605, 445],
          [720, 330],
          [790, 285],
          [850, 325],
          [820, 395],
          [750, 420],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={i % 5 === 0 ? 7 : 3.5} />
        ))}{" "}
      </g>{" "}
      {/* Puntos centrales */}{" "}
      <g fill="#0ea5e9">
        {" "}
        {[
          [40, 170],
          [195, 125],
          [230, 185],
          [430, 45],
          [515, 55],
          [490, 145],
          [625, 120],
          [700, 160],
          [870, 105],
          [465, 255],
          [600, 290],
          [675, 315],
          [690, 410],
          [790, 285],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="2.5" />
        ))}{" "}
      </g>{" "}
    </svg>
  );
}

function InsightsWaves() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-[80px] z-10 h-[360px] overflow-hidden"
      aria-hidden="true"
    >
      <svg
        viewBox="0 -60 1440 440"
        preserveAspectRatio="none"
        className="absolute bottom-0 h-full w-full"
      >
        {/* Glow amplio — Wave 1 */}
        <path
          d="M0 150 C180 280 360 285 540 220 C760 140 880 105 1080 125 C1220 140 1330 155 1440 145"
          fill="none"
          stroke="#7dd3fc"
          strokeWidth="24"
          opacity="0.16"
          filter="blur(14px)"
        />

        {/* Wave 1 */}
        <path
          d="M0 150 C180 280 360 285 540 220 C760 140 880 105 1080 125 C1220 140 1330 155 1440 145 L1440 230 C1280 215 1160 200 1030 195 C850 190 750 235 570 285 C360 345 160 330 0 220 Z"
          fill="#F3FAFE"
          opacity="0.97"
        />

        <path
          d="M0 150 C180 280 360 285 540 220 C760 140 880 105 1080 125 C1220 140 1330 155 1440 145"
          fill="none"
          stroke="#bae6fd"
          strokeWidth="7"
        />

        {/* Glow — Wave 2 */}
        <path
          d="M0 225 C190 325 380 340 600 300 C800 265 930 200 1120 210 C1260 220 1350 245 1440 230"
          fill="none"
          stroke="#bae6fd"
          strokeWidth="20"
          opacity="0.11"
          filter="blur(12px)"
        />

        {/* Wave 2 */}
        <path
          d="M0 225 C190 325 380 340 600 300 C800 265 930 200 1120 210 C1260 220 1350 245 1440 230 L1440 300 C1280 285 1160 270 1030 285 C850 305 750 355 560 365 C350 380 150 350 0 285 Z"
          fill="#F5FBFF"
          opacity="0.98"
        />

        <path
          d="M0 225 C190 325 380 340 600 300 C800 265 930 200 1120 210 C1260 220 1350 245 1440 230"
          fill="none"
          stroke="#e0f2fe"
          strokeWidth="5"
        />

        {/* Glow — Wave 3 */}
        <path
          d="M0 300 C220 365 390 380 590 350 C820 315 950 275 1140 290 C1280 300 1370 325 1440 315"
          fill="none"
          stroke="#dbeafe"
          strokeWidth="17"
          opacity="0.07"
          filter="blur(11px)"
        />

        {/* Wave 3 */}
        <path
          d="M0 300 C220 365 390 380 590 350 C820 315 950 275 1140 290 C1280 300 1370 325 1440 315 L1440 360 L0 360 Z"
          fill="#F8FCFF"
          opacity="0.96"
        />

        <path
          d="M0 300 C220 365 390 380 590 350 C820 315 950 275 1140 290 C1280 300 1370 325 1440 315"
          fill="none"
          stroke="#dbeafe"
          strokeWidth="4"
          opacity="0.95"
        />
      </svg>
    </div>
  );
}

export default function ADDSYSInsights() {
  const destacada = publicaciones.find((p) => p.destacada);

  if (!destacada) return null;

  return (
    <section
      id="insights"
      className="relative scroll-mt-16 overflow-hidden bg-[radial-gradient(circle_at_18%_20%,_rgba(14,165,233,0.10),_transparent_32%),radial-gradient(circle_at_82%_15%,_rgba(56,189,248,0.08),_transparent_30%)] bg-white"
    >
      {/* HERO */}
      <div className="relative min-h-[680px] overflow-hidden">
        {/* Glow tecnológico */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,_rgba(14,165,233,0.10),_transparent_32%),radial-gradient(circle_at_88%_12%,_rgba(56,189,248,0.08),_transparent_30%)]" />

        {/* Glow principal */}
        <div className="pointer-events-none absolute right-[12%] top-[18%] h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />

        {/* Red IoT */}
        <InsightsNetwork />

        {/* Contenido */}
        <div className=" relative z-30 mx-auto flex min-h-[680px] max-w-7xl items-start px-6 pt-16 pb-64 lg:pt-20 lg:pb-60 ">
          {" "}
          <div className="max-w-[570px]">
            {" "}
            <div className="text-2xl font-semibold tracking-[0.08em] text-sky-700 md:text-3xl">
              {" "}
              ADDSYS Insights{" "}
            </div>{" "}
            <h1 className=" mt-5 max-w-[560px] text-4xl font-bold leading-[1.08] tracking-tight text-slate-700 md:text-5xl lg:text-[58px] ">
              {" "}
              Ingeniería sanitaria <br /> impulsada por datos.{" "}
            </h1>{" "}
            <p className=" mt-7 max-w-[500px] text-base leading-7 text-slate-600 md:text-lg ">
              {" "}
              Diseñamos soluciones que integran operación, telemetría,
              automatización e inteligencia para optimizar la infraestructura
              sanitaria.{" "}
            </p>{" "}
            <div className="mt-9 flex flex-wrap items-center gap-7">
              {" "}
              <a
                href="#insight-destacado"
                className=" rounded-2xl bg-sky-600 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-sky-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-xl "
              >
                {" "}
                Explorar Insights{" "}
              </a>{" "}
              <a
                href="#inicio"
                className=" group inline-flex items-center gap-2 text-base font-semibold text-sky-700 transition hover:text-sky-900 "
              >
                {" "}
                Conocer ADDSYS{" "}
                <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1">
                  {" "}
                  →{" "}
                </span>{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </div>

        {/* Waves */}
        <InsightsWaves />
      </div>

      {/* PUBLICACIÓN DESTACADA */}
      <div
        id="insight-destacado"
        className="relative z-20 mx-auto max-w-7xl px-6 pb-16 pt-6 md:pt-21"
      >
        <div className="mb-5 text-center">
          <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-sky-700">
            ADDSYS INSIGHTS
          </span>

          <h3 className="mt-2 text-2xl font-bold text-slate-800 md:text-4xl">
            Ingeniería que comparte conocimiento
          </h3>

          <p className="mx-auto mt-2 max-w-2xl text-slate-600">
            Innovación, tecnología, infraestructura y experiencias reales
            obtenidas en nuestros proyectos.
          </p>
        </div>

        <article className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.10)]">
          <div className="grid lg:grid-cols-2">
            {/* Imagen */}
            <div className="relative min-h-[380px] overflow-hidden lg:min-h-[450px]">
              <img
                src="/Insights/hero-insight.png"
                alt={destacada.titulo}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-900/15 to-transparent" />

              <div className="absolute left-6 top-6">
                <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-semibold tracking-wide text-sky-700 shadow-lg backdrop-blur">
                  ACTUALIZADO ESTA SEMANA
                </span>
              </div>
            </div>

            {/* Contenido */}
            <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
              <span className="inline-flex w-fit rounded-full bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
                {destacada.categoria}
              </span>

              <h4 className="mt-5 text-3xl font-bold leading-tight text-slate-800 md:text-4xl">
                {destacada.titulo}
              </h4>

              <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">
                {destacada.resumen}
              </p>

              <div className="mt-7 flex flex-wrap gap-5 text-sm text-slate-500">
                <span>📅 {destacada.fecha}</span>
                <span>⏱ {destacada.tiempoLectura}</span>
              </div>

              <Link
                href={`/insights/${destacada.id}`}
                className="mt-7 inline-flex w-fit items-center rounded-2xl bg-slate-900 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-sky-700 hover:shadow-xl"
              >
                Descubrir →
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

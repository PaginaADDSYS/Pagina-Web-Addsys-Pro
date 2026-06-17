import { publicaciones } from "@/data/actualidad";

export default function ADDSYSInsights() {
  const destacada = publicaciones.find((p) => p.destacada);

  if (!destacada) return null;

  return (
    <section
      id="insights"
      className="py-24 bg-gradient-to-b from-slate-50 via-white to-sky-50 scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Encabezado */}

        <div className="text-center mb-16">
          <span
            className="
inline-flex
items-center
rounded-full
bg-sky-100
px-5
py-2
text-sm
font-bold
tracking-[0.25em]
text-sky-700
"
          >
            ADDSYS INSIGHTS
          </span>

          <h2 className="mt-2 text-4xl md:text-6xl font-extrabold text-slate-900">
            Ingeniería que comparte conocimiento
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-xl leading-relaxed text-slate-600">
            Cada semana publicamos innovación, tecnología, infraestructura,
            consejos técnicos y experiencias reales obtenidas en nuestros
            proyectos.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="h-1 w-24 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400"></div>
          </div>
        </div>

        {/* Tarjeta principal */}

        <div
          className="overflow-hidden rounded-[32px] bg-white border border-slate-200 shadow-[0_30px_70px_rgba(15,23,42,0.12)] hover:-translate-y-2
          hover:shadow-[0_40px_90px_rgba(15,23,42,0.18)] transition-all duration-500"
        >
          <div className="grid lg:grid-cols-2">
            {/* Imagen */}

            <div className="relative h-[500px] overflow-hidden">
              <img
                src="/insights/hero-insight.png"
                alt={destacada.titulo}
                className="absolute inset-0 w-full h-full object-cover scale-110 transition-transform duration-[9000ms] hover:scale-110"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/65 via-slate-900/35 to-transparent"></div>

              {/* Etiqueta */}

              <div className="absolute top-6 left-6">
                <div className="rounded-full bg-white/90 backdrop-blur-md px-4 py-2 shadow-lg">
                  <span className="text-xs font-bold tracking-widest text-sky-700">
                    ● ACTUALIZADO ESTA SEMANA
                  </span>
                </div>
              </div>
            </div>

            {/* Contenido */}

            <div className="flex flex-col justify-center p-10 lg:p-14">
              <span className="inline-block w-fit rounded-full bg-sky-100 text-sky-700 px-4 py-1 text-sm font-semibold">
                {destacada.categoria}
              </span>

              <h3 className="mt-5 text-4xl font-bold text-slate-900 leading-tight">
                {destacada.titulo}
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                {destacada.resumen}
              </p>

              <div className="mt-8 flex items-center gap-6 text-sm text-slate-500">
                <span>📅 {destacada.fecha}</span>

                <span>⏱ {destacada.tiempoLectura}</span>
              </div>

              <button
                className="
mt-10
w-fit
rounded-2xl
bg-slate-900
px-8
py-4
font-semibold
text-white
shadow-lg
transition-all
duration-300
hover:bg-sky-700
hover:scale-105
hover:shadow-xl
"
              >
                Descubrir →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

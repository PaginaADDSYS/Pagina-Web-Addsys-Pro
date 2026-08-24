import type { Metadata } from "next";
import { publicaciones } from "@/data/actualidad";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return publicaciones.map((publicacion) => ({
    id: String(publicacion.id),
  }));
}

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;

  const publicacion = publicaciones.find((p) => p.id === Number(id));

  if (!publicacion) {
    return {};
  }

  const baseUrl = "https://www.addsys.cl";
  const url = `${baseUrl}/insights/${publicacion.id}`;
  const imageUrl = `${baseUrl}${publicacion.imagen}`;

  return {
    title: publicacion.titulo,
    description: publicacion.resumen,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: publicacion.titulo,
      description: publicacion.resumen,
      url,
      siteName: "ADDSYS",
      locale: "es_CL",
      type: "article",
      publishedTime: "2026-08-23",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: publicacion.titulo,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: publicacion.titulo,
      description: publicacion.resumen,
      images: [imageUrl],
    },
  };
}

export default async function InsightPage({ params }: PageProps) {
  const { id } = await params;

  const publicacion = publicaciones.find((p) => p.id === Number(id));

  if (!publicacion) {
    notFound();
  }

  const temasInsights = [
    "Ingeniería sanitaria",
    "Agua potable y aguas servidas",
    "Automatización y control",
    "Telemetría e IoT",
    "Infraestructura sanitaria",
    "Operación y mantenimiento",
    "Experiencias reales de proyectos",
    "Tecnología aplicada a la ingeniería",
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* HEADER + IMAGEN */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white">
        {/* Glows */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-sky-200/20 blur-3xl" />
          <div className="absolute -right-40 top-10 h-[450px] w-[450px] rounded-full bg-cyan-200/15 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            {/* CONTENIDO */}
            <div>
              {/* Volver */}
              <Link
                href="/#insights"
                className="inline-flex items-center gap-2 text-sm font-medium text-sky-700 transition hover:text-sky-900"
              >
                ← Volver a ADDSYS Insights
              </Link>

              {/* Categoría */}
              <div className="mt-7">
                <span className="inline-flex items-center rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
                  {publicacion.categoria}
                </span>
              </div>

              {/* Título */}
              <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 md:text-5xl">
                {publicacion.titulo}
              </h1>

              {/* Resumen */}
              <p className="mt-5 max-w-2xl text-lg leading-7 text-slate-600">
                {publicacion.resumen}
              </p>

              {/* Metadata */}
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500">
                <span>📅 {publicacion.fecha}</span>
                <span>⏱ {publicacion.tiempoLectura}</span>
              </div>
            </div>

            {/* IMAGEN */}
            <div className="relative">
              <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.12)]">
                <img
                  src={publicacion.imagen}
                  alt={publicacion.titulo}
                  className="block h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CUERPO DEL ARTÍCULO */}
      <article className="mx-auto max-w-4xl px-6 py-12 md:py-12">
        <div className="mx-auto max-w-3xl text-lg leading-8 text-slate-700">
          {publicacion.contenido
            .split("\n")
            .map((linea: string, index: number) => {
              const texto = linea.trim();

              if (!texto) {
                return <div key={index} className="h-5" />;
              }

              if (texto === "## ¿Qué encontrarás en ADDSYS Insights?") {
                return (
                  <div key={index} className="mt-14">
                    <h2 className="mb-5 text-2xl font-bold leading-tight text-slate-900 md:text-3xl">
                      ¿Qué encontrarás en ADDSYS Insights?
                    </h2>

                    <p className="mb-8 text-slate-600">
                      En este espacio compartiremos contenidos relacionados con:
                    </p>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {[
                        "Ingeniería sanitaria",
                        "Agua potable y aguas servidas",
                        "Automatización y control",
                        "Telemetría e IoT",
                        "Infraestructura sanitaria",
                        "Operación y mantenimiento",
                        "Experiencias reales de proyectos",
                        "Tecnología aplicada a la ingeniería",
                      ].map((tema) => (
                        <div
                          key={tema}
                          className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-50/60 hover:shadow-sm"
                        >
                          <span className="flex h-3 w-3 shrink-0 rounded-full bg-sky-400 ring-4 ring-sky-100 transition-all duration-300 group-hover:bg-sky-500 group-hover:ring-sky-200" />

                          <span className="text-base font-medium leading-6 text-slate-700">
                            {tema}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }

              // Primer título: presentación de ADDSYS Insights
              if (texto === "## Un espacio para compartir conocimiento") {
                return (
                  <div key={index} className="mb-8">
                    <div className="mb-5 h-1 w-full rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-transparent" />

                    <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                      Un espacio para compartir conocimiento
                    </h2>
                  </div>
                );
              }

              // Primer párrafo después de la introducción
              if (index === 2 && texto.startsWith("ADDSYS Insights nace")) {
                return (
                  <div
                    key={index}
                    className="mb-8 rounded-r-2xl border-l-4 border-sky-400 bg-sky-50/60 px-6 py-5"
                  >
                    <p className="text-lg leading-8 text-slate-700 md:text-xl md:leading-9">
                      {texto}
                    </p>
                  </div>
                );
              }

              // Títulos
              if (texto.startsWith("## ")) {
                return (
                  <h2
                    key={index}
                    className="mt-14 mb-5 text-2xl font-bold leading-tight text-slate-900 md:text-3xl"
                  >
                    {texto.replace("## ", "")}
                  </h2>
                );
              }

              if (
                texto === "La infraestructura sanitaria está evolucionando."
              ) {
                return (
                  <div
                    key={index}
                    className="mb-8 border-l-4 border-sky-400 pl-6"
                  >
                    <p className="text-xl italic leading-8 text-slate-700 md:text-2xl md:leading-9">
                      {texto}
                    </p>
                  </div>
                );
              }

              // Lista de temas de ADDSYS Insights
              if (texto.startsWith("- ")) {
                return null;
              }

              if (
                texto ===
                "En este espacio compartiremos contenidos relacionados con:"
              ) {
                return null;
              }

              if (
                texto ===
                "Cada proyecto sanitario presenta desafíos particulares."
              ) {
                return (
                  <div
                    key={index}
                    className="mb-8 border-l-4 border-sky-400 pl-6"
                  >
                    <p className="text-xl italic leading-8 text-slate-700 md:text-2xl md:leading-9">
                      {texto}
                    </p>
                  </div>
                );
              }

              if (texto === "Bienvenidos a ADDSYS Insights.") {
                return (
                  <div
                    key={index}
                    className="mt-12 border-t border-slate-200 pt-10 text-center"
                  >
                    <div className="mx-auto mb-5 h-1 w-20 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400" />

                    <p className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                      Bienvenidos a ADDSYS Insights.
                    </p>
                  </div>
                );
              }

              // Párrafos normales
              return (
                <p key={index} className="mb-5">
                  {texto}
                </p>
              );
            })}
        </div>

        {/* CIERRE */}
        <div className="mt-16 border-t border-slate-200 pt-10">
          <Link
            href="/#insights"
            className="inline-flex items-center rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-sky-700"
          >
            ← Volver a ADDSYS Insights
          </Link>
        </div>
      </article>

      {/* FOOTER DEL ARTÍCULO */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-14 text-center">
          <div className="mx-auto mb-5 h-1 w-16 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400" />

          <div className="text-sm font-semibold tracking-[0.2em] text-sky-700">
            ADDSYS INSIGHTS
          </div>

          <p className="mx-auto mt-4 max-w-xl text-slate-500 leading-7">
            Ingeniería, tecnología y conocimiento aplicado a la infraestructura
            sanitaria.
          </p>

          <Link
            href="/#insights"
            className="mt-7 inline-flex items-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700 hover:shadow-md"
          >
            ← Ver más publicaciones
          </Link>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import { publicaciones } from "@/data/actualidad";
import Link from "next/link";
import { notFound } from "next/navigation";

function renderConNegritas(texto: string) {
  const partes = texto.split(/(\*\*.*?\*\*)/g);

  return partes.map((parte, index) => {
    if (parte.startsWith("**") && parte.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-slate-900">
          {parte.slice(2, -2)}
        </strong>
      );
    }

    return parte;
  });
}

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
      title: publicacion.tituloSEO ?? publicacion.titulo,
      description: publicacion.resumen,
      url,
      siteName: "ADDSYS",
      locale: "es_CL",
      type: "article",
      publishedTime: publicacion.fechaPublicacionISO ?? publicacion.fechaISO,
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

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: publicacion.titulo,
    description: publicacion.resumen,
    image: [`https://www.addsys.cl${publicacion.imagen}`],
    datePublished: publicacion.fechaPublicacionISO ?? publicacion.fechaISO,
    dateModified: publicacion.fechaPublicacionISO ?? publicacion.fechaISO,
    author: {
      "@type": "Organization",
      name: "ADDSYS SpA",
      url: "https://www.addsys.cl/",
    },
    publisher: {
      "@type": "Organization",
      name: "ADDSYS SpA",
      url: "https://www.addsys.cl/",
      logo: {
        "@type": "ImageObject",
        url: "https://www.addsys.cl/logo-addsys.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.addsys.cl/insights/${publicacion.id}`,
    },
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd),
        }}
      />
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
          {(() => {
            const lineas = publicacion.contenido.split("\n");

            return lineas.map((linea: string, index: number) => {
              const texto = linea.trim();

              if (!texto) {
                return <div key={index} className="h-5" />;
              }

              if (
                texto.startsWith(
                  "Si quieres profundizar en este tema, revisa nuestro artículo sobre automatización en sistemas sanitarios",
                )
              ) {
                return (
                  <p key={index} className="mb-6 leading-8 text-slate-700">
                    Si quieres profundizar en este tema, revisa nuestro artículo
                    sobre{" "}
                    <Link
                      href="/insights/3"
                      className="font-semibold text-sky-600 transition-colors hover:text-sky-700"
                    >
                      automatización en sistemas sanitarios
                    </Link>
                    .
                  </p>
                );
              }

              if (
                texto.startsWith(
                  "Este tipo de situación puede dar origen a una **planta elevadora de aguas servidas**",
                )
              ) {
                return (
                  <p key={index} className="mb-6 leading-8 text-slate-700">
                    Este tipo de situación puede dar origen a una{" "}
                    <Link
                      href="/insights/2"
                      className="font-semibold text-sky-600 transition-colors hover:text-sky-700"
                    >
                      planta elevadora de aguas servidas
                    </Link>
                    , donde bombas y sistemas de control permiten transportar el
                    agua hacia una cota desde la cual pueda continuar su
                    conducción.
                  </p>
                );
              }

              if (
                texto.startsWith(
                  "En sistemas que incorporan bombas, estanques, plantas elevadoras u otros equipos electromecánicos",
                )
              ) {
                return (
                  <p key={index} className="mb-6 leading-8 text-slate-700">
                    En sistemas que incorporan bombas, estanques, plantas
                    elevadoras u otros equipos electromecánicos, la{" "}
                    <Link
                      href="/insights/3"
                      className="font-semibold text-sky-600 transition-colors hover:text-sky-700"
                    >
                      automatización
                    </Link>{" "}
                    y la{" "}
                    <Link
                      href="/insights/4"
                      className="font-semibold text-sky-600 transition-colors hover:text-sky-700"
                    >
                      telemetría
                    </Link>{" "}
                    pueden complementar la ingeniería sanitaria mediante
                    control, alarmas y supervisión de las condiciones de
                    funcionamiento.
                  </p>
                );
              }

              if (
                texto.startsWith(
                  "En Chile, el diseño de las instalaciones domiciliarias de agua potable y alcantarillado",
                )
              ) {
                return (
                  <p key={index} className="mb-6 leading-8 text-slate-700">
                    En Chile, el diseño de las instalaciones domiciliarias de
                    agua potable y alcantarillado se encuentra regulado por el{" "}
                    <Link
                      href="/insights/7"
                      className="font-semibold text-sky-600 transition-colors hover:text-sky-700"
                    >
                      Reglamento de Instalaciones Domiciliarias de Agua Potable
                      y Alcantarillado (RIDAA)
                    </Link>
                    .
                  </p>
                );
              }

              if (
                texto.startsWith(
                  "Una **planta elevadora de aguas servidas** recibe y bombea aguas residuales",
                )
              ) {
                return (
                  <p key={index} className="mb-6 leading-8 text-slate-700">
                    Una{" "}
                    <Link
                      href="/insights/2"
                      className="font-semibold text-sky-600 transition-colors hover:text-sky-700"
                    >
                      planta elevadora de aguas servidas
                    </Link>{" "}
                    recibe y bombea aguas residuales cuando estas no pueden
                    desplazarse gravitacionalmente hacia el punto de descarga.
                  </p>
                );
              }

              if (
                texto.startsWith(
                  "La automatización permite además establecer secuencias de funcionamiento",
                )
              ) {
                return (
                  <p key={index} className="mb-6 leading-8 text-slate-700">
                    La{" "}
                    <Link
                      href="/insights/3"
                      className="font-semibold text-sky-600 transition-colors hover:text-sky-700"
                    >
                      automatización
                    </Link>{" "}
                    permite además establecer secuencias de funcionamiento,
                    alternar bombas, incorporar equipos de apoyo y ejecutar
                    acciones de protección frente a determinadas fallas.
                  </p>
                );
              }

              if (
                texto.startsWith(
                  "La telemetría permite llevar parte de esa información fuera de la sala de bombas",
                )
              ) {
                return (
                  <p key={index} className="mb-6 leading-8 text-slate-700">
                    La{" "}
                    <Link
                      href="/insights/4"
                      className="font-semibold text-sky-600 transition-colors hover:text-sky-700"
                    >
                      telemetría
                    </Link>{" "}
                    permite llevar parte de esa información fuera de la sala de
                    bombas.
                  </p>
                );
              }

              if (
                texto.startsWith(
                  "Antes de iniciar un proyecto debe confirmarse con la Municipalidad, SERVIU, Dirección de Vialidad",
                )
              ) {
                return (
                  <p key={index} className="mb-6 leading-8 text-slate-700">
                    Antes de iniciar un proyecto debe confirmarse con la
                    Municipalidad, SERVIU, Dirección de Vialidad, empresa
                    sanitaria, administrador ferroviario, concesionaria o
                    institución correspondiente cuáles son los requisitos
                    aplicables al caso específico. Para profundizar en el marco
                    general, revisa nuestro artículo sobre{" "}
                    <Link
                      href="/insights/7"
                      className="font-semibold text-sky-600 transition-colors hover:text-sky-700"
                    >
                      normativa sanitaria en Chile
                    </Link>
                    .
                  </p>
                );
              }

              if (
                texto.startsWith(
                  "Si quieres conocer primero cómo funciona una planta en términos generales, revisa nuestro artículo sobre qué es una planta de tratamiento de aguas servidas y cómo funciona",
                )
              ) {
                return (
                  <p key={index} className="mb-6 leading-8 text-slate-700">
                    Si quieres conocer primero cómo funciona una planta en
                    términos generales, revisa nuestro artículo sobre{" "}
                    <Link
                      href="/insights/5"
                      className="font-semibold text-sky-600 transition-colors hover:text-sky-700"
                    >
                      qué es una planta de tratamiento de aguas servidas y cómo
                      funciona
                    </Link>
                    .
                  </p>
                );
              }

              if (
                texto.startsWith(
                  "Si quieres profundizar en este tema, revisa nuestro artículo sobre telemetría en sistemas sanitarios",
                )
              ) {
                return (
                  <p key={index} className="mb-6 leading-8 text-slate-700">
                    Si quieres profundizar en este tema, revisa nuestro artículo
                    sobre{" "}
                    <Link
                      href="/insights/4"
                      className="font-semibold text-sky-600 transition-colors hover:text-sky-700"
                    >
                      telemetría en sistemas sanitarios
                    </Link>
                    .
                  </p>
                );
              }

              if (
                texto.startsWith(
                  "Por esta razón, la **automatización** y la **telemetría** pueden transformarse",
                )
              ) {
                return (
                  <p key={index} className="mb-6 leading-8 text-slate-700">
                    Por esta razón, la{" "}
                    <Link
                      href="/insights/3"
                      className="font-semibold text-sky-600 transition-colors hover:text-sky-700"
                    >
                      automatización
                    </Link>{" "}
                    y la{" "}
                    <Link
                      href="/insights/4"
                      className="font-semibold text-sky-600 transition-colors hover:text-sky-700"
                    >
                      telemetría
                    </Link>{" "}
                    <strong className="font-semibold text-slate-900">
                      pueden transformarse en herramientas importantes para
                      apoyar la operación
                    </strong>
                    .
                  </p>
                );
              }

              if (
                texto.startsWith(
                  "Si quieres profundizar en este tema, revisa nuestro artículo sobre plantas elevadoras de aguas servidas",
                )
              ) {
                return (
                  <p key={index} className="mb-6 leading-8 text-slate-700">
                    Si quieres profundizar en este tema, revisa nuestro artículo
                    sobre{" "}
                    <Link
                      href="/insights/2"
                      className="font-semibold text-sky-600 transition-colors hover:text-sky-700"
                    >
                      plantas elevadoras de aguas servidas
                    </Link>
                    .
                  </p>
                );
              }

              if (
                texto.startsWith(
                  "En este punto, **automatización y telemetría pueden transformarse",
                )
              ) {
                return (
                  <p key={index} className="mb-6 leading-8 text-slate-700">
                    En este punto,{" "}
                    <Link
                      href="/insights/3"
                      className="font-semibold text-sky-600 transition-colors hover:text-sky-700"
                    >
                      automatización
                    </Link>{" "}
                    y{" "}
                    <Link
                      href="/insights/4"
                      className="font-semibold text-sky-600 transition-colors hover:text-sky-700"
                    >
                      telemetría
                    </Link>{" "}
                    <strong className="font-semibold text-slate-900">
                      pueden transformarse en herramientas importantes para
                      apoyar la operación de una planta de tratamiento
                    </strong>
                    .
                  </p>
                );
              }

              // LISTA 1 — Cuándo puede ser necesaria una PEAP
              if (
                publicacion.id === 9 &&
                texto ===
                  "En términos generales, una planta elevadora puede ser necesaria cuando:"
              ) {
                return (
                  <div key={index} className="mb-8">
                    <p className="mb-6 text-slate-700">
                      En términos generales, una planta elevadora puede ser
                      necesaria cuando:
                    </p>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {[
                        "La presión disponible en la red pública es insuficiente",
                        "Existen consumos ubicados a una cota considerablemente superior al punto de alimentación",
                        "Las pérdidas de carga de la instalación reducen significativamente la presión disponible",
                        "Se requiere mantener condiciones de presión más estables frente a variaciones de consumo",
                        "El proyecto contempla almacenamiento de agua y posterior presurización de la red interior",
                      ].map((item) => (
                        <div
                          key={item}
                          className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-50/60 hover:shadow-sm"
                        >
                          <span className="mt-1.5 flex h-3 w-3 shrink-0 rounded-full bg-sky-400 ring-4 ring-sky-100 transition-all duration-300 group-hover:bg-sky-500 group-hover:ring-sky-200" />
                          <span className="text-base font-medium leading-6 text-slate-700">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }

              // LISTA 2 — Aspectos sanitarios y operacionales
              if (
                publicacion.id === 9 &&
                texto ===
                  "Además de su volumen, deben considerarse aspectos sanitarios y operacionales como:"
              ) {
                return (
                  <div key={index} className="mb-8">
                    <p className="mb-6 text-slate-700">
                      Además de su volumen, deben considerarse aspectos
                      sanitarios y operacionales como:
                    </p>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {[
                        "Materialidad apta para agua potable",
                        "Protección frente al ingreso de contaminantes",
                        "Ventilación adecuada",
                        "Rebalse",
                        "Desagüe",
                        "Accesibilidad para inspección y limpieza",
                        "Control de niveles",
                        "Condiciones que permitan realizar mantenimiento",
                      ].map((item) => (
                        <div
                          key={item}
                          className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-50/60 hover:shadow-sm"
                        >
                          <span className="mt-1.5 flex h-3 w-3 shrink-0 rounded-full bg-sky-400 ring-4 ring-sky-100 transition-all duration-300 group-hover:bg-sky-500 group-hover:ring-sky-200" />
                          <span className="text-base font-medium leading-6 text-slate-700">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }

              // LISTA 3 — Antecedentes para diseñar una PEAP
              if (
                publicacion.id === 9 &&
                texto === "Entre los principales antecedentes se encuentran:"
              ) {
                return (
                  <div key={index} className="mb-8">
                    <p className="mb-6 text-slate-700">
                      Entre los principales antecedentes se encuentran:
                    </p>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {[
                        "Presión disponible informada por la empresa sanitaria",
                        "Caudal requerido",
                        "Características y cantidad de consumos",
                        "Altura geométrica de la instalación",
                        "Trazado y diámetros de tuberías",
                        "Pérdidas de carga",
                        "Presión requerida en los puntos de consumo",
                        "Capacidad de almacenamiento",
                        "Disponibilidad eléctrica",
                        "Espacio disponible para estanques, bombas y tableros",
                        "Condiciones de operación y mantenimiento",
                        "Requerimientos de respaldo y continuidad operacional",
                      ].map((item) => (
                        <div
                          key={item}
                          className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-50/60 hover:shadow-sm"
                        >
                          <span className="mt-1.5 flex h-3 w-3 shrink-0 rounded-full bg-sky-400 ring-4 ring-sky-100 transition-all duration-300 group-hover:bg-sky-500 group-hover:ring-sky-200" />
                          <span className="text-base font-medium leading-6 text-slate-700">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }

              // LISTA 4 — Variables supervisadas por el sistema de control
              if (
                publicacion.id === 9 &&
                texto ===
                  "El sistema de control puede supervisar variables como:"
              ) {
                return (
                  <div key={index} className="mb-8">
                    <p className="mb-6 text-slate-700">
                      El sistema de control puede supervisar variables como:
                    </p>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {[
                        "Presión de impulsión",
                        "Nivel del estanque",
                        "Estado de las bombas",
                        "Frecuencia o velocidad de funcionamiento",
                        "Fallas eléctricas",
                        "Disponibilidad de equipos",
                        "Horas de operación",
                        "Número de partidas",
                        "Alarmas de nivel alto o bajo",
                        "Condiciones anormales de presión",
                      ].map((item) => (
                        <div
                          key={item}
                          className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-50/60 hover:shadow-sm"
                        >
                          <span className="mt-1.5 flex h-3 w-3 shrink-0 rounded-full bg-sky-400 ring-4 ring-sky-100 transition-all duration-300 group-hover:bg-sky-500 group-hover:ring-sky-200" />
                          <span className="text-base font-medium leading-6 text-slate-700">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
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

              // Primer título de cada publicación
              if (
                texto.startsWith("## ") &&
                index ===
                  publicacion.contenido
                    .split("\n")
                    .findIndex((linea) => linea.trim().startsWith("## "))
              ) {
                return (
                  <div key={index} className="mb-8">
                    <div className="mb-5 h-1 w-full rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-transparent" />

                    <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                      {texto.replace("## ", "")}
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

              // Subtítulos H3 dentro de una sección
              if (texto.startsWith("### ")) {
                return (
                  <h3
                    key={index}
                    className="mb-4 mt-8 text-xl font-bold leading-tight text-slate-900 md:text-2xl"
                  >
                    {texto.replace("### ", "")}
                  </h3>
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

              // Listas genéricas con viñetas desde el artículo 10
              if (publicacion.id >= 10 && texto.startsWith("- ")) {
                const lineaAnterior = lineas[index - 1]?.trim();

                if (lineaAnterior?.startsWith("- ")) {
                  return null;
                }

                const items: string[] = [];

                for (let i = index; i < lineas.length; i++) {
                  const item = lineas[i].trim();

                  if (!item.startsWith("- ")) {
                    break;
                  }

                  items.push(item.slice(2).trim());
                }

                return (
                  <div
                    key={index}
                    className="mb-8 mt-2 grid gap-3 sm:grid-cols-2"
                  >
                    {items.map((item) => (
                      <div
                        key={item}
                        className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-50/60 hover:shadow-sm"
                      >
                        <span className="mt-1.5 flex h-3 w-3 shrink-0 rounded-full bg-sky-400 ring-4 ring-sky-100 transition-all duration-300 group-hover:bg-sky-500 group-hover:ring-sky-200" />

                        <span className="text-base font-medium leading-6 text-slate-700">
                          {renderConNegritas(item)}
                        </span>
                      </div>
                    ))}
                  </div>
                );
              }

              // Las listas de artículos anteriores continúan dependiendo
              // de sus bloques especiales
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

              // Listas numeradas desde el artículo 10
              const coincidenciaNumerada = texto.match(/^(\d+)\.\s+(.+)$/);

              if (publicacion.id >= 10 && coincidenciaNumerada) {
                const numero = coincidenciaNumerada[1];
                const contenido = coincidenciaNumerada[2].replace(/[;.]$/, "");

                return (
                  <div
                    key={index}
                    className="mb-3 flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 px-5 py-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                      {numero}
                    </span>

                    <span className="pt-0.5 text-base font-medium leading-7 text-slate-700">
                      {renderConNegritas(contenido)}
                    </span>
                  </div>
                );
              }

              // Artículo 10 → Artículo 9: Planta elevadora de agua potable
              if (
                publicacion.id === 10 &&
                texto.startsWith(
                  "Dimensionar una planta elevadora de agua potable (PEAP) significa",
                )
              ) {
                return (
                  <p key={index} className="mb-6 leading-8 text-slate-700">
                    Dimensionar una{" "}
                    <Link
                      href="/insights/9"
                      className="font-semibold text-sky-600 transition-colors hover:text-sky-700"
                    >
                      planta elevadora de agua potable (PEAP)
                    </Link>{" "}
                    significa determinar las condiciones hidráulicas que debe
                    satisfacer el sistema para entregar el caudal y la presión
                    necesarios en los distintos puntos de consumo de una
                    instalación.
                  </p>
                );
              }

              // Artículo 10 → Artículo 7: RIDAA
              if (
                publicacion.id === 10 &&
                texto.startsWith(
                  "El RIDAA establece criterios para el diseño de las instalaciones domiciliarias",
                )
              ) {
                return (
                  <p key={index} className="mb-6 leading-8 text-slate-700">
                    El{" "}
                    <Link
                      href="/insights/7"
                      className="font-semibold text-sky-600 transition-colors hover:text-sky-700"
                    >
                      RIDAA
                    </Link>{" "}
                    establece criterios para el diseño de las instalaciones
                    domiciliarias de agua potable y relaciona la necesidad de
                    sistemas de elevación con las condiciones de presión
                    disponibles y las características de la instalación.
                  </p>
                );
              }

              // Artículo 10 → Artículo 3: Automatización
              if (
                publicacion.id === 10 &&
                texto.startsWith(
                  "Mediante una estrategia adecuada de automatización, las bombas pueden alternarse",
                )
              ) {
                return (
                  <p key={index} className="mb-6 leading-8 text-slate-700">
                    Mediante una estrategia adecuada de{" "}
                    <Link
                      href="/insights/3"
                      className="font-semibold text-sky-600 transition-colors hover:text-sky-700"
                    >
                      automatización
                    </Link>
                    , las bombas pueden alternarse para distribuir las horas de
                    funcionamiento y comprobar periódicamente su disponibilidad.
                  </p>
                );
              }

              // Artículo 10 → Artículo 4: Telemetría
              if (
                publicacion.id === 10 &&
                texto.startsWith(
                  "La telemetría permite supervisar a distancia variables relevantes",
                )
              ) {
                return (
                  <p key={index} className="mb-6 leading-8 text-slate-700">
                    La{" "}
                    <Link
                      href="/insights/4"
                      className="font-semibold text-sky-600 transition-colors hover:text-sky-700"
                    >
                      telemetría
                    </Link>{" "}
                    permite supervisar a distancia variables relevantes para
                    conocer el comportamiento de una planta elevadora.
                  </p>
                );
              }

              // Párrafos normales
              return (
                <p key={index} className="mb-5">
                  {renderConNegritas(texto)}
                </p>
              );
            });
          })()}
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
            href="/#ultimas-publicaciones"
            className="mt-7 inline-flex items-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700 hover:shadow-md"
          >
            ← Ver más publicaciones
          </Link>
        </div>
      </section>
    </main>
  );
}

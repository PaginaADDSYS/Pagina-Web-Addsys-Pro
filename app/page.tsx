"use client";

import { useState, useEffect, useRef } from "react";

export default function AddsysWeb() {
  const heroImages = [
    { src: "/Images/HERO5.jpg", position: "center 100%", scale: "1" },
    { src: "/Images/F_OB/HERO122.jpg", position: "center 50%", scale: "1" },
    { src: "/Images/HERO7.jpg", position: "center 35%", scale: "1" },
    { src: "/Images/F_OB/HERO2.png", position: "center 50%", scale: "1" },
    { src: "/Images/F_OB/HERO10.jpg", position: "center 50%", scale: "1" },
    { src: "/Images/F_OB/HERO100.jpg", position: "center 100%", scale: "1" },
    { src: "/Images/F_OB/HERO203.jpg", position: "center 20%", scale: "1" },
    { src: "/Images/F_OB/HERO200.png", position: "center 50%", scale: "1" },
    { src: "/Images/F_OB/HERO204.jpg", position: "center 50%", scale: "1" },
    { src: "/Images/F_OB/HERO202.jpg", position: "center 100%", scale: "1" },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const isHovered = useRef(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  // Auto scroll galería
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const interval = window.setInterval(() => {
      if (isHovered.current) return;

      const firstCard = container.querySelector(
        "[data-carousel-item]",
      ) as HTMLDivElement | null;
      const step = firstCard ? firstCard.offsetWidth + 16 : 300;

      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const nextLeft = container.scrollLeft + step;

      const isMobile = window.innerWidth < 768;

      if (nextLeft >= maxScrollLeft - 10) {
        if (isMobile) {
          container.scrollLeft = 0;
        } else {
          container.scrollTo({ left: 0, behavior: "smooth" });
        }
      } else {
        if (isMobile) {
          container.scrollLeft = nextLeft;
        } else {
          container.scrollTo({ left: nextLeft, behavior: "smooth" });
        }
      }
    }, 3500);

    return () => window.clearInterval(interval);
  }, []);

  const highlights = [
    "Experiencia en el rubro sanitario",
    "Atención a clientes industriales y domiciliarios",
    "Soluciones integrales y a medida",
  ];

  const trustPoints = [
    {
      title: "Asesoría experta",
      desc: "Te orientamos en cada etapa del proyecto para tomar decisiones técnicas claras y seguras.",
    },
    {
      title: "Ejecución eficiente",
      desc: "Priorizamos tiempos, coordinación y cumplimiento para que tu proyecto avance sin contratiempos.",
    },
    {
      title: "Soluciones a medida",
      desc: "Adaptamos cada propuesta a la necesidad real de tu proyecto, tu terreno y tu operación.",
    },
  ];

  const services = [
    {
      title: "Proyectos sanitarios completos",
      desc: "Nos encargamos desde el diseño hasta la ejecución, entregando soluciones llave en mano para agua potable y alcantarillado.",
    },
    {
      title: "Diseño y construcción de redes",
      desc: "Desarrollamos redes eficientes de distribución y recolección, cumpliendo normativa y optimizando costos.",
    },
    {
      title: "Arranques y empalmes",
      desc: "Conectamos tu proyecto a redes existentes de forma segura, rápida y certificada.",
    },
    {
      title: "Extensión de redes",
      desc: "Ampliamos infraestructura sanitaria para nuevos proyectos urbanos e industriales.",
    },
    {
      title: "Plantas elevadoras",
      desc: "Soluciones técnicas para bombeo y elevación de aguas en distintos escenarios.",
    },
    {
      title: "Plantas de tratamiento",
      desc: "Diseño, operación y mantenimiento de sistemas de tratamiento de aguas residuales.",
    },
    {
      title: "Mantenimiento sanitario",
      desc: "Aseguramos el correcto funcionamiento de tu infraestructura con mantenimiento especializado.",
    },
  ];

  const whatsappNumber = "56968785641";
  const whatsappMessage = encodeURIComponent(
    "Hola, quiero hablar de mi infraestructura sanitaria",
  );

  const scrollCarousel = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const amount = 320;
    const nextLeft =
      direction === "left"
        ? Math.max(container.scrollLeft - amount, 0)
        : Math.min(
            container.scrollLeft + amount,
            container.scrollWidth - container.clientWidth,
          );

    container.scrollTo({ left: nextLeft, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm">
        {/* Barra superior (mensaje) */}
        <div className="text-[11px] sm:text-xs md:text-sm text-sky-800 bg-sky-50 border-b border-sky-100 py-1 px-2 text-center">
          8 años en el mercado • Temuco, Chile • Cobertura nacional
        </div>

        {/* Header principal */}
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center border-b border-slate-200">
          <div className="flex items-center gap-3">
            <img
              src="/logo-addsys.png"
              alt="logo"
              className="h-11 object-contain"
            />
            <div>
              <div className="font-bold text-lg md:text-xl">ADDSYS SpA</div>
              <div className="text-xs md:text-sm text-gray-500">
                Ingeniería Sanitaria
              </div>
            </div>
          </div>

          {/* Menú escritorio */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">
            <a href="#inicio" className="transition hover:text-sky-700">
              Inicio
            </a>
            <a href="#servicios" className="transition hover:text-sky-700">
              Servicios
            </a>
            <a href="#proyectos" className="transition hover:text-sky-700">
              Proyectos
            </a>
            <a href="#clientes" className="transition hover:text-sky-700">
              Clientes
            </a>
            <a href="#cobertura" className="transition hover:text-sky-700">
              Cobertura
            </a>
            <a href="#contacto" className="transition hover:text-sky-700">
              Contacto
            </a>
            <a
              href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-green-500 px-4 py-2 text-white shadow-sm transition hover:bg-green-600"
            >
              WhatsApp
            </a>
          </nav>

          {/* Botón móvil */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm"
            aria-label="Abrir menú"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Menú móvil */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-6 py-4 shadow-sm">
            <nav className="flex flex-col gap-4 text-sm font-medium text-slate-700">
              <a
                href="#inicio"
                onClick={() => setMobileMenuOpen(false)}
                className="transition hover:text-sky-700"
              >
                Inicio
              </a>
              <a
                href="#servicios"
                onClick={() => setMobileMenuOpen(false)}
                className="transition hover:text-sky-700"
              >
                Servicios
              </a>
              <a
                href="#proyectos"
                onClick={() => setMobileMenuOpen(false)}
                className="transition hover:text-sky-700"
              >
                Proyectos
              </a>
              <a
                href="#clientes"
                onClick={() => setMobileMenuOpen(false)}
                className="transition hover:text-sky-700"
              >
                Clientes
              </a>
              <a
                href="#cobertura"
                onClick={() => setMobileMenuOpen(false)}
                className="transition hover:text-sky-700"
              >
                Cobertura
              </a>
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="transition hover:text-sky-700"
              >
                Contacto
              </a>
              <a
                href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-green-500 px-4 py-3 text-center text-white shadow-sm transition hover:bg-green-600"
              >
                WhatsApp
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="scroll-mt-35 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.10),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.10),_transparent_24%)] bg-white"
      >
        <div className="max-w-7xl mx-auto px-5 md:px-6 pt-5 md:pt-0 pb-20 md:py-20 grid md:grid-cols-2 gap-3 md:gap-12 items-start">
          {/* TEXTO */}
          <div className="order-2 md:order-1">
            <h1 className="mt-0 text-3xl sm:text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              Soluciones sanitarias confiables para ejecutar tu proyecto con
              seguridad
            </h1>

            <p className="mt-4 text-lg text-gray-600 max-w-2xl leading-8">
              Desde Temuco, ADDSYS cuenta con 8 años de experiencia
              desarrollando soluciones sanitarias en agua potable y aguas
              servidas, brindando atención especializada a proyectos
              domiciliarios, urbanos e industriales en la zona sur del país.
            </p>

            {/* DESTACADOS */}
            <div className="mt-4 flex flex-wrap gap-3">
              {[
                "Experiencia comprobada",
                "Cobertura Nacional",
                "Soluciones a medida",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-2xl font-medium hover:bg-green-600 transition shadow-lg shadow-green-500/20 hover:-translate-y-0.5"
              >
                Hablar por WhatsApp
              </a>

              <a
                href="#contacto"
                className="border border-slate-300 px-6 py-3 rounded-2xl font-medium hover:bg-slate-50 transition shadow-sm hover:-translate-y-0.5"
              >
                Solicitar cotización
              </a>
            </div>

            {/* BLOQUES CLAVE (MUCHO MÁS LIMPIOS) */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl">
              <div className="rounded-2xl border bg-white p-4 shadow-sm">
                <div className="text-sm text-gray-500">Trayectoria</div>
                <div className="text-lg font-semibold text-sky-700">8 años</div>
              </div>

              <div className="rounded-2xl border bg-white p-4 shadow-sm">
                <div className="text-sm text-gray-500">Ubicación</div>
                <div className="text-lg font-semibold text-sky-700">
                  Temuco, Chile
                </div>
              </div>

              <div className="rounded-2xl border bg-white p-4 shadow-sm col-span-2 md:col-span-1">
                <div className="text-sm text-gray-500">Cobertura</div>
                <div className="text-lg font-semibold text-sky-700">
                  Todo el país
                </div>
              </div>
            </div>
          </div>

          {/* IMAGEN */}
          <div className="relative order-1 md:order-2 md:mt-6">
            {/* Fondo sutil */}
            <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-3xl bg-gray-200/40"></div>

            {/* Imagen */}
            <div className="relative overflow-hidden rounded-3xl border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)] h-[380px] sm:h-[450px] md:h-[550px]">
              <img
                src={heroImages[currentImage].src}
                alt="Proyecto sanitario"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
                style={{
                  objectPosition: heroImages[currentImage].position,
                  transform: `scale(${heroImages[currentImage].scale})`,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS + POR QUE ELEGIRNOS */}
      <section id="servicios" className="scroll-mt-7 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-b from-slate-50 to-white rounded-[2rem] p-10 shadow-sm border border-slate-200">
            {/* SERVICIOS */}
            <h2 className="text-3xl md:text-4xl font-bold">
              ¿Cómo te ayudamos?
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl">
              Entregamos soluciones sanitarias completas para que tu proyecto
              funcione sin problemas, cumpla normativa y se ejecute de forma
              eficiente.
            </p>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="border border-slate-200 bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
                >
                  <h3 className="font-semibold text-lg">{s.title}</h3>
                  <p className="mt-3 text-sm text-gray-600">{s.desc}</p>
                </div>
              ))}
            </div>

            {/* POR QUE ELEGIRNOS (ahora dentro del mismo contenedor) */}
            <div className="mt-20">
              <h2 className="text-3xl md:text-4xl font-bold">
                ¿Por qué elegir ADDSYS?
              </h2>

              <div className="grid md:grid-cols-3 gap-6 mt-10">
                {trustPoints.map((point) => (
                  <div
                    key={point.title}
                    className="p-6 border border-slate-200 rounded-2xl bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
                  >
                    <h3 className="font-semibold text-lg">{point.title}</h3>
                    <p className="mt-3 text-sm text-gray-600 leading-7">
                      {point.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-sky-50 to-white p-8 shadow-sm">
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-800 leading-tight max-w-4xl">
                  Un equipo que respalda cada proyecto
                </h3>

                <p className="mt-4 text-gray-600 leading-7 md:text-justify">
                  En ADDSYS contamos con personal técnico especializado y
                  experiencia en terreno, lo que nos permite abordar cada
                  proyecto con criterio profesional, eficiencia y soluciones
                  adaptadas a la realidad de cada cliente.
                </p>

                <p className="mt-4 text-gray-600 leading-7 md:text-justify">
                  Nuestro equipo combina conocimiento técnico y experiencia
                  práctica, destacando la trayectoria de nuestro Gerente de
                  operaciones, con más de 15 años de experiencia en empresas
                  sanitarias, desarrollando nuevos negocios del rubro y 8 años
                  como contratista en proyectos para empresas sanitarias y
                  clientes industriales.
                </p>

                <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-slate-600">
                  <div>
                    • Profesionales con experiencia en el rubro sanitario
                  </div>
                  <div>
                    • Conocimiento técnico en agua potable y aguas servidas
                  </div>
                  <div>
                    • Enfoque práctico en ejecución y resolución de problemas
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section
        id="proyectos"
        className="scroll-mt-7 bg-gradient-to-b from-white to-gray-100 py-24"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="overflow-visible rounded-3xl shadow-lg border border-gray-200 bg-white p-8">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Proyectos ejecutados en terreno
            </h2>

            <p className="mt-2 text-sky-700 font-medium">
              Experiencia real en obras sanitarias
            </p>

            <p className="mt-4 text-gray-600 max-w-2xl">
              Una propuesta visual que transmite experiencia, terreno y
              ejecución técnica, reforzando la confianza comercial de ADDSYS.
            </p>

            {/* GRID ORIGINAL */}
            <div className="max-w-5xl mx-auto mt-10">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    img: "/Images/F_OB/Grid1.jpg",
                    titulo: "Planta elevadora de agua servida",
                    tipo: "Proyecto domiciliario",
                  },
                  {
                    img: "/Images/F_OB/Grid2.jpg",
                    titulo: "Planta elevadora de agua potable",
                    tipo: "Proyecto domiciliario",
                  },
                  {
                    img: "/Images/F_OB/Grid3.png",
                    titulo: "Instalación sanitaria",
                    tipo: "Obra de infraestructura pública, Agua Potable",
                  },
                  {
                    img: "/Images/F_OB/Grid4.png",
                    titulo: "Instalación sanitaria",
                    tipo: "Obra de infraestructura pública, Agua Servida",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="relative overflow-hidden rounded-3xl shadow-lg group"
                  >
                    <img
                      src={item.img}
                      alt={item.titulo}
                      className="w-full h-[420px] object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 p-5 text-white">
                      <div className="text-lg font-semibold leading-tight">
                        {item.titulo}
                      </div>
                      <div className="text-sm text-gray-200">{item.tipo}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CINTA DE PROYECTOS */}
            <div className="w-full mt-16 px-6 md:px-10">
              <div className="mb-4 flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold">Proyectos recientes</h3>

                <div className="hidden md:flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => scrollCarousel("left")}
                    className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
                    aria-label="Ver proyectos anteriores"
                  >
                    ←
                  </button>

                  <button
                    type="button"
                    onClick={() => scrollCarousel("right")}
                    className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
                    aria-label="Ver proyectos siguientes"
                  >
                    →
                  </button>
                </div>
              </div>

              <div className="relative rounded-3xl border border-gray-200 bg-white shadow-xl">
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-3 sm:w-4 md:w-6 bg-gradient-to-r from-white to-transparent" />
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-3 sm:w-4 md:w-6 bg-gradient-to-l from-white to-transparent" />

                <div
                  ref={scrollRef}
                  onMouseEnter={() => (isHovered.current = true)}
                  onMouseLeave={() => (isHovered.current = false)}
                  id="carousel"
                  className="flex gap-4 overflow-x-auto py-4 snap-x snap-mandatory scroll-smooth px-6 md:px-10"
                >
                  {[
                    {
                      img: "/Images/100.jpeg",
                      titulo: "Planta elevadora de agua potable(PEAP)",
                      ubicacion: "Proyecto domiciliario",
                    },
                    {
                      img: "/Images/101.jpeg",
                      titulo: "Pozo de absorción",
                      ubicacion: "Sistema particular de agua servida rural",
                    },
                    {
                      img: "/Images/102.jpeg",
                      titulo: "Planta elevadora de agua servida(PEAS)",
                      ubicacion: "Proyecto domiciliario",
                    },
                    {
                      img: "/Images/103.jpeg",
                      titulo: "PEAS",
                      ubicacion: "Proyecto domiciliario",
                    },
                    {
                      img: "/Images/104.jpeg",
                      titulo: "Tablero de fuerza y control",
                      ubicacion: "Proyecto domiciliario",
                    },
                    {
                      img: "/Images/105.jpeg",
                      titulo:
                        "Limpieza de sistemas domiciliarios de agua servida",
                      ubicacion: "Infraestructura interior sanitaria",
                    },
                    {
                      img: "/Images/106.jpeg",
                      titulo: "Conexiones a redes públicas de agua servida",
                      ubicacion: "Sistemas sanitarios urbanos",
                    },
                    {
                      img: "/Images/107.jpeg",
                      titulo: "Conexiones a redes públicas",
                      ubicacion: "Sistemas sanitarios urbanos",
                    },
                    {
                      img: "/Images/108.jpeg",
                      titulo: "Conexiones a redes públicas",
                      ubicacion: "Sistemas sanitarios urbanos",
                    },
                    {
                      img: "/Images/109.jpeg",
                      titulo:
                        "Limpieza de sistemas domiciliarios de agua servida",
                      ubicacion: "Infraestructura interior sanitaria",
                    },
                    {
                      img: "/Images/110.jpeg",
                      titulo:
                        "Limpieza de sistemas domiciliarios de agua servida",
                      ubicacion: "Infraestructura interior sanitaria",
                    },
                    {
                      img: "/Images/111.jpeg",
                      titulo: "Conexiones a redes públicas",
                      ubicacion: "Sistemas sanitarios urbanos",
                    },
                    {
                      img: "/Images/F_OB/Carr1.jpg",
                      titulo: "PEAS",
                      ubicacion: "Proyecto domiciliario",
                    },
                    {
                      img: "/Images/F_OB/Carr2.jpg",
                      titulo: "PEAS",
                      ubicacion: "Proyecto domiciliario",
                    },
                    {
                      img: "/Images/F_OB/Carr5.jpg",
                      titulo: "Tablero de fuerza y control",
                      ubicacion: "Proyecto domiciliario",
                    },
                    {
                      img: "/Images/F_OB/Carr6.jpg",
                      titulo: "Tablero de fuerza y control",
                      ubicacion: "Proyecto domiciliario",
                    },
                    {
                      img: "/Images/F_OB/Carr11.png",
                      titulo: "Conexiones a redes públicas",
                      ubicacion: "Sistemas sanitarios urbanos",
                    },
                    {
                      img: "/Images/F_OB/Carr12.jpg",
                      titulo: "Sistema interior de agua servida",
                      ubicacion: "Proyecto domiciliario",
                    },
                    {
                      img: "/Images/F_OB/Carr14.png",
                      titulo: "Pozo de absorción",
                      ubicacion: "Sistema particular de agua servida rural",
                    },
                    {
                      img: "/Images/F_OB/Carr15.png",
                      titulo: "Redes púbicas e interiores de agua servida",
                      ubicacion: "Red pública",
                    },
                    {
                      img: "/Images/F_OB/Carr16.png",
                      titulo: "Redes púbicas e interiores de agua servida",
                      ubicacion: "Red pública",
                    },
                    {
                      img: "/Images/F_OB/Carr17.png",
                      titulo: "Soluciones particulares de agua servida",
                      ubicacion: "Proyecto rural",
                    },
                    {
                      img: "/Images/F_OB/Carr18.png",
                      titulo: "Red interior de agua servida",
                      ubicacion: "Sistemas sanitarios urbanos",
                    },
                    {
                      img: "/Images/F_OB/Carr19.png",
                      titulo: "Sistema particular de agua servida",
                      ubicacion: "Sistema sanitario rural",
                    },
                    {
                      img: "/Images/F_OB/Carr20.png",
                      titulo: "Sistema particular de agua servida",
                      ubicacion: "Sistema sanitario rural",
                    },
                    {
                      img: "/Images/F_OB/Carr30.jpg",
                      titulo: "Sistema particular de agua potable",
                      ubicacion: "Sistema sanitario rural",
                    },
                    {
                      img: "/Images/F_OB/Carr40.png",
                      titulo: "Sistema particular de agua potable",
                      ubicacion: "Sistema sanitario rural",
                    },
                    {
                      img: "/Images/F_OB/Carr62.jpg",
                      titulo:
                        "Operación Planta de Tratamiento de Aguas Servidas",
                      ubicacion: "Sistema sanitario rural",
                    },
                    {
                      img: "/Images/F_OB/Carr63.jpg",
                      titulo:
                        "Operación Planta de Tratamiento de Aguas Servidas",
                      ubicacion: "Sistema sanitario rural",
                    },
                    {
                      img: "/Images/F_OB/Carr64.jpg",
                      titulo:
                        "Operación Planta de Tratamiento de Aguas Servidas",
                      ubicacion: "Sistema sanitario rural",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="w-[220px] sm:w-[320px] md:w-[340px] flex-none snap-center group"
                    >
                      <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-md">
                        <img
                          src={item.img}
                          alt={item.titulo}
                          className="w-full h-[300px] sm:h-[340px] md:h-[400px] object-cover object-[center_30%] transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-0 p-4 text-white">
                          <div className="text-base font-semibold leading-tight">
                            {item.titulo}
                          </div>
                          <div className="text-sm text-gray-200">
                            {item.ubicacion}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-3">
                Desliza para ver más proyectos →
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTES */}
      <section id="clientes" className="scroll-mt-7 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-b from-slate-50 to-white rounded-[2rem] p-10 shadow-sm border border-slate-200">
            <h2 className="text-3xl md:text-4xl font-bold">
              Nuestros clientes
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl">
              Empresas e instituciones que han confiado en ADDSYS para el
              desarrollo de sus proyectos sanitarios.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10 items-center">
              {[
                "/logos/Cliente1.png",
                "/logos/Cliente2.png",
                "/logos/Cliente3.png",
                "/logos/Cliente4.png",
                "/logos/Cliente5.png",
                "/logos/Cliente6.png",
                "/logos/Cliente7.png",
                "/logos/Cliente8.png",
                "/logos/Cliente9.png",
                "/logos/Cliente10.png",
                "/logos/Cliente11.png",
              ].map((logo, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center p-4 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition"
                >
                  <img
                    src={logo}
                    alt={`Cliente ${i + 1}`}
                    className="max-h-[60px] object-contain opacity-80 hover:opacity-100 transition"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COBERTURA */}
      <section id="cobertura" className="scroll-mt-7 py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* TARJETA CONTENEDORA (igual estilo proyectos) */}
          <div className="bg-gradient-to-b from-slate-50 to-white rounded-[2rem] p-10 shadow-sm border border-slate-200">
            <h2 className="text-2xl md:text-4xl font-bold leading-tight">
              Cobertura a nivel nacional
            </h2>
            <p className="mt-4 text-gray-600 max-w-6xl leading-7">
              En ADDSYS contamos con capacidad para desarrollar proyectos
              sanitarios a nivel nacional, con experiencia en distintas
              condiciones geográficas y operativas. Nos adaptamos a las
              necesidades de cada cliente, asegurando soluciones eficientes
              tanto en zonas urbanas como en entornos industriales.
            </p>

            {/* TARJETAS PEQUEÑAS (como antes) */}
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition">
                <h3 className="font-semibold text-lg">Zona de atención</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Presencia y capacidad operativa en todo el territorio
                  nacional.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition">
                <h3 className="font-semibold text-lg">Tipo de clientes</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Empresas, particulares, municipalidades e instituciones.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition">
                <h3 className="font-semibold text-lg">Tipo de proyectos</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Redes, empalmes, plantas elevadoras y tratamiento de aguas.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition">
                <h3 className="font-semibold text-lg">Experiencia</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Más de 8 años desarrollando soluciones sanitarias confiables.
                </p>
              </div>
            </div>
            <div className="mt-16 relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#021B44] via-[#032B73] to-[#021B44] p-8 md:p-14 text-white shadow-2xl">
              {/* Glow */}
              <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"></div>
              <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>

              <div className="relative z-10 grid lg:grid-cols-[1.2fr_0.8fr_1fr] gap-10 items-center">
                {/* Texto */}
                <div>
                  <div className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
                    COBERTURA OPERACIONAL NACIONAL
                  </div>

                  <h3 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
                    Ejecutamos proyectos sanitarios en todo Chile
                  </h3>

                  <div className="mt-6 h-1 w-20 rounded-full bg-cyan-400"></div>

                  <p className="mt-8 text-white/80 leading-8 text-lg">
                    Desde Temuco, ADDSYS desarrolla soluciones sanitarias para
                    proyectos urbanos, industriales y domiciliarios, coordinando
                    diseño, ejecución y soporte técnico en distintas regiones
                    del país.
                  </p>

                  <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                    <div className="text-sm text-white/60">
                      Base operacional
                    </div>

                    <div className="mt-2 text-3xl font-bold">Temuco, Chile</div>

                    <div className="mt-2 text-white/70">
                      Cobertura y capacidad operativa a nivel nacional.
                    </div>
                  </div>
                </div>

                {/* MAPA */}
                <div className="relative flex justify-center">
                  <img
                    src="/Cob_MapChile.png"
                    alt="Cobertura Chile"
                    className="h-[520px] md:h-[720px] object-contain scale-140 opacity-95 drop-shadow-[0_25px_35px_rgba(0,0,0,0.45)]"
                  />
                </div>

                {/* Indicadores */}
                <div className="grid gap-5">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                    <div className="text-sm text-white/60">Cobertura</div>

                    <div className="mt-2 text-4xl font-bold">Nacional</div>

                    <div className="mt-2 text-white/70">
                      Operación en todo el territorio chileno.
                    </div>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                    <div className="text-sm text-white/60">Experiencia</div>

                    <div className="mt-2 text-4xl font-bold">+8 años</div>

                    <div className="mt-2 text-white/70">
                      Desarrollo de soluciones sanitarias confiables.
                    </div>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                    <div className="text-sm text-white/60">Proyectos</div>

                    <div className="mt-2 text-4xl font-bold">Sanitarios</div>

                    <div className="mt-2 text-white/70">
                      Urbanos, industriales y domiciliarios.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        className="scroll-mt-15 py-24 bg-slate-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            {/* TEXTO */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                ¿Necesitas apoyo en tu proyecto sanitario?
              </h2>

              <p className="mt-4 text-slate-300 leading-8">
                En ADDSYS llevamos más de 8 años desarrollando soluciones
                sanitarias desde Temuco, apoyando proyectos de agua potable y
                aguas servidas en toda la zona sur del país.
              </p>

              <p className="mt-4 text-slate-300 leading-8">
                Cuéntanos tu requerimiento y te orientamos con una solución
                técnica clara, práctica y ajustada a tu proyecto.
              </p>

              <div className="mt-8 space-y-3 text-sm text-slate-300">
                <div>
                  ✔ Experiencia en proyectos domiciliarios, urbanos e
                  industriales
                </div>
                <div>✔ Atención en Temuco y todo Chile</div>
                <div>✔ Respuesta rápida y asesoría directa</div>
              </div>

              <div className="mt-8">
                <a
                  href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-600 transition shadow-lg"
                >
                  Escribir por WhatsApp
                </a>
              </div>
            </div>

            {/* FORMULARIO */}
            <div className="bg-white text-gray-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-semibold mb-4">Solicitar contacto</h3>

              <form
                onSubmit={async (e) => {
                  e.preventDefault();

                  setIsSubmitting(true);
                  setFormStatus("idle");

                  const form = e.currentTarget;
                  const formData = new FormData(form);

                  const data = {
                    nombre: formData.get("nombre"),
                    email: formData.get("email"),
                    mensaje: formData.get("mensaje"),
                  };

                  try {
                    const response = await fetch("/api/contact", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(data),
                    });

                    if (!response.ok) {
                      throw new Error("Error al enviar");
                    }

                    form.reset();
                    setFormStatus("success");
                    setTimeout(() => {
                      setFormStatus("idle");
                      setIsSubmitting(false);
                    }, 5000);
                  } catch (error) {
                    setFormStatus("error");
                    setTimeout(() => {
                      setFormStatus("idle");
                      setIsSubmitting(false);
                    }, 5000);
                    console.error(error);
                  }
                }}
                className="grid gap-4 border border-slate-200 rounded-3xl p-5 md:p-6 shadow-sm bg-white"
              >
                <div className="grid gap-4">
                  <input
                    name="nombre"
                    type="text"
                    placeholder="Nombre"
                    required
                    className="border border-slate-300 p-2 rounded-2xl outline-none focus:ring-2 focus:ring-sky-500 transition"
                  />

                  <input
                    name="email"
                    type="email"
                    placeholder="Correo electrónico"
                    required
                    className="border border-slate-300 p-2 rounded-2xl outline-none focus:ring-2 focus:ring-sky-500 transition"
                  />
                </div>
                <textarea
                  name="mensaje"
                  placeholder="Cuéntanos brevemente tu proyecto"
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 min-h-[120px] resize-none focus:outline-none focus:ring-2 focus:ring-sky-500"
                  required
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-sky-600 text-white py-3 rounded-lg font-medium hover:bg-sky-700 transition disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></span>
                      Enviando...
                    </>
                  ) : (
                    "Enviar solicitud"
                  )}
                </button>
                {formStatus === "success" && (
                  <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                    ✓ Solicitud enviada correctamente. Te contactaremos pronto.
                  </div>
                )}

                {formStatus === "error" && (
                  <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    Ocurrió un problema al enviar la solicitud. Intenta
                    nuevamente.
                  </div>
                )}
              </form>

              <p className="text-xs text-gray-500 mt-4">
                Te responderemos a la brevedad posible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr_1fr] items-start">
            {/* Marca */}
            <div>
              <div className="flex items-center gap-3">
                <img
                  src="/logo-addsys.png"
                  alt="ADDSYS"
                  className="h-10 object-contain"
                />
                <div>
                  <div className="font-semibold text-slate-800">ADDSYS SpA</div>
                  <div className="text-sm text-slate-500">
                    Ingeniería Sanitaria
                  </div>
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-500 max-w-md text-justify [text-align-last:left]">
                Soluciones sanitarias en agua potable y aguas servidas, con
                experiencia en proyectos domiciliarios, urbanos e industriales
                desde Temuco para todo Chile.
              </p>
            </div>

            {/* Navegación */}
            <div>
              <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wide">
                Navegación
              </h3>
              <div className="mt-4 flex flex-col gap-3 text-sm text-slate-500">
                <a href="#inicio" className="transition hover:text-sky-700">
                  Inicio
                </a>
                <a href="#servicios" className="transition hover:text-sky-700">
                  Servicios
                </a>
                <a href="#proyectos" className="transition hover:text-sky-700">
                  Proyectos
                </a>
                <a href="#clientes" className="transition hover:text-sky-700">
                  Clientes
                </a>
                <a href="#cobertura" className="transition hover:text-sky-700">
                  Cobertura
                </a>
                <a href="#contacto" className="transition hover:text-sky-700">
                  Contacto
                </a>
              </div>
            </div>

            {/* Contacto */}
            <div>
              <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wide">
                Contacto
              </h3>
              <div className="mt-4 space-y-3 text-sm text-slate-500">
                <div>Temuco, Chile</div>
                <div>Cobertura en todo el país</div>
                <div>operaciones@addsys.cl</div>
                <a
                  href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-xl bg-green-500 px-4 py-2 text-white shadow-sm transition hover:bg-green-600"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-200 pt-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-xs text-slate-400">
            <div>
              © {new Date().getFullYear()} ADDSYS SpA. Todos los derechos
              reservados.
            </div>
            <div>Agua potable · Aguas servidas · Proyectos sanitarios</div>
          </div>
        </div>
      </footer>

      {/* BOTÓN WHATSAPP */}
      <a
        href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-600 transition z-50"
      >
        WhatsApp
      </a>
    </div>
  );
}

function ModernContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();

        setIsSubmitting(true);
        setFormStatus("idle");

        const form = e.currentTarget;
        const formData = new FormData(form);

        const data = {
          nombre: formData.get("nombre"),
          email: formData.get("email"),
          mensaje: formData.get("mensaje"),
        };

        try {
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });

          if (!response.ok) {
            throw new Error("Error al enviar");
          }

          form.reset();
          setFormStatus("success");
        } catch (error) {
          console.error(error);
          setFormStatus("error");
        } finally {
          setIsSubmitting(false);
        }
      }}
      className="grid gap-4 border border-slate-200 rounded-3xl p-5 md:p-6 shadow-sm bg-white"
    >
      <div className="grid gap-4">
        <input
          name="nombre"
          type="text"
          placeholder="Nombre"
          required
          className="border border-slate-300 p-2 rounded-2xl outline-none focus:ring-2 focus:ring-sky-500 transition"
        />

        <input
          name="email"
          type="email"
          placeholder="Correo electrónico"
          required
          className="border border-slate-300 p-2 rounded-2xl outline-none focus:ring-2 focus:ring-sky-500 transition"
        />
      </div>

      <textarea
        name="mensaje"
        placeholder="Cuéntanos brevemente tu proyecto"
        rows={4}
        required
        className="w-full border border-gray-300 rounded-lg px-4 py-2 min-h-[120px] resize-none focus:outline-none focus:ring-2 focus:ring-sky-500"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-sky-600 text-white py-3 rounded-lg font-medium hover:bg-sky-700 transition disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <span className="h-4 w-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></span>
            Enviando...
          </>
        ) : (
          "Enviar solicitud"
        )}
      </button>

      {formStatus === "success" && (
        <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
          ✓ Solicitud enviada correctamente. Te contactaremos pronto.
        </div>
      )}

      {formStatus === "error" && (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          Ocurrió un problema al enviar la solicitud. Intenta nuevamente.
        </div>
      )}
    </form>
  );
}

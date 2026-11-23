"use client";

import Image from "next/image";
import { useState } from "react";

// Cambiar la pareja semanal aquí, junto con sus rótulos y textos alternativos.
const homeWaterProjects = [
  {
    id: "potable",
    label: "Agua potable",
    src: "/Images/F_OB/Grid2.jpg",
    alt: "Bombas verticales de una planta elevadora de agua potable",
    position: "50% 50%",
  },
  {
    id: "servidas",
    label: "Aguas servidas",
    src: "/Images/F_OB/Grid1.jpg",
    alt: "Bombas sumergibles y sensores de nivel en una cámara de aguas servidas",
    position: "46% 50%",
  },
] as const;

type WaterProject = (typeof homeWaterProjects)[number];

// El encuadre puede recortar los lados de una foto panorámica.
const photoSizes =
  "(min-width: 1280px) 800px, (min-width: 768px) calc((100vw - 6rem) * 0.67), (min-width: 640px) calc(100vw - 3rem), calc(100vw - 2.5rem)";

export default function HomeWaterProjects() {
  const [selectedProject, setSelectedProject] = useState<WaterProject>(
    homeWaterProjects[0],
  );

  return (
    <section
      aria-label="Obras de agua potable y aguas servidas"
      className="min-w-0 md:col-start-2 md:row-span-2 md:row-start-1 md:self-center"
    >
      <div className="grid grid-cols-2 gap-3" role="group" aria-label="Elegir obra">
        {homeWaterProjects.map((project) => (
          <button
            key={project.id}
            type="button"
            aria-pressed={selectedProject.id === project.id}
            aria-controls="obra-foto-portada"
            onClick={() => setSelectedProject(project)}
            className={`flex min-h-11 items-center justify-center gap-2 rounded-xl border px-2.5 py-2 text-sm font-semibold leading-snug aria-pressed:shadow-[0_3px_0_currentColor] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current ${
              project.id === "potable"
                ? "border-sky-700/45 bg-sky-50 text-sky-950 hover:bg-sky-100 aria-pressed:border-sky-800 aria-pressed:bg-sky-100"
                : "border-[#8a6345]/55 bg-[#edded0] text-[#492e1a] hover:bg-[#e8d1b9] aria-pressed:border-[#765236] aria-pressed:bg-[#e8d1b9]"
            }`}
          >
            {project.label}
            <span
              aria-hidden="true"
              className={selectedProject.id === project.id ? undefined : "invisible"}
            >
              ✓
            </span>
          </button>
        ))}
      </div>

      <figure
        id="obra-foto-portada"
        data-category={selectedProject.id}
        className="home-water-project-card relative isolate mt-4 aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-2 ring-sky-800 ring-offset-2 md:aspect-[4/3]"
      >
        <Image
          key={selectedProject.id}
          src={selectedProject.src}
          alt={selectedProject.alt}
          fill
          sizes={photoSizes}
          loading="eager"
          fetchPriority={selectedProject.id === "potable" ? "high" : undefined}
          className="object-cover"
          style={{ objectPosition: selectedProject.position }}
        />
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/65 to-transparent px-3 pb-3 pt-8 text-sm font-semibold text-white sm:px-4 sm:pb-4">
          {selectedProject.label}
        </figcaption>
      </figure>
    </section>
  );
}

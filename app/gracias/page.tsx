"use client";

import { useEffect, useState } from "react";

export default function Gracias() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const whatsappNumber = "56968785641";
  const whatsappMessage = encodeURIComponent(
    "Hola, acabo de enviar una solicitud desde la web y quisiera hacer seguimiento."
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 via-white to-cyan-50 px-6">
      
      {/* Card */}
      <div
        className={`max-w-xl w-full bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-10 text-center transform transition-all duration-700 ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Icono animado */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center animate-scaleIn">
            <span className="text-4xl">✔️</span>
          </div>
        </div>

        {/* Título */}
        <h1 className="text-3xl md:text-4xl font-bold text-sky-700">
          ¡Solicitud enviada!
        </h1>

        {/* Texto */}
        <p className="mt-4 text-gray-600 leading-relaxed">
          Gracias por contactarnos. Hemos recibido tu solicitud correctamente y responderemos a la brevedad.
        </p>

        {/* Botones */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          
          {/* WhatsApp */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            className="bg-green-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-600 transition shadow-sm"
          >
            Escribir por WhatsApp
          </a>

          {/* Volver */}
          <a
            href="/"
            className="border border-slate-300 px-6 py-3 rounded-xl font-medium hover:bg-slate-50 transition"
          >
            Volver al inicio
          </a>
        </div>

        {/* Mensaje extra */}
        <p className="mt-6 text-sm text-gray-400">
          Si tu solicitud es urgente, puedes escribirnos directamente por WhatsApp.
        </p>
      </div>

      {/* Animación custom */}
      <style jsx>{`
        @keyframes scaleIn {
          0% {
            transform: scale(0.7);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
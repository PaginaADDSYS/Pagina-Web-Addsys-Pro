export default function Gracias() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-3xl font-bold text-sky-700">
          ¡Solicitud enviada!
        </h1>
        <p className="mt-4 text-gray-600">
          Gracias por contactarnos. Te responderemos a la brevedad.
        </p>

        <a
          href="/"
          className="inline-block mt-6 bg-sky-700 text-white px-6 py-3 rounded-xl"
        >
          Volver al inicio
        </a>
      </div>
    </div>
  );
}
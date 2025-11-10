

import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

export default function Especificaciones() {
  const content = [
    {
      title: "Despliegue en Railway",
      description:
        "Todos los servicios se despliegan en Railway con CI/CD, variables de entorno y logs centralizados. Facilita el escalado y la observabilidad del entorno.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
          Despliegue en Railway
        </div>
      ),
    },
    {
      title: "Microservicio de Usuarios",
      description:
        "Gestión de registro, inicio de sesión y perfiles de usuario. En progreso: definición de esquemas en PostgreSQL, endpoints REST y validación de datos.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,#3b82f6,#8b5cf6)] text-white">
          Usuarios
        </div>
      ),
    },
    {
      title: "Microservicio de Puntos de Interés (POI)",
      description:
        "CRUD de puntos de interés con categorías y geolocalización. En progreso: búsquedas por radio, filtros y paginación.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <img
            src="/images/map.jpg"
            width={320}
            height={240}
            className="h-full w-full object-cover"
            alt="Mapa y puntos de interés"
          />
        </div>
      ),
    },
    {
      title: "API Gateway",
      description:
        "Punto de entrada unificado que enruta hacia Usuarios y POI, centraliza autenticación, rate limiting y agregación de respuestas.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,#f97316,#eab308)] text-white">
          API Gateway
        </div>
      ),
    },
    {
      title: "Base de datos PostgreSQL",
      description:
        "Base relacional principal para persistencia. En progreso: migraciones, índices y constraints para Usuarios y POI.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,#0ea5e9,#22d3ee)] text-white">
          PostgreSQL
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-black px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          Especificaciones y avance
        </h1>
        <p className="mb-8 text-slate-300">
          A continuación se muestra el estado actual de la arquitectura, el despliegue
          y los microservicios principales del proyecto.
        </p>
      </div>
      <div className="w-full py-4">
        <StickyScroll content={content} />
      </div>
    </div>
  );
}
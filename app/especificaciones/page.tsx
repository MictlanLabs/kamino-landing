

import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

export default function Especificaciones() {
  const content = [
    {
      title: "Despliegue en Railway",
      description:
        "Todos los servicios se despliegan en Railway con CI/CD, variables de entorno y logs centralizados. Facilita el escalado y la observabilidad del entorno.",
      content: (
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
          <img
            src="/images/especificaciones/railway.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full scale-105 object-cover blur-md"
            loading="lazy"
            decoding="async"
          />
          <img
            src="/images/especificaciones/railway.png"
            width={320}
            height={240}
            className="relative z-10 max-h-full max-w-full object-contain object-center"
            alt="Despliegue en Railway"
            loading="lazy"
            decoding="async"
          />
        </div>
      ),
    },
    {
      title: "Microservicio de Usuarios",
      description:
        "Gestión de registro, inicio de sesión y perfiles de usuario. En progreso: definición de esquemas en PostgreSQL, endpoints REST y validación de datos.",
      content: (
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
          <img
            src="/images/especificaciones/microUser.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full scale-105 object-cover blur-md"
            loading="lazy"
            decoding="async"
          />
          <img
            src="/images/especificaciones/microUser.png"
            width={320}
            height={240}
            className="relative z-10 max-h-full max-w-full object-contain object-center"
            alt="Microservicio de Usuarios"
            loading="lazy"
            decoding="async"
          />
        </div>
      ),
    },
    {
      title: "Microservicio de Puntos de Interés (POI)",
      description:
        "CRUD de puntos de interés con categorías y geolocalización. En progreso: búsquedas por radio, filtros y paginación.",
      content: (
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
          <img
            src="/images/especificaciones/microPlaces.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full scale-105 object-cover blur-md"
            loading="lazy"
            decoding="async"
          />
          <img
            src="/images/especificaciones/microPlaces.png"
            width={320}
            height={240}
            className="relative z-10 max-h-full max-w-full object-contain object-center"
            alt="Mapa y puntos de interés"
            loading="lazy"
            decoding="async"
          />
        </div>
      ),
    },
    {
      title: "API Gateway",
      description:
        "Punto de entrada unificado que enruta hacia Usuarios y POI, centraliza autenticación, rate limiting y agregación de respuestas.",
      content: (
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
          <img
            src="/images/especificaciones/gateway.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full scale-105 object-cover blur-md"
            loading="lazy"
            decoding="async"
          />
          <img
            src="/images/especificaciones/gateway.png"
            width={320}
            height={240}
            className="relative z-10 max-h-full max-w-full object-contain object-center"
            alt="API Gateway"
            loading="lazy"
            decoding="async"
          />
        </div>
      ),
    },
    {
      title: "Base de datos PostgreSQL",
      description:
        "Base relacional principal para persistencia. En progreso: migraciones, índices y constraints para Usuarios y POI.",
      content: (
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
          <img
            src="/images/especificaciones/postgres.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full scale-105 object-cover blur-md"
            loading="lazy"
            decoding="async"
          />
          <img
            src="/images/especificaciones/postgres.png"
            width={320}
            height={240}
            className="relative z-10 max-h-full max-w-full object-contain object-center"
            alt="Base de datos PostgreSQL"
            loading="lazy"
            decoding="async"
          />
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
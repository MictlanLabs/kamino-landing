

import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

export default function Especificaciones() {
  const content = [
    {
      title: "Despliegue en Railway",
      description:
        "Todos los servicios se despliegan en Railway con CI/CD, variables de entorno y logs centralizados. Facilita el escalado y la observabilidad del entorno.",
      progress: 60,
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
      progress: 100,
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
      progress: 100,
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
      progress: 80,
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
      title: "Implementacion de Base de datos PostgreSQL, MySQL y Redis",
      description:
        "Base de datos PostgreSQL para persistencia de datos estructurados, MySQL para almacenamiento de datos no estructurados y Redis para caché y sesiones.",
      progress: 50,
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
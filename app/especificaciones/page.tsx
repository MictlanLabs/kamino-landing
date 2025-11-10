

import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

export default function Especificaciones() {
  const content = [
    {
      title: "Despliegue en Railway",
      description:
        "Todos los servicios se despliegan en Railway con CI/CD, variables de entorno y logs centralizados. Facilita el escalado y la observabilidad del entorno.",
      progress: 60,
      detailsContent: (
        <div className="space-y-3">
          <p className="text-slate-300">
            Despliegue automatizado para build y release, variables de entorno seguras y logs centralizados. Monitoreo con alertas básicas y health checks.
          </p>
          <ul className="list-disc pl-5 text-slate-300">
            <li>CI/CD con ramas main y desarrollo.</li>
            <li>Entornos: staging y producción.</li>
          </ul>
          <div className="mt-2">
            <img
              src="/images/especificaciones/railway/image.png"
              alt="Panel de Railway"
              className="mx-auto max-h-64 w-full rounded-md object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      ),
      content: (
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
          <img
            src="/images/especificaciones/railway/railway.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full scale-105 object-cover blur-md"
            loading="lazy"
            decoding="async"
          />
          <img
            src="/images/especificaciones/railway/railway.png"
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
      detailsContent: (
        <div className="space-y-3">
          <p className="text-slate-300">
            Servicios previstos: registro, login con JWT, recuperación de contraseña, edición de perfil y verificación de correo.
          </p>
          <ul className="list-disc pl-5 text-slate-300">
            <li>Validación estricta de datos.</li>
            <li>Rate limiting en endpoints sensibles.</li>
            <li>Roles y permisos básicos.</li>
          </ul>
          <div className="mt-2">
            <img
              src="/images/especificaciones/microUser/image.png"
              alt="Diagrama del Microservicio de Usuarios"
              className="mx-auto max-h-64 w-full rounded-md object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      ),
      content: (
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
          <img
            src="/images/especificaciones/microUser/microUser.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full scale-105 object-cover blur-md"
            loading="lazy"
            decoding="async"
          />
          <img
            src="/images/especificaciones/microUser/microUser.png"
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
      detailsContent: (
        <div className="space-y-3">
          <p className="text-slate-300">
            Endpoints para crear, listar, actualizar y eliminar POIs con coordenadas y metadatos.
          </p>
          <ul className="list-disc pl-5 text-slate-300">
            <li>Búsqueda por radio y por categoría.</li>
            <li>Paginación y ordenamientos.</li>
            <li>Integración futura con mapas interactivos.</li>
          </ul>
          <div className="mt-2">
            <img
              src="/images/especificaciones/microPlaces/image.png"
              alt="Diagrama del Microservicio de POI"
              className="mx-auto max-h-64 w-full rounded-md object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      ),
      content: (
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
          <img
            src="/images/especificaciones/microPlaces/microPlaces.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full scale-105 object-cover blur-md"
            loading="lazy"
            decoding="async"
          />
          <img
            src="/images/especificaciones/microPlaces/microPlaces.png"
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
      detailsContent: (
        <div className="space-y-3">
          <p className="text-slate-300">
            Gateway con autenticación, caché de respuestas frecuentes y mecanismos de seguridad (CORS, rate limit, validación).
          </p>
          <ul className="list-disc pl-5 text-slate-300">
            <li>Routing dinámico a servicios internos.</li>
            <li>Agregación de datos de múltiples servicios.</li>
          </ul>
          <div className="mt-2">
            <img
              src="/images/especificaciones/gateway/image.png"
              alt="Diagrama de API Gateway"
              className="mx-auto max-h-64 w-full rounded-md object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      ),
      content: (
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
          <img
            src="/images/especificaciones/gateway/gateway.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full scale-105 object-cover blur-md"
            loading="lazy"
            decoding="async"
          />
          <img
            src="/images/especificaciones/gateway/gateway.png"
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
      detailsContent: (
        <div className="space-y-3">
          <p className="text-slate-300">
            PostgreSQL como base principal, MySQL para ciertos casos y Redis para caché y sesiones. Migraciones y relaciones entre entidades de Usuarios y POIs.
          </p>
          <ul className="list-disc pl-5 text-slate-300">
            <li>Índices para consultas de perfiles y geoespaciales.</li>
          </ul>
          <div className="mt-2">
            <img
              src="/images/especificaciones/bd/image.png"
              alt="Estructura de base de datos"
              className="mx-auto max-h-64 w-full rounded-md object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      ),
      content: (
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
          <img
            src="/images/especificaciones/bd/postgres.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full scale-105 object-cover blur-md"
            loading="lazy"
            decoding="async"
          />
          <img
            src="/images/especificaciones/bd/postgres.png"
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
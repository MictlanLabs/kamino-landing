import Footer from "@/components/footer";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import WorldMap from "@/components/ui/world-map";

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
    {
      title: "App Movil",
      description:
        "Aplicación móvil para usuarios y administradores, con funcionalidades de registro, login, perfil, y búsqueda de POIs.",
      progress: 30,
      detailsContent: (
        <div className="space-y-3">
          <p className="text-slate-300">
            Aplicación móvil para usuarios y administradores, con funcionalidades de registro, login, perfil, y búsqueda de POIs.
          </p>
          <ul className="list-disc pl-5 text-slate-300">
            <li>Roles y permisos básicos.</li>
          </ul>
          <div className="mt-2">
            <img
              src="/images/especificaciones/mobile/login.png"
              alt="landing de la aplicacion movil"  
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
            src="/images/especificaciones/mobile/landing.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full scale-105 object-cover blur-md"
            loading="lazy"
            decoding="async"
          />
          <img
            src="/images/especificaciones/mobile/landing.png"
            width={320}
            height={240}
            className="relative z-10 max-h-full max-w-full object-contain object-center"
            alt="Aplicación móvil"
            loading="lazy"
            decoding="async"
          />
        </div>
      ),
    }
  ];

  return (
    <>
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
      {/* Sección de mapa mundial con capacidades inspiradas en Mapbox */}
      <div className="py-20 bg-black w-full">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-bold text-xl md:text-4xl text-white">
            Implementa Mapbox para visualización global de conectividad y datos geoespaciales.
          </p>
          <p className="text-sm md:text-lg text-neutral-400 max-w-2xl mx-auto py-4">
            Visualización global de conectividad y datos geoespaciales. Este mapa
            sirve como base para futuras integraciones con Mapbox: estilos
            vectoriales, capas dinámicas, búsqueda geocodificada, rutas y
            visualizaciones avanzadas.
          </p>
        </div>
        <WorldMap
          lineColor="#22d3ee"
          dots={[
            { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: 34.0522, lng: -118.2437 } },
            { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: -15.7975, lng: -47.8919 } },
            { start: { lat: -15.7975, lng: -47.8919 }, end: { lat: 38.7223, lng: -9.1393 } },
            { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 28.6139, lng: 77.209 } },
            { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 43.1332, lng: 131.9113 } },
            { start: { lat: 28.6139, lng: 77.209 }, end: { lat: -1.2921, lng: 36.8219 } },
          ]}
        />
        {/* Barras de progreso para tareas relacionadas con el mapa */}
        <div className="mx-auto mt-10 max-w-5xl px-4">
          <h3 className="text-lg font-semibold text-white">
            Progreso de integración de mapa
          </h3>
          <p className="mt-1 text-sm text-neutral-400">
            Estado de: solicitud de token de acceso, pruebas de mapas en web, implementación de Flutter y visualización en móvil.
          </p>

          {/* Lista de barras */}
          {(() => {
            const clamp = (v: number | undefined) => Math.max(0, Math.min(100, v ?? 0));
            const items: Array<{ label: string; value: number; gradient: string }> = [
              {
                label: "Solicitud de token de acceso",
                value: 100,
                gradient: "linear-gradient(to bottom right, #06b6d4, #10b981)",
              },
              {
                label: "Pruebas de mapas en web",
                value: 100,
                gradient: "linear-gradient(to bottom right, #ec4899, #6366f1)",
              },
              {
                label: "Implementación de Flutter",
                value: 10,
                gradient: "linear-gradient(to bottom right, #f97316, #eab308)",
              },
              {
                label: "Visualización en móvil",
                value: 0,
                gradient: "linear-gradient(to bottom right, #06b6d4, #10b981)",
              },
            ];

            return (
              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                {items.map((it, idx) => (
                  <div key={it.label + idx}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-400">{it.label}</span>
                      <span className="text-sm font-semibold text-slate-200">{clamp(it.value)}%</span>
                    </div>
                    <div
                      role="progressbar"
                      aria-valuenow={clamp(it.value)}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      className="mt-2 h-2 w-full rounded-full bg-white/10 ring-1 ring-white/10"
                    >
                      <div
                        className="h-full rounded-full transition-[width] duration-500 ease-out"
                        style={{ width: `${clamp(it.value)}%`, backgroundImage: it.gradient }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            );
          })()}
        </div>
        
      </div>
    </div>
    <Footer />
    </>
  );
}
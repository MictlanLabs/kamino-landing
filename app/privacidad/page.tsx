import type { Metadata } from "next";
import BackButton from "../../components/back-button";

export const metadata: Metadata = {
  title: "Privacidad - Kamino",
  description: "Política de privacidad de Kamino: geolocalización, historial de búsqueda, uso de datos y tus derechos.",
};

export default function Privacidad() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto max-w-3xl px-6 py-16">
        <BackButton className="mb-8" />

        <header className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight">Política de Privacidad</h1>
          <p className="text-white/70 mt-3 leading-relaxed">
            Tu privacidad es importante para nosotros. Aquí detallamos qué datos recopilamos, cómo los usamos y
            cuáles son tus derechos.
          </p>
          <p className="text-white/50 mt-2">Última actualización: 13 de noviembre de 2025</p>
          <div className="mt-6">
            <a
              href="/docs/terminos.pdf"
              download
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-2 text-white hover:bg-white/10 transition"
            >
              <span aria-hidden>⬇</span>
              <span>Descargar Términos y Condiciones (PDF)</span>
            </a>
          </div>
        </header>

        <nav aria-label="Tabla de contenidos" className="mb-10">
          <ul className="list-disc list-inside text-white/70 space-y-1">
            <li><a href="#informacion" className="underline hover:text-white">Información que recopilamos</a></li>
            <li><a href="#uso" className="underline hover:text-white">Uso de tus datos</a></li>
            <li><a href="#seguridad" className="underline hover:text-white">Conservación y seguridad</a></li>
            <li><a href="#base-legal" className="underline hover:text-white">Base legal y consentimiento</a></li>
            <li><a href="#cookies" className="underline hover:text-white">Cookies y tecnologías similares</a></li>
            <li><a href="#terceros" className="underline hover:text-white">Compartición con terceros</a></li>
            <li><a href="#derechos" className="underline hover:text-white">Tus derechos</a></li>
            <li><a href="#cambios" className="underline hover:text-white">Cambios en esta política</a></li>
            <li><a href="#contacto" className="underline hover:text-white">Contacto</a></li>
          </ul>
        </nav>

        <div className="space-y-10 text-white/80">
          <section id="informacion">
            <h2 className="text-2xl font-semibold text-white mb-3">1. Información que recopilamos</h2>
            <div className="leading-relaxed space-y-2">
              <p>Recopilamos la información mínima necesaria para operar y mejorar la experiencia:</p>
              <ul className="list-disc list-inside text-white/70 space-y-1">
                <li><span className="text-white/80">Correo electrónico</span> para comunicaciones (lista de espera, invitaciones, novedades).</li>
                <li><span className="text-white/80">Geolocalización</span> del dispositivo cuando otorgas permiso, usada para recomendaciones y rutas urbanas.
                  Puedes revocar el permiso desde los ajustes de tu dispositivo.</li>
                <li><span className="text-white/80">Historial de búsqueda</span> y de interacción en la app, para mejorar resultados y personalizar contenido.</li>
              </ul>
              <p>No recopilamos información sensible sin tu consentimiento explícito.</p>
            </div>
          </section>

          <section id="uso">
            <h2 className="text-2xl font-semibold text-white mb-3">2. Uso de tus datos</h2>
            <div className="leading-relaxed space-y-2">
              <ul className="list-disc list-inside text-white/70 space-y-1">
                <li>Comunicaciones sobre el producto y novedades.</li>
                <li>Personalización de resultados y recomendaciones mediante tu ubicación y tu historial de búsqueda.</li>
                <li>Planificación de rutas y puntos de interés para exploración urbana.</li>
                <li>Mejora continua del servicio y seguridad operativa.</li>
              </ul>
              <p>No vendemos tus datos a terceros.</p>
            </div>
          </section>

          <section id="seguridad">
            <h2 className="text-2xl font-semibold text-white mb-3">3. Conservación y seguridad</h2>
            <p className="leading-relaxed">
              Conservamos tus datos solo el tiempo necesario para cumplir con las finalidades indicadas y aplicamos
              medidas razonables de seguridad para protegerlos contra accesos no autorizados, uso indebido o divulgación.
            </p>
          </section>

          <section id="base-legal">
            <h2 className="text-2xl font-semibold text-white mb-3">4. Base legal y consentimiento</h2>
            <p className="leading-relaxed">
              Tratamos tus datos en base a tu consentimiento (por ejemplo, el permiso de ubicación) y a nuestro interés
              legítimo para operar y mejorar la aplicación. Puedes retirar tu consentimiento en cualquier momento.
            </p>
          </section>

          <section id="cookies">
            <h2 className="text-2xl font-semibold text-white mb-3">5. Cookies y tecnologías similares</h2>
            <p className="leading-relaxed">
              Podemos usar cookies o tecnologías similares para recordar preferencias, medir uso y mejorar el rendimiento.
              Puedes gestionar estas tecnologías desde la configuración de tu navegador o dispositivo.
            </p>
          </section>

          <section id="terceros">
            <h2 className="text-2xl font-semibold text-white mb-3">6. Compartición con terceros</h2>
            <p className="leading-relaxed">
              Compartimos datos únicamente con proveedores que nos ayudan a operar (por ejemplo, mapas, envío de correo,
              analítica), bajo acuerdos de confidencialidad y solo para las finalidades descritas.
            </p>
          </section>

          <section id="derechos">
            <h2 className="text-2xl font-semibold text-white mb-3">7. Tus derechos</h2>
            <p className="leading-relaxed">
              Puedes ejercer tus derechos de acceso, rectificación, eliminación y oposición al tratamiento de tu
              información. Para ello, contáctanos en
              {" "}
              <a href="mailto:223260@ids.upchiapas.edu.mx" className="underline text-white hover:text-white">223260@ids.upchiapas.edu.mx</a>.
            </p>
          </section>

          <section id="cambios">
            <h2 className="text-2xl font-semibold text-white mb-3">8. Cambios en esta política</h2>
            <p className="leading-relaxed">
              Podremos actualizar esta política de privacidad. Publicaremos cualquier cambio en esta misma página,
              indicando la fecha de la última modificación.
            </p>
          </section>

          <section id="contacto">
            <h2 className="text-2xl font-semibold text-white mb-3">9. Contacto</h2>
            <p className="leading-relaxed">
              Si tienes preguntas o inquietudes sobre esta política, escríbenos a
              {" "}
              <a href="mailto:223260@ids.upchiapas.edu.mx" className="underline text-white hover:text-white">223260@ids.upchiapas.edu.mx</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
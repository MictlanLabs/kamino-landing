import React from "react";
import { IconUserCircle, IconStar, IconChartBar } from "@tabler/icons-react";

export default function RecommendationSystem() {
  return (
    <div className="w-full max-w-7xl mx-auto mt-16 px-4 md:px-8">
      <div className="relative bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl p-8 md:p-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          
          <div className="flex-1 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Personalización Profunda: <span className="text-[#85E6C0]">Más allá de lo genérico</span>
            </h3>
            <p className="text-neutral-400 text-lg leading-relaxed">
              Nuestro motor no solo sugiere lugares, <span className="text-white font-medium">entiende quién eres</span>. 
              Analizamos tu perfil de viajero para ofrecerte recomendaciones que realmente resuenen contigo, 
              alejándote de las trampas para turistas y acercándote a las verdaderas joyas de la ciudad.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="flex gap-4 items-start">
                <div className="p-2 rounded-lg bg-[#85E6C0]/10 shrink-0">
                  <IconUserCircle className="w-6 h-6 text-[#85E6C0]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Perfil de Usuario</h4>
                  <p className="text-sm text-neutral-500">Adaptación basada en tus gustos históricos, ritmo de viaje y preferencias culturales.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="p-2 rounded-lg bg-[#85E6C0]/10 shrink-0">
                  <IconStar className="w-6 h-6 text-[#85E6C0]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Ranking de Joyas Ocultas</h4>
                  <p className="text-sm text-neutral-500">Algoritmo exclusivo que puntúa lugares por su autenticidad y valor local, no solo por popularidad.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full lg:w-auto">
            <div className="relative bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow-2xl">
              {/* Decorative chart UI */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <IconChartBar className="w-5 h-5 text-[#85E6C0]" />
                  <span className="text-sm font-medium text-neutral-300">Afinidad del Lugar</span>
                </div>
                <span className="text-xs text-neutral-500">Análisis en tiempo real</span>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-neutral-400">
                    <span>Café de Especialidad (Local)</span>
                    <span className="text-[#85E6C0]">98% Match</span>
                  </div>
                  <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                    <div className="h-full bg-[#85E6C0] w-[98%]" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-neutral-400">
                    <span>Galería de Arte Urbano</span>
                    <span className="text-[#85E6C0]">85% Match</span>
                  </div>
                  <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                    <div className="h-full bg-[#85E6C0] w-[85%]" />
                  </div>
                </div>

                 <div className="space-y-2">
                  <div className="flex justify-between text-xs text-neutral-400">
                    <span>Franquicia Internacional</span>
                    <span className="text-red-400">12% Match</span>
                  </div>
                  <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                    <div className="h-full bg-red-400 w-[12%]" />
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800 text-center">
                <p className="text-xs text-neutral-500">
                  El sistema filtra opciones irrelevantes para maximizar tu experiencia.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

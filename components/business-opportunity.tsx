import React from "react";
import { cn } from "@/lib/utils";
import { IconBuildingMonument, IconMapPin, IconAugmentedReality } from "@tabler/icons-react";

export default function BusinessOpportunity() {
  return (
    <div className="w-full py-20 lg:py-40 bg-neutral-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-neutral-950/0" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Nuevos Horizontes: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#85E6C0] to-[#4ecdc4]">Patrimonio Inteligente</span>
          </h2>
          <p className="text-neutral-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Expandimos nuestra visión más allá de la cidad. Kamino presenta una oportunidad para 
            <span className="text-[#85E6C0] font-medium"> dar vida a zonas culturales e Históricos</span>, 
            dando experiencias vivas mediante nuestra tecnología narrativa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <Card 
            title="Digitalización de Sitios Históricos" 
            description="Llevamos la infraestructura de Kamino a zonas arqueológicas, ofreciendo audioguías contextuales que se activan paso a paso, sin necesidad de hardware costoso ni señalética intrusiva."
            icon={<IconBuildingMonument className="w-10 h-10 text-[#85E6C0]" />}
          />
          <Card 
            title="Descubrimiento de Destinos Ocultos" 
            description="Conectamos a viajeros curiosos con tesoros locales poco conocidos. Ayudamos a comunidades a poner sus atractivos en el mapa digital, fomentando un turismo distribuido y sostenible."
            icon={<IconMapPin className="w-10 h-10 text-[#85E6C0]" />}
          />
          <Card 
            title="Reconstrucción Narrativa" 
            description="Utilizamos nuestra IA para 'reconstruir' la historia. Donde el ojo ve piedras, Kamino narra leyendas, batallas y vida cotidiana, creando un museo invisible de alcance global."
            icon={<IconAugmentedReality className="w-10 h-10 text-[#85E6C0]" />}
          />
        </div>
      </div>
    </div>
  );
}

const Card = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col items-start p-6 lg:p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-[#85E6C0]/50 transition-colors duration-300 group">
      <div className="p-3 rounded-xl bg-[#85E6C0]/10 mb-6 group-hover:bg-[#85E6C0]/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#85E6C0] transition-colors">
        {title}
      </h3>
      <p className="text-neutral-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

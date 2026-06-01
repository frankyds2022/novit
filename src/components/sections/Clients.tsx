import React from "react";

export function Clients() {
  const clientLogos = [
    { name: "RIMAC SEGUROS", color: "hover:text-blue-600 hover:border-blue-600/30" },
    { name: "PACÍFICO SEGUROS", color: "hover:text-cyan-500 hover:border-cyan-500/30" },
    { name: "AUNA", color: "hover:text-teal-600 hover:border-teal-600/30" },
    { name: "INTERCORP", color: "hover:text-green-600 hover:border-green-600/30" },
    { name: "MAPFRE", color: "hover:text-red-500 hover:border-red-500/30" },
    { name: "CLÍNICA DELGADO", color: "hover:text-blue-800 hover:border-blue-800/30" },
    { name: "AVIVA CLÍNICA", color: "hover:text-purple-500 hover:border-purple-500/30" },
    { name: "SANNA", color: "hover:text-sky-500 hover:border-sky-500/30" },
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-zinc-100">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 text-center">
        
        {/* Header Title */}
        <div className="flex flex-col items-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00d0b8]">
            CLIENTES Y SOCIOS
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl font-normal tracking-tight text-zinc-900 leading-[1.2]">
            Más de 15 años construyendo relaciones a largo plazo. Nuestros clientes son nuestra mejor carta de presentación
          </h2>
        </div>

        {/* Corporate Grayscale Logos Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {clientLogos.map((client) => (
            <div 
              key={client.name} 
              className={`flex h-20 items-center justify-center rounded-2xl border border-zinc-100 bg-zinc-50/50 p-4 transition-all duration-300 hover:bg-white hover:shadow-[0_4px_20px_rgba(0,0,0,0.02)] cursor-pointer text-zinc-400 font-black tracking-widest text-xs sm:text-sm select-none ${client.color}`}
            >
              <div className="flex items-center gap-1.5">
                {/* Micro branding bullet */}
                <div className="h-2 w-2 rounded-full bg-current opacity-20" />
                <span>{client.name}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

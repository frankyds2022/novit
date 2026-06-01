import React from "react";
import Image from "next/image";

export function Clients() {
  const clientLogos = [
    { name: "Rímac", image: "/images/logo-rimac.png" },
    { name: "Pacífico", image: "/images/logo-pacifico.png" },
    { name: "Auna", image: "/images/logo-auna.png" },
    { name: "Intercorp", image: "/images/logo-intercorp.png" },
    { name: "Mapfre", image: "/images/logo-mapfre.png" },
    { name: "Aviva", image: "/images/logo-aviva.png" },
    { name: "Sanna", image: "/images/logo-sanna.png" },
    { name: "Aliada", image: "/images/logo-aliada.png" },
    { name: "Boticas y Salud", image: "/images/logo-boticasysalud.png" },
    { name: "CRP", image: "/images/logo-crp.png" },
    { name: "Roe", image: "/images/logo-roe.png" },
    { name: "Sedapal", image: "/images/logo-sedapal.png" },
    { name: "Sunat", image: "/images/logo-sunat.png" },
    { name: "PUCP", image: "/images/logo-pucp.png" },
    { name: "Latina", image: "/images/logo-latina.png" },
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

        {/* Corporate Logos Grid (Grayscale to full color transition) */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 sm:gap-6">
          {clientLogos.map((client) => (
            <div 
              key={client.name} 
              className="flex h-24 items-center justify-center rounded-2xl border border-zinc-100 bg-zinc-50/30 p-5 transition-all duration-300 hover:bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] cursor-pointer group"
            >
              <div className="relative w-full h-full max-w-[120px] aspect-[3/1] grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                <Image
                  src={client.image}
                  alt={`Logo ${client.name}`}
                  fill
                  className="object-contain"
                  sizes="120px"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

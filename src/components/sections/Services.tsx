import React from "react";
import Image from "next/image";

export function Services() {
  const serviceList = [
    {
      title: "Inteligencia Artificial",
      description: "Automatización de procesos, chatbots e inteligencia de negocios.",
      image: "/images/icon-demo.png",
    },
    {
      title: "Fábrica de software",
      description: "Desarrollo ágil a medida de aplicaciones web y móviles.",
      image: "/images/icon-demo2-150x150.png",
    },
    {
      title: "Consultoría de Innovación y Procesos",
      description: "Análisis de procesos y co-creación de nuevos productos digitales.",
      image: "/images/icon-demo3.png",
    },
    {
      title: "Diseño UX",
      description: "Investigación de usuarios, diseño de interfaces y prototipos interactivos.",
      image: "/images/icon-demo4.png",
    },
  ];

  return (
    <section id="servicios" className="w-full bg-[#fcfdfe] py-20 lg:py-28 border-t border-zinc-100">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column */}
          <div className="flex flex-col lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00d0b8]">
              QUÉ HACEMOS
            </span>
            <h2 className="mt-4 text-3xl font-normal tracking-tight text-zinc-900 sm:text-4xl lg:text-[38px] leading-[1.2]">
              En NOVIT ayudamos a empresas de todos los tamaños a innovar, diseñar y escalar sus productos digitales.
            </h2>
          </div>

          {/* Right Services Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-7">
            {serviceList.map((service) => (
              <div 
                key={service.title} 
                className="group relative flex flex-col gap-4 rounded-2xl border border-zinc-100 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.01)] transition-all duration-300 hover:-translate-y-1 hover:border-[#00d0b8]/30 hover:shadow-[0_8px_30px_rgba(0,208,184,0.05)]"
              >
                {/* Image Icon instead of SVG */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-zinc-50 border border-zinc-100 p-2 shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                
                {/* Title styled like a sleek link/heading */}
                <h3 className="text-lg font-bold text-zinc-900 group-hover:text-[#00d0b8] transition-colors relative inline-block">
                  <span className="border-b-2 border-zinc-900/10 group-hover:border-[#00d0b8]/30 pb-0.5 transition-all">
                    {service.title}
                  </span>
                </h3>
                
                <p className="text-sm leading-relaxed text-zinc-500">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

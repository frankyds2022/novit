import React from "react";

export function Services() {
  const serviceList = [
    {
      title: "Inteligencia Artificial",
      description: "Automatización de procesos, chatbots e inteligencia de negocios.",
      icon: (
        <svg className="h-6 w-6 text-[#00d0b8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Fábrica de software",
      description: "Desarrollo ágil a medida de aplicaciones web y móviles.",
      icon: (
        <svg className="h-6 w-6 text-[#00d0b8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: "Consultoría de Innovación y Procesos",
      description: "Análisis de procesos y co-creación de nuevos productos digitales.",
      icon: (
        <svg className="h-6 w-6 text-[#00d0b8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      title: "Diseño UX",
      description: "Investigación de usuarios, diseño de interfaces y prototipos interactivos.",
      icon: (
        <svg className="h-6 w-6 text-[#00d0b8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
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
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00d0b8]/10 text-[#00d0b8]">
                  {service.icon}
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

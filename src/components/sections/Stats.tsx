"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../ui/Button";

export function Stats() {
  const statsList = [
    { value: "+0M", label: "Usuarios activos de nuestras soluciones" },
    { value: "+0M", label: "Transacciones procesadas diariamente" },
    { value: "+0K", label: "Horas de consultoría y diseño de innovación" },
    { value: "+0K", label: "Líneas de código limpio y listas para producción" },
  ];

  return (
    <section id="trayectoria" className="w-full bg-white py-20 lg:py-28 border-t border-zinc-100">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Subtitle & Headline */}
        <div className="flex flex-col max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00d0b8]">
            NUESTRA TRAYECTORIA
          </span>
          <h2 className="mt-4 text-3xl font-normal tracking-tight text-zinc-900 sm:text-4xl lg:text-[38px] leading-[1.2]">
            Más de una década desarrollando proyectos de alto impacto para empresas líderes en Perú y Latinoamérica.
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-20">
          {statsList.map((stat) => (
            <div key={stat.label} className="flex gap-4 items-start">
              {/* Vertical accent bar */}
              <div className="w-[3px] self-stretch bg-[#00d0b8] rounded-full" />
              <div className="flex flex-col">
                <span className="text-4xl lg:text-5xl font-black text-zinc-900 tracking-tight leading-none">
                  {stat.value}
                </span>
                <span className="mt-2 text-sm text-zinc-500 font-medium leading-relaxed">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Healthcare & Insurance Banner Card */}
        <div className="w-full rounded-3xl bg-[#f4faff] border border-blue-50/50 p-8 lg:p-12 overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.01)]">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            
            {/* Left Content Column */}
            <div className="flex flex-col text-left lg:col-span-7">
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-normal text-zinc-900 leading-[1.2]">
                Somos especialistas en seguros y salud.
              </h3>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-600">
                Desarrollamos soluciones avanzadas e integradas para mejorar la calidad de vida y el acceso a la salud para clínicas, centros de salud y aseguradoras.
              </p>
              <div className="mt-8">
                <Button 
                  variant="teal" 
                  size="md"
                  onClick={() => window.location.href = "#caso-exito"}
                >
                  Conoce nuestro HIS
                  <svg className="ml-2 h-4 w-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Button>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="relative flex justify-center lg:col-span-5">
              <div className="relative w-full max-w-[380px] aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.04)]">
                <Image
                  src="/imac_med_dashboard.png"
                  alt="Novit HIS Medical Screen Dashboard"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-w-1024px) 100vw, 380px"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

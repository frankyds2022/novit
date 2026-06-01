"use client";

import React from "react";
import { Button } from "../ui/Button";

export function CaseStudy() {
  const benefits = [
    "Ficha médica electrónica integrada para historial clínico unificado.",
    "Integración en tiempo real con laboratorios, farmacias e imágenes médicas.",
    "Telemedicina nativa y plataforma completa de reservas online.",
    "Módulos avanzados de facturación electrónica y convenios con aseguradoras (EPS).",
  ];

  return (
    <section id="caso-exito" className="w-full bg-white py-20 lg:py-28 border-t border-zinc-100">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Text Column */}
          <div className="flex flex-col text-left lg:col-span-6 bg-white">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00d0b8]">
              CASO DE ÉXITO
            </span>
            <h2 className="mt-4 text-3xl font-normal tracking-tight text-zinc-900 sm:text-4xl lg:text-[38px] leading-[1.2]">
              Sharky, un HIS que transforma la salud digital en Perú.
            </h2>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-zinc-500">
              Una solución SaaS en la nube e integrada de salud que conecta clínicas, médicos y pacientes en tiempo real. Gestiona la información médica de forma segura, reduciendo tiempos de espera y optimizando procesos operativos complejos como los convenios médicos y el TEDEF de SUSALUD.
            </p>
            
            {/* Benefit Check Bullet Points */}
            <ul className="mt-8 flex flex-col gap-3.5">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-zinc-700">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00d0b8]/10 text-[#00d0b8]">
                    <svg className="h-3.5 w-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button 
                variant="teal" 
                size="md"
                onClick={() => window.location.href = "#contacto"}
              >
                Solicitar demo de Sharky
                <svg className="ml-2 h-4 w-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Right Video / Visual Column */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[500px] aspect-video rounded-3xl bg-zinc-950 border border-zinc-800 shadow-[0_12px_40px_rgba(0,0,0,0.15)] overflow-hidden group">
              {/* Background gradient grid mesh */}
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900/60 to-zinc-950/80 -z-10" />
              <div className="absolute inset-0 bg-[radial-gradient(#00d0b8_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
              
              {/* Pulse neon light blur ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-20 rounded-full bg-[#00d0b8]/10 blur-xl group-hover:bg-[#00d0b8]/20 transition-all duration-300" />
              
              {/* Pulsing Play Button */}
              <button 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-16 w-16 items-center justify-center rounded-full bg-[#00d0b8] text-white shadow-[0_4px_20px_rgba(0,208,184,0.4)] transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
                aria-label="Ver video presentación de Sharky"
              >
                <svg className="h-6 w-6 fill-current translate-x-0.5" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>

              {/* Bottom tag bar */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-zinc-900/85 backdrop-blur-md px-4 py-2.5 rounded-xl border border-zinc-800">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                  Video Presentación
                </span>
                <span className="text-xs font-medium text-zinc-500">
                  2:30 Min
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

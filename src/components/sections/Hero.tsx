"use client";

import React from "react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full bg-white overflow-hidden min-h-[500px] lg:min-h-[600px] flex items-center border-b border-zinc-100">
      
      {/* Split background layout on Desktop */}
      <div className="mx-auto max-w-7xl w-full px-6 sm:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left bg-white/80 backdrop-blur-sm lg:backdrop-blur-none lg:bg-transparent rounded-2xl p-4 lg:p-0">
            {/* Main Headline (Clean regular/medium weight, sans-serif, all-black text matching Image 1) */}
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-normal tracking-tight text-zinc-900 leading-[1.2]">
              Soluciones impulsadas por inteligencia artificial, tecnología y experiencia centrada en el usuario.
            </h1>
            
            {/* Subtitle with bold 'salud y seguros' */}
            <p className="mt-8 text-sm sm:text-base leading-relaxed text-zinc-700 max-w-2xl font-normal">
              Somos una consultora con más de 15 años de experiencia en diseño UX, desarrollo de software, innovación y soluciones con inteligencia artificial. Expertos en el sector <span className="font-bold text-zinc-900">salud y seguros</span>.
            </p>
            
            {/* Down Arrow Indicator */}
            <div className="mt-12">
              <a 
                href="#servicios" 
                className="inline-flex items-center justify-center h-10 w-10 text-zinc-800 hover:text-[#00d0b8] transition-colors duration-300"
                aria-label="Desplazarse hacia abajo"
              >
                <svg 
                  className="h-6 w-6 animate-bounce" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Spacer for Right Column on Desktop */}
          <div className="lg:col-span-5 h-[300px] lg:h-auto pointer-events-none" />

        </div>
      </div>

      {/* Full-bleed seamless face profile container on the right side */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[48%] h-full z-0 pointer-events-none">
        <div className="relative w-full h-full">
          <Image
            src="/novit_hero_face.png"
            alt="Novit Digital Intelligence Network"
            fill
            priority
            className="object-cover object-left lg:object-center"
            sizes="(max-w-1024px) 100vw, 50vw"
          />
        </div>
      </div>

    </section>
  );
}

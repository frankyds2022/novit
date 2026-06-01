import React from "react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-[#e5e5e5] border-t border-zinc-300 text-zinc-700 py-10">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Main Footer Block: Split Layout matching the screenshot */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          
          {/* Left Side: Logos Image (logos-300x113.png) */}
          <div className="flex shrink-0 justify-center md:justify-start w-full md:w-auto">
            <div className="relative w-[220px] sm:w-[250px] aspect-[300/113] transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src="/images/logos-300x113.png"
                alt="Marcas Registradas de Novit: MyCore, Focus, Vitalus"
                fill
                className="object-contain"
                priority
                sizes="250px"
              />
            </div>
          </div>

          {/* Right Side: Methodology Text */}
          <div className="flex-1 text-zinc-700 text-left text-xs sm:text-sm leading-relaxed font-normal">
            <p>
              En <span className="font-semibold text-zinc-950">Novit</span> desarrollamos y utilizamos metodologías y software propios, representados por nuestras marcas registradas <span className="font-semibold text-zinc-950">MyCore®, Focus® y Vitalus®</span>. Estas marcas forman parte esencial de nuestros servicios y garantizan que cada solución entregada a nuestros clientes está respaldada por procesos exclusivos y de calidad certificada.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}
